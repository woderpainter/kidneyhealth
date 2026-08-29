import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Download } from 'lucide-react';
import { BUNDLE_NAME } from '../data/bundleData';

interface StickyMobileCTAProps {
  onOpenCheckout: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenCheckout }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past ~400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-950/95 text-white backdrop-blur-md border-t border-emerald-700/40 p-3 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        {/* Left Bundle info & price placeholder */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-[10px] text-amber-300 font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span>3 Guides + Bonus</span>
          </div>
          <div className="flex items-baseline gap-1.5 truncate">
            <span className="text-sm font-extrabold text-white truncate">
              {BUNDLE_NAME}
            </span>
          </div>
          <div className="text-[11px] font-bold text-amber-300 font-mono">
            [PRICE] <span className="text-[9px] font-normal text-slate-400">/ instant access</span>
          </div>
        </div>

        {/* Right CTA button */}
        <button
          onClick={onOpenCheckout}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 active:scale-95 text-white font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-1.5 shrink-0 border border-emerald-400/40 cursor-pointer"
          id="sticky-mobile-cta-btn"
        >
          <span>GET BUNDLE</span>
          <ArrowRight className="w-4 h-4 text-emerald-100" />
        </button>

      </div>
    </div>
  );
};
