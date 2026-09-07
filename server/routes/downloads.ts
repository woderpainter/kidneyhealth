import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { validateDownloadToken, incrementDownloadCount } from '../tokens';

const router = Router();

/**
 * Resolve the private eBook storage directory
 */
export function getStorageDirectory(): string {
  if (process.env.EBOOK_STORAGE_PATH && process.env.EBOOK_STORAGE_PATH.trim().length > 0) {
    const configuredPath = process.env.EBOOK_STORAGE_PATH.trim();
    return path.isAbsolute(configuredPath)
      ? configuredPath
      : path.resolve(process.cwd(), configuredPath);
  }
  return path.resolve(process.cwd(), 'storage', 'ebooks');
}

/**
 * Verify token validity without downloading file
 */
router.get('/verify/:token', (req: Request, res: Response): void => {
  const { token } = req.params;
  const validation = validateDownloadToken(token);

  if (!validation.valid || !validation.product || !validation.tokenData) {
    let message = 'Invalid download authorization token.';
    if (validation.error === 'expired') {
      message = 'Your download token has expired. Please contact support with your receipt.';
    } else if (validation.error === 'limit_exceeded') {
      message = 'Maximum download limit reached for this session.';
    }
    res.status(400).json({ valid: false, error: validation.error, message });
    return;
  }

  res.json({
    valid: true,
    ebook: {
      id: validation.product.id,
      title: validation.product.title,
      price: validation.product.price,
      currency: validation.product.currency,
    },
    expiresAt: validation.tokenData.expiresAt,
    remainingDownloads: validation.tokenData.maxDownloads - validation.tokenData.downloadCount,
  });
});

/**
 * Secure download endpoint
 * Protected by temporary one-time/time-limited token
 */
router.get('/:token', (req: Request, res: Response): void => {
  try {
    const { token } = req.params;

    if (!token || typeof token !== 'string') {
      res.status(400).send('Invalid download request. Token is missing.');
      return;
    }

    const validation = validateDownloadToken(token);

    if (!validation.valid || !validation.product || !validation.tokenData) {
      if (validation.error === 'expired') {
        res.status(410).send(
          'Download link expired. Download authorizations are valid for 24 hours. Please contact customer support with your PayPal Order ID for assistance.'
        );
        return;
      }
      if (validation.error === 'limit_exceeded') {
        res.status(429).send(
          'Download limit exceeded. You have reached the maximum download attempts for this authorization token.'
        );
        return;
      }
      res.status(403).send('Unauthorized or invalid download authorization token.');
      return;
    }

    const product = validation.product;
    const storageDir = getStorageDirectory();

    // Prevent any directory traversal attacks: sanitize filename
    const safeFilename = path.basename(product.pdfFile);
    const filePath = path.join(storageDir, safeFilename);

    // Verify resolved path stays strictly within the configured storage directory
    const resolvedPath = path.resolve(filePath);
    if (!resolvedPath.startsWith(path.resolve(storageDir))) {
      console.error('Security alert: Directory traversal attempt detected:', filePath);
      res.status(403).send('Access denied.');
      return;
    }

    // Verify file existence in private storage
    if (!fs.existsSync(resolvedPath)) {
      console.error(`Private eBook PDF not found on filesystem at: ${resolvedPath}`);
      res.status(404).send(
        `The requested eBook document ("${product.title}") is temporarily unavailable on the server. Please contact support with your Order ID: ${validation.tokenData.orderId}`
      );
      return;
    }

    // Get file stats
    const stats = fs.statSync(resolvedPath);

    // Friendly sanitized download filename for user's device
    const downloadDisplayName = `${product.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;

    // Increment download counter
    incrementDownloadCount(token);

    // Set secure headers - Never expose the internal filesystem path
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', stats.size);
    res.setHeader('Content-Disposition', `attachment; filename="${downloadDisplayName}"`);
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    // Stream file directly to customer
    const fileStream = fs.createReadStream(resolvedPath);
    fileStream.on('error', (streamErr) => {
      console.error('Error streaming eBook PDF:', streamErr);
      if (!res.headersSent) {
        res.status(500).send('An error occurred while transmitting the file. Please try again.');
      }
    });

    fileStream.pipe(res);
  } catch (error: any) {
    console.error('Download route failure:', error);
    res.status(500).send('Internal server error while processing eBook download.');
  }
});

export default router;
