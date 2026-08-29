import React from 'react';
import { ArrowRight, CheckCircle2, Download, Eye, Sparkles, BookOpen, FileText, Library } from 'lucide-react';
import { HERO_HEADLINE, HERO_SUBTEXT, MAIN_RESOURCES, BONUS_RESOURCE } from '../data/bundleData';
import { EbookCoverVisual } from './EbookCoverVisual';
import { EbookResource } from '../types';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  onPreviewEbook: (ebook: EbookResource) => void;
  onNavigateToEbooks?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCheckout,
  onPreviewEbook,
  onNavigateToEbooks,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-emerald-50/40 via-white to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(6,95,70,0.08),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 left-0 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Conversion Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Product Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-800/20 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>International Kidney Health Official Collection</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15] font-sans">
              {HERO_HEADLINE}
            </h1>

            {/* Subtitle / Supporting text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {HERO_SUBTEXT}
            </p>

            {/* Core Value Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kidney Disease Stages & Labs</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Step-by-Step Transplant Guide</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>7-Day Kidney Nutrition Plan</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>+ Bonus CKD Educational Guide</span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="pt-3 space-y-3 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenCheckout}
                  className="flex-1 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-extrabold text-base sm:text-lg px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-emerald-900/20 transition-all duration-200 flex items-center justify-center gap-3 border border-emerald-700 cursor-pointer group"
                  id="hero-cta-button"
                >
                  <span>GET THE BUNDLE</span>
                  <ArrowRight className="w-5 h-5 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                </button>

                {onNavigateToEbooks && (
                  <button
                    onClick={onNavigateToEbooks}
                    className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-5 py-4 rounded-xl border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Library className="w-4 h-4 text-emerald-700" />
                    <span>Ebooks Library</span>
                  </button>
                )}
              </div>

              {/* Trust message */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-slate-500">
                <Download className="w-4 h-4 text-emerald-700" />
                <span>Instant Digital Access • Practical Guides • Easy to Understand</span>
              </div>
            </div>

            {/* Look inside quick-action prompt */}
            <div className="pt-2 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-4">
              <span className="flex items-center gap-1.5 text-slate-600">
                <FileText className="w-3.5 h-3.5 text-emerald-700" />
                Digital PDF Ebooks
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                Read on Mobile, Tablet & PC
              </span>
            </div>
          </div>

          {/* Right Product Visual / 3 Ebook Showcase Column */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              
              {/* Main Bundle Card Container */}
              <div className="bg-gradient-to-b from-white to-slate-50/80 rounded-2xl p-5 sm:p-7 border border-emerald-900/10 shadow-xl relative">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      The Complete 4-Part Collection
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300/60">
                    3 Guides + 1 Bonus
                  </span>
                </div>

                {/* 3 Ebook Covers Prominently Arranged */}
                <div className="flex justify-center items-end gap-2 sm:gap-4 md:gap-5 pt-2 pb-4 px-1 overflow-x-auto sm:overflow-visible">
                  {/* Book 1: Transplant */}
                  <div
                    onClick={() => onPreviewEbook(MAIN_RESOURCES[0])}
                    className="cursor-pointer transition-all hover:scale-105"
                    title="Click to preview Kidney Transplant Journey"
                  >
                    <EbookCoverVisual resource={MAIN_RESOURCES[0]} size="sm" />
                    <button className="mt-2 w-full text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 flex items-center justify-center gap-1 py-1 bg-emerald-50 hover:bg-emerald-100 rounded border border-emerald-200/80 transition-colors">
                      <Eye className="w-3 h-3" />
                      <span>Preview</span>
                    </button>
                  </div>

                  {/* Book 2: Kidney Disease (Elevated center) */}
                  <div
                    onClick={() => onPreviewEbook(MAIN_RESOURCES[1])}
                    className="cursor-pointer transition-all hover:scale-105 -translate-y-2 sm:-translate-y-4"
                    title="Click to preview Kidney Disease"
                  >
                    <div className="relative">
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap z-30">
                        ESSENTIAL
                      </div>
                      <EbookCoverVisual resource={MAIN_RESOURCES[1]} size="sm" />
                    </div>
                    <button className="mt-2 w-full text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 flex items-center justify-center gap-1 py-1 bg-emerald-50 hover:bg-emerald-100 rounded border border-emerald-200/80 transition-colors">
                      <Eye className="w-3 h-3" />
                      <span>Preview</span>
                    </button>
                  </div>

                  {/* Book 3: Food Guide */}
                  <div
                    onClick={() => onPreviewEbook(MAIN_RESOURCES[2])}
                    className="cursor-pointer transition-all hover:scale-105"
                    title="Click to preview Kidney Health Food Guide"
                  >
                    <EbookCoverVisual resource={MAIN_RESOURCES[2]} size="sm" />
                    <button className="mt-2 w-full text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 flex items-center justify-center gap-1 py-1 bg-emerald-50 hover:bg-emerald-100 rounded border border-emerald-200/80 transition-colors">
                      <Eye className="w-3 h-3" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>

                {/* Bonus Ribbon Strip below the 3 covers */}
                <div
                  onClick={() => onPreviewEbook(BONUS_RESOURCE)}
                  className="mt-4 p-3 rounded-xl bg-gradient-to-r from-amber-50 via-emerald-50 to-amber-50 border border-amber-300/70 flex items-center justify-between cursor-pointer hover:border-amber-400 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-900 shrink-0 font-black text-xs">
                      +FREE
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-extrabold text-slate-900 uppercase">
                          BONUS GUIDE: CKD GUIDE
                        </span>
                        <span className="text-[10px] bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded font-bold">
                          Included
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-1">
                        Chronic kidney disease patient educational companion
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-emerald-800 flex items-center gap-1 shrink-0">
                    <span>Look Inside</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
