import { Router, Request, Response } from 'express';
import { getProduct, PRODUCTS_CATALOG } from '../products';
import { createPayPalOrder, capturePayPalOrder, isPayPalConfigured } from '../paypal';
import { createDownloadToken } from '../tokens';

const router = Router();

/**
 * Public configuration endpoint for frontend PayPal JS SDK
 */
router.get('/config', (req: Request, res: Response) => {
  const configured = isPayPalConfigured();
  res.json({
    configured,
    clientId: process.env.PAYPAL_CLIENT_ID || '',
    mode: (process.env.PAYPAL_MODE || 'sandbox').toLowerCase(),
    currency: 'USD',
  });
});

/**
 * Create a PayPal order on the server
 */
router.post('/create-order', async (req: Request, res: Response): Promise<void> => {
  try {
    const { ebookId } = req.body || {};

    if (!ebookId || typeof ebookId !== 'string') {
      res.status(400).json({ error: 'Valid eBook ID is required.' });
      return;
    }

    const product = getProduct(ebookId);
    if (!product) {
      res.status(404).json({
        error: `eBook with ID "${ebookId}" not found in catalog. Available products: ${Object.keys(PRODUCTS_CATALOG).join(', ')}`
      });
      return;
    }

    if (!isPayPalConfigured()) {
      res.status(503).json({
        error: 'PayPal payments are not currently configured on the server. Please set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in your environment variables.',
        code: 'PAYPAL_NOT_CONFIGURED',
      });
      return;
    }

    const order = await createPayPalOrder(product);

    res.json({
      orderID: order.id,
      status: order.status,
      product: {
        id: product.id,
        title: product.title,
        price: product.price,
        currency: product.currency,
      },
    });
  } catch (error: any) {
    console.error('Error creating PayPal order:', error);
    res.status(500).json({
      error: error.message || 'Failed to create PayPal order. Please try again.',
      code: 'ORDER_CREATION_FAILED',
    });
  }
});

/**
 * Capture a PayPal order on the server and generate a secure download token
 */
router.post('/capture-order', async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderID, ebookId } = req.body || {};

    if (!orderID || typeof orderID !== 'string') {
      res.status(400).json({ error: 'Order ID is required to capture payment.' });
      return;
    }

    if (!ebookId || typeof ebookId !== 'string') {
      res.status(400).json({ error: 'eBook ID is required for verification.' });
      return;
    }

    const product = getProduct(ebookId);
    if (!product) {
      res.status(400).json({ error: 'Invalid eBook product specified for order capture.' });
      return;
    }

    if (!isPayPalConfigured()) {
      res.status(503).json({
        error: 'PayPal credentials are not configured on this server.',
        code: 'PAYPAL_NOT_CONFIGURED',
      });
      return;
    }

    // Capture order on server
    const captureResult = await capturePayPalOrder(orderID, ebookId);

    // Order is successfully captured and verified! Generate secure temporary download token
    const tokenData = createDownloadToken({
      ebookId: product.id,
      orderId: captureResult.orderId,
      captureId: captureResult.captureId,
    });

    res.json({
      success: true,
      message: 'Payment completed successfully. Your eBook download is ready.',
      downloadToken: tokenData.token,
      expiresAt: tokenData.expiresAt,
      ebook: {
        id: product.id,
        title: product.title,
        price: product.price,
        currency: product.currency,
      },
      order: {
        id: captureResult.orderId,
        captureId: captureResult.captureId,
        amount: captureResult.amount,
        currency: captureResult.currency,
        payerEmail: captureResult.payerEmail,
      },
    });
  } catch (error: any) {
    console.error('Error capturing PayPal order:', error);

    const isAlreadyCaptured = error.message && error.message.includes('already been captured');
    res.status(isAlreadyCaptured ? 409 : 500).json({
      error: error.message || 'Payment capture failed. Please contact support.',
      code: isAlreadyCaptured ? 'ALREADY_CAPTURED' : 'CAPTURE_FAILED',
    });
  }
});

export default router;
