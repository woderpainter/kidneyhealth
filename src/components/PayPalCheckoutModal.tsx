import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import {
  X,
  Lock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Download,
  FileText,
  Sparkles,
  ArrowRight,
  Info,
  Clock,
  RotateCcw,
} from 'lucide-react';
import { usePurchases } from '../context/PurchaseContext';
import { COMPLETE_BUNDLE_PRODUCT, MAIN_RESOURCES, BONUS_RESOURCE } from '../data/bundleData';
import { EbookResource } from '../types';

interface SuccessData {
  downloadToken: string;
  expiresAt: number;
  orderId: string;
  title: string;
  productId: string;
}

export const PayPalCheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    closeCheckout,
    checkoutProduct,
    openCheckout,
    recordPurchase,
    paypalConfig,
    isLoadingConfig,
  } = usePurchases();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<SuccessData | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);

  if (!isCheckoutOpen) return null;

  const activeProduct = checkoutProduct || COMPLETE_BUNDLE_PRODUCT;
  const isBundle = activeProduct.id === 'bundle-complete';

  const handleClose = () => {
    setErrorMessage(null);
    setWarningMessage(null);
    setSuccessData(null);
    setIsCapturing(false);
    closeCheckout();
  };

  const handleSwitchProduct = (newProduct: EbookResource | typeof COMPLETE_BUNDLE_PRODUCT) => {
    setErrorMessage(null);
    setWarningMessage(null);
    openCheckout(newProduct);
  };

  // Safe formatting of error messages
  const parseErrorMessage = (err: any): string => {
    const raw = err?.message || String(err);
    if (raw.includes('ALREADY_CAPTURED') || raw.includes('already been captured')) {
      return 'This PayPal order has already been captured and processed. Check your email or download records.';
    }
    if (raw.includes('ORDER_CREATION_FAILED') || raw.includes('RESOURCE_NOT_FOUND')) {
      return 'PayPal was unable to initialize this transaction. Please check your credentials or try again.';
    }
    if (raw.includes('PAYPAL_NOT_CONFIGURED')) {
      return 'PayPal credentials are not configured on the server. Please set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in your .env file.';
    }
    if (raw.includes('eBook with ID') && raw.includes('not found')) {
      return 'The requested eBook could not be found in the catalog. Please try selecting the eBook again.';
    }
    return raw || 'An unexpected error occurred during checkout. Please try again.';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8 animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-[#064e3b] to-slate-950 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300 border border-emerald-600/40 shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest block">
                Secure PayPal Digital Checkout
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                {successData ? 'Purchase Confirmed' : activeProduct.title}
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* SUCCESS VIEW */}
          {successData ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-slate-900">Payment Completed Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for your order. A secure, time-limited download authorization has been generated.
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-emerald-200 text-[11px] font-mono text-emerald-900">
                  <span>PayPal Order ID:</span>
                  <span className="font-bold">{successData.orderId}</span>
                </div>
              </div>

              {/* Download Buttons Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Your Authorized Download(s):
                  </span>
                  <span className="text-[11px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Valid for 24 hours</span>
                  </span>
                </div>

                {isBundle ? (
                  <div className="space-y-2">
                    {MAIN_RESOURCES.map((res) => (
                      <div
                        key={res.id}
                        className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FileText className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span className="text-xs font-bold text-slate-900 truncate">{res.title}</span>
                        </div>
                        <a
                          href={`/api/downloads/${successData.downloadToken}`}
                          className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-colors shrink-0"
                          id={`download-bundle-item-${res.id}`}
                        >
                          <Download className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Download</span>
                        </a>
                      </div>
                    ))}

                    <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-slate-900 block truncate">
                            {BONUS_RESOURCE.title}
                          </span>
                          <span className="text-[10px] text-amber-800 font-semibold">Included Bonus</span>
                        </div>
                      </div>
                      <a
                        href={`/api/downloads/${successData.downloadToken}`}
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-colors shrink-0"
                        id="download-bonus-item"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="w-5 h-5 text-emerald-700 shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-slate-900 block truncate">
                          {successData.title}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Digital PDF Guide • High Resolution
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/api/downloads/${successData.downloadToken}`}
                      className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow flex items-center gap-2 transition-colors shrink-0"
                      id="download-single-item"
                    >
                      <Download className="w-4 h-4 text-emerald-300" />
                      <span>Download eBook</span>
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={handleClose}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer"
                >
                  Close and return to guides
                </button>
              </div>
            </div>
          ) : (
            /* CHECKOUT ORDER VIEW */
            <div className="space-y-6">
              {/* Product Summary Box */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100/80 px-2 py-0.5 rounded">
                      {isBundle ? 'Complete 4-in-1 Digital Bundle' : 'Single Digital eBook (PDF)'}
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                      {activeProduct.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{activeProduct.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl sm:text-2xl font-mono font-extrabold text-emerald-900 block">
                      ${activeProduct.price.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">
                      {activeProduct.currency}
                    </span>
                  </div>
                </div>

                {/* Bundle Upsell / Switcher */}
                {!isBundle && (
                  <div className="bg-emerald-900/5 rounded-xl p-3 border border-emerald-200/80 flex items-center justify-between gap-3">
                    <div className="text-xs">
                      <span className="font-extrabold text-emerald-950 block">Want all 4 guides instead?</span>
                      <span className="text-[11px] text-slate-600">
                        Get the Complete Bundle for <strong className="text-emerald-900">$27.00</strong> (Save over 60%)
                      </span>
                    </div>
                    <button
                      onClick={() => handleSwitchProduct(COMPLETE_BUNDLE_PRODUCT)}
                      className="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-lg transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Upgrade</span>
                      <ArrowRight className="w-3 h-3 text-emerald-300" />
                    </button>
                  </div>
                )}

                {/* Security trust badges */}
                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Official Server-Verified Order</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>256-Bit SSL Encrypted</span>
                  </div>
                </div>
              </div>

              {/* Error or Warning Alerts */}
              {errorMessage && (
                <div className="bg-rose-50 border border-rose-200 text-rose-900 p-4 rounded-xl text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <span className="font-bold block">Checkout Notice:</span>
                    <span>{errorMessage}</span>
                  </div>
                  <button
                    onClick={() => setErrorMessage(null)}
                    className="text-rose-500 hover:text-rose-800 text-xs font-bold"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              {warningMessage && (
                <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span>{warningMessage}</span>
                  </div>
                  <button
                    onClick={() => setWarningMessage(null)}
                    className="text-amber-700 hover:text-amber-900 text-xs font-bold"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              {/* PAYPAL BUTTONS CONTAINER */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Select Payment Method:
                  </span>
                  <span className="text-[11px] text-slate-500">Instant PDF authorization</span>
                </div>

                {isLoadingConfig ? (
                  <div className="py-8 flex flex-col items-center justify-center space-y-2 text-slate-500">
                    <RotateCcw className="w-6 h-6 animate-spin text-emerald-700" />
                    <span className="text-xs">Initializing PayPal secure payment gateway...</span>
                  </div>
                ) : !paypalConfig?.configured && (!paypalConfig?.clientId || paypalConfig.clientId.trim() === '') ? (
                  <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">PayPal Setup Notice</h5>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      To activate payments, add your PayPal Sandbox or Live credentials to your environment variables:
                    </p>
                    <div className="bg-slate-900 text-emerald-400 p-3 rounded-xl font-mono text-[11px] text-left overflow-x-auto space-y-1">
                      <div>PAYPAL_CLIENT_ID=your_client_id</div>
                      <div>PAYPAL_CLIENT_SECRET=your_client_secret</div>
                      <div>PAYPAL_MODE=sandbox</div>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      On Hostinger, configure these under <em>Websites → Node.js → Environment Variables</em>.
                    </p>
                  </div>
                ) : (
                  <div className="relative min-h-[140px]">
                    {isCapturing && (
                      <div className="absolute inset-0 z-20 bg-white/80 backdrop-blur-xs flex flex-col items-center justify-center space-y-2 rounded-2xl">
                        <RotateCcw className="w-6 h-6 animate-spin text-emerald-800" />
                        <span className="text-xs font-bold text-emerald-950">
                          Verifying and capturing your PayPal order...
                        </span>
                      </div>
                    )}

                    <PayPalScriptProvider
                      options={{
                        clientId: paypalConfig?.clientId || 'test',
                        currency: 'USD',
                        intent: 'capture',
                      }}
                    >
                      <PayPalButtons
                        style={{
                          layout: 'vertical',
                          color: 'gold',
                          shape: 'rect',
                          label: 'pay',
                          height: 44,
                        }}
                        createOrder={async () => {
                          setErrorMessage(null);
                          setWarningMessage(null);
                          try {
                            const res = await fetch('/api/payments/create-order', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ ebookId: activeProduct.id }),
                            });
                            const data = await res.json();
                            if (!res.ok) {
                              throw new Error(data.error || 'Unable to create PayPal order');
                            }
                            return data.orderID;
                          } catch (err: any) {
                            const msg = parseErrorMessage(err);
                            setErrorMessage(msg);
                            throw err;
                          }
                        }}
                        onApprove={async (data) => {
                          setIsCapturing(true);
                          setErrorMessage(null);
                          try {
                            const res = await fetch('/api/payments/capture-order', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                                orderID: data.orderID,
                                ebookId: activeProduct.id,
                              }),
                            });
                            const captureData = await res.json();
                            if (!res.ok) {
                              throw new Error(captureData.error || 'Payment capture failed');
                            }

                            // Payment confirmed on server!
                            const newSuccess: SuccessData = {
                              downloadToken: captureData.downloadToken,
                              expiresAt: captureData.expiresAt,
                              orderId: captureData.order?.id || data.orderID,
                              title: activeProduct.title,
                              productId: activeProduct.id,
                            };

                            setSuccessData(newSuccess);
                            recordPurchase(
                              activeProduct.id,
                              captureData.downloadToken,
                              captureData.expiresAt,
                              activeProduct.title,
                              captureData.order?.id || data.orderID
                            );
                          } catch (err: any) {
                            const msg = parseErrorMessage(err);
                            setErrorMessage(msg);
                          } finally {
                            setIsCapturing(false);
                          }
                        }}
                        onCancel={() => {
                          setWarningMessage(
                            'PayPal checkout was cancelled. You have not been charged. You can resume checkout anytime.'
                          );
                        }}
                        onError={(err: any) => {
                          console.error('PayPal Buttons error:', err);
                          const msg = parseErrorMessage(err);
                          setErrorMessage(msg);
                        }}
                      />
                    </PayPalScriptProvider>
                  </div>
                )}
              </div>

              {/* Guarantees and Trust */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>30-day money-back satisfaction guarantee</span>
                <span>Immediate PDF access</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
