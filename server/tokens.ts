import crypto from 'crypto';
import { getProduct, ServerProduct } from './products';

export interface DownloadTokenData {
  token: string;
  ebookId: string;
  orderId: string;
  captureId: string;
  createdAt: number;
  expiresAt: number;
  downloadCount: number;
  maxDownloads: number;
}

// In-memory token storage (can be persisted to Redis/Database in large-scale setups)
const tokenStore = new Map<string, DownloadTokenData>();

// Default token validity: 24 hours (86,400,000 ms)
const DEFAULT_TOKEN_TTL_MS = 24 * 60 * 60 * 1000;
const MAX_DOWNLOAD_LIMIT = 10;

/**
 * Generate a cryptographically secure temporary download authorization
 */
export function createDownloadToken(params: {
  ebookId: string;
  orderId: string;
  captureId: string;
  ttlMs?: number;
}): DownloadTokenData {
  const token = crypto.randomBytes(32).toString('hex');
  const now = Date.now();
  const ttl = params.ttlMs || DEFAULT_TOKEN_TTL_MS;

  const data: DownloadTokenData = {
    token,
    ebookId: params.ebookId,
    orderId: params.orderId,
    captureId: params.captureId,
    createdAt: now,
    expiresAt: now + ttl,
    downloadCount: 0,
    maxDownloads: MAX_DOWNLOAD_LIMIT,
  };

  tokenStore.set(token, data);
  return data;
}

/**
 * Validate a download token and return the associated product if valid
 */
export function validateDownloadToken(token: string): {
  valid: boolean;
  error?: 'not_found' | 'expired' | 'limit_exceeded' | 'invalid_product';
  product?: ServerProduct;
  tokenData?: DownloadTokenData;
} {
  if (!token || typeof token !== 'string') {
    return { valid: false, error: 'not_found' };
  }

  const data = tokenStore.get(token);
  if (!data) {
    return { valid: false, error: 'not_found' };
  }

  const now = Date.now();
  if (now > data.expiresAt) {
    tokenStore.delete(token);
    return { valid: false, error: 'expired' };
  }

  if (data.downloadCount >= data.maxDownloads) {
    return { valid: false, error: 'limit_exceeded' };
  }

  const product = getProduct(data.ebookId);
  if (!product) {
    return { valid: false, error: 'invalid_product' };
  }

  return { valid: true, product, tokenData: data };
}

/**
 * Record a successful download attempt
 */
export function incrementDownloadCount(token: string): void {
  const data = tokenStore.get(token);
  if (data) {
    data.downloadCount += 1;
  }
}

// Periodic cleanup of expired tokens every 30 minutes
setInterval(() => {
  const now = Date.now();
  for (const [token, data] of tokenStore.entries()) {
    if (now > data.expiresAt) {
      tokenStore.delete(token);
    }
  }
}, 30 * 60 * 1000).unref();
