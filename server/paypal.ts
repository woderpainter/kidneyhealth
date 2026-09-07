import { getProduct, ServerProduct } from './products';

interface PayPalTokenCache {
  accessToken: string;
  expiresAt: number;
}

let tokenCache: PayPalTokenCache | null = null;

export function getPayPalBaseUrl(): string {
  const mode = (process.env.PAYPAL_MODE || 'sandbox').toLowerCase().trim();
  return mode === 'live' || mode === 'production'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';
}

export function isPayPalConfigured(): boolean {
  return Boolean(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET);
}

/**
 * Fetch OAuth 2.0 access token using server credentials
 */
export async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      'PayPal credentials missing. Please configure PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in your .env file or server environment.'
    );
  }

  // Check cache
  const now = Date.now();
  if (tokenCache && tokenCache.expiresAt > now + 60000) {
    return tokenCache.accessToken;
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const baseUrl = getPayPalBaseUrl();

  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('PayPal OAuth error:', response.status, errorBody);
    throw new Error(`Failed to authenticate with PayPal: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as { access_token: string; expires_in: number };
  tokenCache = {
    accessToken: data.access_token,
    expiresAt: now + (data.expires_in * 1000),
  };

  return data.access_token;
}

/**
 * Create a PayPal Order on the server for a specific eBook
 */
export async function createPayPalOrder(product: ServerProduct): Promise<{ id: string; status: string }> {
  const accessToken = await getPayPalAccessToken();
  const baseUrl = getPayPalBaseUrl();

  const orderPayload = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        reference_id: product.id,
        custom_id: product.id,
        description: product.title.substring(0, 127),
        items: [
          {
            name: product.title.substring(0, 127),
            unit_amount: {
              currency_code: product.currency,
              value: product.price.toFixed(2),
            },
            quantity: '1',
            sku: product.paypalProductId,
            category: 'DIGITAL_GOODS',
          },
        ],
        amount: {
          currency_code: product.currency,
          value: product.price.toFixed(2),
          breakdown: {
            item_total: {
              currency_code: product.currency,
              value: product.price.toFixed(2),
            },
          },
        },
      },
    ],
    application_context: {
      brand_name: 'International Kidney Health',
      landing_page: 'NO_PREFERENCE',
      user_action: 'PAY_NOW',
      shipping_preference: 'NO_SHIPPING',
    },
  };

  const response = await fetch(`${baseUrl}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    },
    body: JSON.stringify(orderPayload),
  });

  const responseData = await response.json();

  if (!response.ok) {
    console.error('PayPal Order creation failed:', responseData);
    const message = responseData.message || responseData.error_description || 'Unable to create PayPal order';
    throw new Error(message);
  }

  return {
    id: responseData.id,
    status: responseData.status,
  };
}

/**
 * Capture a PayPal Order on the server and verify completion
 */
export async function capturePayPalOrder(
  orderId: string,
  expectedEbookId: string
): Promise<{
  captureId: string;
  orderId: string;
  status: string;
  ebookId: string;
  amount: string;
  currency: string;
  payerEmail?: string;
}> {
  const accessToken = await getPayPalAccessToken();
  const baseUrl = getPayPalBaseUrl();

  const response = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    console.error('PayPal Order capture failed:', response.status, responseData);

    // Handle specific PayPal error codes
    if (responseData.name === 'ORDER_ALREADY_CAPTURED') {
      throw new Error('This order has already been captured and processed.');
    }
    if (responseData.name === 'RESOURCE_NOT_FOUND') {
      throw new Error('PayPal order not found. Please check the order ID or try again.');
    }

    const detailMsg = responseData.details?.[0]?.description || responseData.message || 'Payment capture failed';
    throw new Error(`PayPal capture error: ${detailMsg}`);
  }

  // Validate capture status
  const status = responseData.status;
  if (status !== 'COMPLETED') {
    throw new Error(`Payment is not completed. Current status is ${status}.`);
  }

  // Extract capture information
  const purchaseUnit = responseData.purchase_units?.[0];
  const capture = purchaseUnit?.payments?.captures?.[0];

  if (!capture || capture.status !== 'COMPLETED') {
    throw new Error('No completed capture record found for this order.');
  }

  // Verify that the eBook ID matches the purchase unit custom_id or reference_id
  const orderEbookId = purchaseUnit.custom_id || purchaseUnit.reference_id || expectedEbookId;
  if (expectedEbookId && orderEbookId && expectedEbookId !== orderEbookId) {
    console.warn(`Mismatch in purchased eBook: expected ${expectedEbookId}, got ${orderEbookId}`);
  }

  const payerEmail = responseData.payer?.email_address;

  return {
    captureId: capture.id,
    orderId: responseData.id,
    status: capture.status,
    ebookId: expectedEbookId || orderEbookId,
    amount: capture.amount?.value,
    currency: capture.amount?.currency_code,
    payerEmail,
  };
}
