import React from 'react';
import { BONUS_RESOURCE } from '../data/bundleData';
import { EbookCoverVisual } from './EbookCoverVisual';
import { EbookResource } from '../types';
import { Sparkles, Check, Gift, Eye, ArrowRight, ShieldCheck } from 'lucide-react';

interface BonusSectionProps {
  onPreviewEbook: (resource: EbookResource) => void;
  onOpenCheckout: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({
  onPreviewEbook,
  onOpenCheckout,
}) => {
  return (
    <section id="bonus" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-emerald-950/5 to-slate-50 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black tracking-wider uppercase shadow-xs">
            <Gift className="w-4 h-4 text-amber-700" />
            <span>Special Exclusive Inclusions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            Bonus Included: Practical CKD Guide
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Gain immediate clarity on Chronic Kidney Disease to protect your kidney health and make more informed decisions.
          </p>
        </div>

        {/* Featured Bonus High-End Card */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-950 via-[#064e3b] to-slate-950 rounded-3xl p-6 sm:p-10 md:p-12 text-white shadow-2xl border-2 border-amber-400/40 relative overflow-hidden">
          
          {/* Subtle gold watermark seal */}
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top floating gold banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md mb-8">
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>100% FREE WITH THE KIDNEY HEALTH ESSENTIALS BUNDLE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Bonus Cover Display */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group cursor-pointer" onClick={() => onPreviewEbook(BONUS_RESOURCE)}>
                <EbookCoverVisual resource={BONUS_RESOURCE} size="lg" isBonus={true} />
              </div>
              <button
                onClick={() => onPreviewEbook(BONUS_RESOURCE)}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 underline underline-offset-4 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Look Inside the Bonus Table of Contents</span>
              </button>
            </div>

            {/* Right Bonus Content Breakdown */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-amber-300 font-extrabold text-xs uppercase tracking-widest block mb-1">
                  Exclusive Companion Guide
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  BONUS GUIDE — CKD GUIDE
                </h3>
                <p className="text-sm sm:text-base text-emerald-100/90 mt-2 leading-relaxed">
                  A practical educational guide designed to help readers better understand chronic kidney disease and protect their kidney health.
                </p>
              </div>

              {/* Bonus Key Features */}
              <div className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  What You'll Learn Inside the CKD Guide:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100">
                  {BONUS_RESOURCE.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action and Inclusions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>CLAIM WITH COMPLETE BUNDLE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-emerald-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Automatically bundled with instant download</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
