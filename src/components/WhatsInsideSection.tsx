import React from 'react';
import { MAIN_RESOURCES } from '../data/bundleData';
import { EbookCard } from './EbookCard';
import { EbookResource } from '../types';
import { BookOpen, Sparkles, Library, ArrowRight } from 'lucide-react';

interface WhatsInsideSectionProps {
  onPreviewEbook: (resource: EbookResource) => void;
  onOpenCheckout: () => void;
  onNavigateToEbooks?: () => void;
}

export const WhatsInsideSection: React.FC<WhatsInsideSectionProps> = ({
  onPreviewEbook,
  onOpenCheckout,
  onNavigateToEbooks,
}) => {
  return (
    <section id="inside" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-300/60">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>Complete 3-Volume Core Library</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            What's Inside the Bundle
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Each resource is purpose-built to break down complex kidney health topics into plain, practical language with actionable guidance you can apply immediately.
          </p>

          {onNavigateToEbooks && (
            <div className="pt-2">
              <button
                onClick={onNavigateToEbooks}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                <Library className="w-4 h-4 text-emerald-700" />
                <span>View Full Ebooks Library & Chapter Overviews</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
              </button>
            </div>
          )}
        </div>

        {/* 3 Ebook Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MAIN_RESOURCES.map((resource, index) => (
            <EbookCard
              key={resource.id}
              resource={resource}
              index={index}
              onPreview={onPreviewEbook}
            />
          ))}
        </div>

        {/* Value Anchor Below Grid */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-slate-600 mb-4">
            Looking for Chronic Kidney Disease specifics? All 3 guides are complemented by the included Bonus CKD Guide.
          </p>
          <a
            href="#bonus"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
          >
            <span>Explore the Exclusive Included Bonus Below</span>
            <span>↓</span>
          </a>
        </div>

      </div>
    </section>
  );
};
