import React from 'react';
import { ArrowRight, Download, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';
import { BRAND_NAME } from '../data/bundleData';

interface FinalCTASectionProps {
  onOpenCheckout: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-emerald-950 via-[#064e3b] to-teal-950 text-white relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Brand Seal */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-emerald-200 text-xs sm:text-sm font-semibold">
          <HeartHandshake className="w-4 h-4 text-amber-300" />
          <span>{BRAND_NAME}</span>
        </div>

        {/* Emotionally Resonant Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-sans max-w-4xl mx-auto">
          Understand Your Kidneys. Eat Smarter. Take Control of Your Health.
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
          Gain the clarity, structure, and patient-first guidance you need to protect your kidney health with confidence today.
        </p>

        {/* Main CTA Container */}
        <div className="pt-4 max-w-md mx-auto space-y-4">
          <button
            onClick={onOpenCheckout}
            className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-300 active:scale-[0.99] text-slate-950 font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-8 rounded-xl shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 border border-amber-300 cursor-pointer group"
            id="final-cta-btn"
          >
            <span>GET THE COMPLETE BUNDLE</span>
            <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Micro trust indicators */}
          <div className="flex items-center justify-center gap-3 text-xs text-emerald-200/90">
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-amber-300" /> Instant PDF Download
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> Complete 4-Guide Set
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
