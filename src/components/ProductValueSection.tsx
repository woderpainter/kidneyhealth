import React from 'react';
import { MAIN_RESOURCES, BONUS_RESOURCE } from '../data/bundleData';
import { EbookCoverVisual } from './EbookCoverVisual';
import { CheckCircle2, Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { EbookResource } from '../types';

interface ProductValueSectionProps {
  onPreviewEbook: (resource: EbookResource) => void;
  onOpenCheckout: () => void;
}

export const ProductValueSection: React.FC<ProductValueSectionProps> = ({
  onPreviewEbook,
  onOpenCheckout,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-300/60">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Complete All-in-One Collection</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            3 Resources + BONUS Guide
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Instead of searching for fragmented articles or purchasing separate guides, receive the entire unified patient collection in one convenient digital library.
          </p>
        </div>

        {/* 4 Items Showcase Grid (3 Main Guides + 1 Bonus) */}
        <div className="bg-gradient-to-b from-slate-50 to-emerald-50/30 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            
            {/* Guide 1 */}
            <div
              onClick={() => onPreviewEbook(MAIN_RESOURCES[0])}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer group"
            >
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded uppercase mb-3">
                Resource 01
              </span>
              <EbookCoverVisual resource={MAIN_RESOURCES[0]} size="sm" />
              <h4 className="mt-4 font-extrabold text-slate-900 text-xs sm:text-sm uppercase leading-tight">
                {MAIN_RESOURCES[0].title}
              </h4>
              <p className="mt-1 text-[11px] text-slate-500 line-clamp-2">
                Complete pre, during & post transplant guide
              </p>
            </div>

            {/* Guide 2 */}
            <div
              onClick={() => onPreviewEbook(MAIN_RESOURCES[1])}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer group"
            >
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded uppercase mb-3">
                Resource 02
              </span>
              <EbookCoverVisual resource={MAIN_RESOURCES[1]} size="sm" />
              <h4 className="mt-4 font-extrabold text-slate-900 text-xs sm:text-sm uppercase leading-tight">
                {MAIN_RESOURCES[1].title}
              </h4>
              <p className="mt-1 text-[11px] text-slate-500 line-clamp-2">
                Understanding stages, labs & warning signs
              </p>
            </div>

            {/* Guide 3 */}
            <div
              onClick={() => onPreviewEbook(MAIN_RESOURCES[2])}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer group"
            >
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded uppercase mb-3">
                Resource 03
              </span>
              <EbookCoverVisual resource={MAIN_RESOURCES[2]} size="sm" />
              <h4 className="mt-4 font-extrabold text-slate-900 text-xs sm:text-sm uppercase leading-tight">
                {MAIN_RESOURCES[2].title}
              </h4>
              <p className="mt-1 text-[11px] text-slate-500 line-clamp-2">
                Food choices, 7-day meal plan & food chart
              </p>
            </div>

            {/* Bonus Guide */}
            <div
              onClick={() => onPreviewEbook(BONUS_RESOURCE)}
              className="bg-gradient-to-b from-amber-50 to-emerald-50/50 rounded-2xl p-5 border-2 border-amber-400 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 bg-amber-500 text-slate-950 font-black text-[9px] px-1.5 py-0.5 rounded shadow">
                INCLUDED FREE
              </div>
              <span className="text-[10px] font-bold text-amber-900 bg-amber-200/70 px-2 py-0.5 rounded uppercase mb-3">
                Exclusive Bonus
              </span>
              <EbookCoverVisual resource={BONUS_RESOURCE} size="sm" isBonus={true} />
              <h4 className="mt-4 font-extrabold text-slate-900 text-xs sm:text-sm uppercase leading-tight">
                {BONUS_RESOURCE.title}
              </h4>
              <p className="mt-1 text-[11px] text-slate-600 line-clamp-2 font-medium">
                Chronic kidney disease educational guide
              </p>
            </div>

          </div>

          {/* Value Summary Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Full digital bundle with instant download and lifetime access</span>
            </div>
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-extrabold px-6 py-3 rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>GET THE COMPLETE BUNDLE</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
