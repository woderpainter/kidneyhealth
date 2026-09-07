export interface ServerProduct {
  id: string;
  title: string;
  price: number;
  currency: string;
  pdfFile: string;
  paypalProductId: string;
}

export const PRODUCTS_CATALOG: Record<string, ServerProduct> = {
  'kidney-transplant-journey': {
    id: 'kidney-transplant-journey',
    title: 'Kidney Transplant Journey - Complete Patient Guide',
    price: 19.99,
    currency: 'USD',
    pdfFile: 'kidney-transplant-journey.pdf',
    paypalProductId: 'EBOOK-TRANSPLANT-001'
  },
  'kidney-disease': {
    id: 'kidney-disease',
    title: 'Kidney Disease: The Illness You Don\'t Feel... Until You Do',
    price: 19.99,
    currency: 'USD',
    pdfFile: 'kidney-disease.pdf',
    paypalProductId: 'EBOOK-DISEASE-002'
  },
  'kidney-health-food-guide': {
    id: 'kidney-health-food-guide',
    title: 'Kidney Health Food Guide: 7-Day Meal Plan & Tables',
    price: 19.99,
    currency: 'USD',
    pdfFile: 'kidney-food-guide.pdf',
    paypalProductId: 'EBOOK-FOOD-003'
  },
  'bonus-ckd-guide': {
    id: 'bonus-ckd-guide',
    title: 'Bonus CKD Guide: Chronic Kidney Disease Stages & Protection',
    price: 14.99,
    currency: 'USD',
    pdfFile: 'bonus-ckd-guide.pdf',
    paypalProductId: 'EBOOK-CKD-004'
  },
  'bundle-complete': {
    id: 'bundle-complete',
    title: 'Kidney Health Essentials Complete Bundle (All 4 Guides)',
    price: 27.00,
    currency: 'USD',
    pdfFile: 'kidney-health-essentials-bundle.pdf',
    paypalProductId: 'BUNDLE-ESSENTIALS-005'
  }
};

export function getProduct(productId: string): ServerProduct | null {
  return PRODUCTS_CATALOG[productId] || null;
}
