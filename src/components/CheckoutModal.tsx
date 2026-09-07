import React from 'react';
import { PayPalCheckoutModal } from './PayPalCheckoutModal';

export const CheckoutModal: React.FC<{ isOpen?: boolean; onClose?: () => void }> = () => {
  return <PayPalCheckoutModal />;
};
