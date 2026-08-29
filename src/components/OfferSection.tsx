import React from 'react';
import { ArrowRight, Download, ShieldCheck, Check, Sparkles, Lock, Clock, Smartphone } from 'lucide-react';
import { MAIN_RESOURCES, BONUS_RESOURCE } from '../data/bundleData';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="offer" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Product Launch Offer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Get the Kidney Health Essentials Bundle Today
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-2xl mx-auto">
            Receive all 3 core patient resources plus the exclusive companion CKD Guide for one complete digital package.
          </p>
        </div>

        {/* Offer Box Layout */}
        <div className="max-w-5xl mx-auto bg-slate-900/90 rounded-3xl border border-emerald-700/40 shadow-2xl p-6 sm:p-10 md:p-12 backdrop-blur-md relative overflow-hidden">
          
          {/* Top highlight ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Product Bundle Visual */}
            <div className="lg:col-span-6 space-y-6 text-center">
              <div className="relative rounded-2xl overflow-hidden bg-emerald-950/60 border border-emerald-600/30 p-4 sm:p-6 shadow-xl group">
                <img
                  src="/src/assets/images/bundle_hero_mockup_1788013614034.jpg"
                  alt="Kidney Health Essentials Bundle Official Covers Collection"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Visual Label */}
                <div className="mt-3 flex items-center justify-between text-xs text-emerald-200">
                  <span className="font-semibold">3 Guides + BONUS Guide</span>
                  <span className="text-amber-300 font-bold">Instant Digital Access</span>
                </div>
              </div>

              {/* Quick Format Compatibility */}
              <div className="flex items-center justify-center gap-4 text-xs text-emerald-200/70">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Phone & Tablet
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-emerald-400" /> PDF Download
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" /> Lifetime Access
                </span>
              </div>
            </div>

            {/* Right Offer / Checkout Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div>
                <div className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded mb-2">
                  Complete Digital Package
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  KIDNEY HEALTH ESSENTIALS BUNDLE
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/80 mt-1">
                  By International Kidney Health
                </p>
              </div>

              {/* Inclusions Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-emerald-900/60">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>1. Kidney Transplant Journey</strong> (Patient Guide)</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>2. Kidney Disease</strong> (The Illness You Don't Feel... Until You Do)</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>3. Kidney Health Food Guide</strong> (Foods, 7-Day Plan & Chart)</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-200 font-medium bg-amber-500/10 p-2 rounded-lg border border-amber-400/20">
                  <div className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 font-black">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>FREE BONUS: CKD Guide</strong> (Educational Companion)</span>
                </div>
              </div>

              {/* Price Area: Clearly shows [PRICE] placeholder as mandated */}
              <div className="bg-emerald-950/80 rounded-2xl p-5 border border-emerald-600/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-emerald-300/80 block uppercase tracking-wider font-semibold">
                    Complete Bundle Price
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-tight font-mono">
                      [PRICE]
                    </span>
                    <span className="text-xs text-emerald-200">
                      / One-time payment
                    </span>
                  </div>
                </div>
                <div className="text-right sm:text-right text-xs text-emerald-200/90 font-medium">
                  <span className="block text-amber-300 font-bold">Instant Digital Delivery</span>
                  <span>Direct Download Links via Email</span>
                </div>
              </div>

              {/* Main Offer CTA Button */}
              <div className="space-y-3 pt-1">
                <button
                  onClick={onOpenCheckout}
                  className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 active:scale-[0.99] text-white font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-200 flex items-center justify-center gap-3 border border-emerald-400/40 cursor-pointer group"
                  id="offer-cta-button"
                >
                  <span>GET MY BUNDLE NOW</span>
                  <ArrowRight className="w-6 h-6 text-emerald-200 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust & Security Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-emerald-200/80 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Secure 256-Bit Checkout</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Instant Digital Access</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Lifetime Re-download</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
