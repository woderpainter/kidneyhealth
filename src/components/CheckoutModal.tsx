import React, { useState } from 'react';
import { X, CheckCircle2, Download, Lock, ShieldCheck, FileText, ArrowRight, Sparkles, Mail, Check } from 'lucide-react';
import { BUNDLE_NAME, BRAND_NAME, MAIN_RESOURCES, BONUS_RESOURCE, HEALTHCARE_DISCLAIMER } from '../data/bundleData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8 animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-emerald-950 to-[#064e3b] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-emerald-300 border border-emerald-600/40">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest block">
                {BRAND_NAME}
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                {isSuccess ? 'Instant Access Granted' : 'Instant Digital Download Checkout'}
              </h3>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!isSuccess ? (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Order Summary Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="font-extrabold text-slate-900 text-sm block">
                    {BUNDLE_NAME}
                  </span>
                  <span className="text-xs text-slate-500">
                    3 Core Ebooks + 1 Exclusive Bonus Guide
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-mono font-extrabold text-emerald-900 block">
                    [PRICE]
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100 px-1.5 py-0.5 rounded">
                    Instant Access
                  </span>
                </div>
              </div>

              {/* Items List */}
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>1. Kidney Transplant Journey (Complete Guide)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>2. Kidney Disease (Stages, Labs & Early Warning Signs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>3. Kidney Health Food Guide (7-Day Plan & Food Chart)</span>
                </li>
                <li className="flex items-center gap-2 text-amber-900 font-semibold bg-amber-50 p-1 rounded">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>BONUS: CKD Guide (100% Free Included)</span>
                </li>
              </ul>
            </div>

            {/* Email form for download delivery */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Where should we send your instant download links?
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700/40 focus:border-emerald-700 transition-all"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  You'll receive a receipt and instant digital download links to access your PDF ebooks.
                </p>
              </div>

              {/* Complete Order Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-extrabold text-base py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Preparing Instant Delivery...
                  </span>
                ) : (
                  <>
                    <span>COMPLETE ORDER & GET ACCESS ([PRICE])</span>
                    <ArrowRight className="w-5 h-5 text-emerald-300" />
                  </>
                )}
              </button>
            </form>

            {/* Trust & Guarantee points */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                256-Bit SSL Encrypted
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                Immediate PDF Delivery
              </span>
            </div>

            {/* Healthcare disclaimer micro note */}
            <p className="text-[10px] text-slate-400 text-center leading-tight">
              {HEALTHCARE_DISCLAIMER}
            </p>

          </div>
        ) : (
          /* Access Granted State */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-emerald-700" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Thank You! Your Bundle Is Ready
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Direct download links have also been sent to <span className="font-semibold text-slate-900">{email}</span>.
              </p>
            </div>

            {/* Download Links Cards */}
            <div className="space-y-2.5 text-left max-h-60 overflow-y-auto">
              {MAIN_RESOURCES.map((r, i) => (
                <div key={r.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      0{i + 1}
                    </div>
                    <div className="truncate">
                      <span className="font-bold text-slate-900 text-xs truncate block">
                        {r.title}
                      </span>
                      <span className="text-[10px] text-slate-500">PDF Ebook • High Resolution</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Starting download for "${r.title}". In production this opens the secure PDF delivery.`)}
                    className="px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 text-xs font-bold rounded-lg flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              ))}

              {/* Bonus Download */}
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">
                    ★
                  </div>
                  <div className="truncate">
                    <span className="font-bold text-slate-900 text-xs truncate block">
                      {BONUS_RESOURCE.title}
                    </span>
                    <span className="text-[10px] text-amber-800 font-semibold">Included Bonus Guide</span>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Starting download for "${BONUS_RESOURCE.title}". In production this opens the secure PDF delivery.`)}
                  className="px-3 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-extrabold rounded-lg flex items-center gap-1 transition-colors cursor-pointer shrink-0 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 rounded-xl transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
