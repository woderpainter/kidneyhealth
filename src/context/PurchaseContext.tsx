import React, { createContext, useContext, useState, useEffect } from 'react';
import { EbookResource } from '../types';
import { COMPLETE_BUNDLE_PRODUCT, MAIN_RESOURCES, BONUS_RESOURCE } from '../data/bundleData';

export interface PurchaseRecord {
  ebookId: string;
  downloadToken: string;
  expiresAt: number;
  title: string;
  orderId?: string;
  purchasedAt: number;
}

export interface PayPalConfig {
  configured: boolean;
  clientId: string;
  mode: string;
  currency: string;
}

interface PurchaseContextType {
  purchases: Record<string, PurchaseRecord>;
  isPurchased: (ebookId: string) => boolean;
  getDownloadToken: (ebookId: string) => string | null;
  recordPurchase: (ebookId: string, token: string, expiresAt: number, title: string, orderId?: string) => void;
  checkoutProduct: EbookResource | typeof COMPLETE_BUNDLE_PRODUCT | null;
  isCheckoutOpen: boolean;
  openCheckout: (product?: EbookResource | typeof COMPLETE_BUNDLE_PRODUCT) => void;
  closeCheckout: () => void;
  paypalConfig: PayPalConfig | null;
  isLoadingConfig: boolean;
  configError: string | null;
  downloadEbook: (ebookId: string) => void;
}

const PurchaseContext = createContext<PurchaseContextType | undefined>(undefined);

const STORAGE_KEY = 'ikh_purchased_ebooks';

export const PurchaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [purchases, setPurchases] = useState<Record<string, PurchaseRecord>>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Filter out expired items
        const now = Date.now();
        const valid: Record<string, PurchaseRecord> = {};
        for (const [id, rec] of Object.entries(parsed as Record<string, PurchaseRecord>)) {
          if (rec.expiresAt > now) {
            valid[id] = rec;
          }
        }
        return valid;
      }
    } catch {
      // ignore parsing error
    }
    return {};
  });

  const [checkoutProduct, setCheckoutProduct] = useState<EbookResource | typeof COMPLETE_BUNDLE_PRODUCT | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [paypalConfig, setPaypalConfig] = useState<PayPalConfig | null>(null);
  const [isLoadingConfig, setIsLoadingConfig] = useState(true);
  const [configError, setConfigError] = useState<string | null>(null);

  // Fetch PayPal server config on mount
  useEffect(() => {
    let isMounted = true;
    const fetchConfig = async () => {
      try {
        const res = await fetch('/api/payments/config');
        if (!res.ok) {
          throw new Error(`Server returned ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setPaypalConfig(data);
          setIsLoadingConfig(false);
        }
      } catch (err: any) {
        if (isMounted) {
          console.warn('Unable to load PayPal configuration from /api/payments/config:', err.message);
          setConfigError(err.message);
          setIsLoadingConfig(false);
        }
      }
    };

    fetchConfig();
    return () => {
      isMounted = false;
    };
  }, []);

  // Sync to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(purchases));
    } catch {
      // ignore quota errors
    }
  }, [purchases]);

  const isPurchased = (ebookId: string): boolean => {
    const rec = purchases[ebookId];
    if (!rec) return false;
    return rec.expiresAt > Date.now();
  };

  const getDownloadToken = (ebookId: string): string | null => {
    const rec = purchases[ebookId];
    if (!rec || rec.expiresAt <= Date.now()) return null;
    return rec.downloadToken;
  };

  const recordPurchase = (
    ebookId: string,
    token: string,
    expiresAt: number,
    title: string,
    orderId?: string
  ) => {
    const record: PurchaseRecord = {
      ebookId,
      downloadToken: token,
      expiresAt,
      title,
      orderId,
      purchasedAt: Date.now(),
    };

    setPurchases((prev) => {
      const next = { ...prev, [ebookId]: record };

      // If bundle was purchased, unlock all individual books
      if (ebookId === 'bundle-complete') {
        MAIN_RESOURCES.forEach((r) => {
          next[r.id] = {
            ...record,
            ebookId: r.id,
            title: r.title,
          };
        });
        next[BONUS_RESOURCE.id] = {
          ...record,
          ebookId: BONUS_RESOURCE.id,
          title: BONUS_RESOURCE.title,
        };
      }

      return next;
    });
  };

  const openCheckout = (product?: EbookResource | typeof COMPLETE_BUNDLE_PRODUCT) => {
    setCheckoutProduct(product || COMPLETE_BUNDLE_PRODUCT);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const downloadEbook = (ebookId: string) => {
    const token = getDownloadToken(ebookId);
    if (!token) {
      alert('No active download authorization found for this eBook. Please purchase it to receive download access.');
      return;
    }
    // Direct secure download via backend endpoint
    window.location.href = `/api/downloads/${token}`;
  };

  return (
    <PurchaseContext.Provider
      value={{
        purchases,
        isPurchased,
        getDownloadToken,
        recordPurchase,
        checkoutProduct,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        paypalConfig,
        isLoadingConfig,
        configError,
        downloadEbook,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchases = () => {
  const ctx = useContext(PurchaseContext);
  if (!ctx) {
    throw new Error('usePurchases must be used within a PurchaseProvider');
  }
  return ctx;
};
