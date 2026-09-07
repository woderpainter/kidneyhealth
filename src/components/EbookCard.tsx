import React from 'react';
import { EbookResource } from '../types';
import { EbookCoverVisual } from './EbookCoverVisual';
import { Check, Layers, Download, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { usePurchases } from '../context/PurchaseContext';

interface EbookCardProps {
  resource: EbookResource;
  index: number;
  onPreview: (resource: EbookResource) => void;
}

export const EbookCard: React.FC<EbookCardProps> = ({ resource, index, onPreview }) => {
  const { isPurchased, downloadEbook, openCheckout } = usePurchases();
  const purchased = isPurchased(resource.id);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-emerald-700/30">
      
      {/* Top Card Header Strip */}
      <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-between">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          Resource 0{index + 1}
        </span>
        <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
          Digital PDF
        </span>
      </div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        {/* Visual Cover Area */}
        <div 
          onClick={() => onPreview(resource)}
          className="py-4 flex justify-center items-center bg-gradient-to-b from-slate-50/60 to-transparent rounded-xl mb-6 relative cursor-pointer"
          title="Click to preview table of contents"
        >
          <EbookCoverVisual resource={resource} size="md" />
        </div>

        {/* Ebook Details */}
        <div className="space-y-3 flex-1 flex flex-col">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {resource.title}
            </h3>
            {resource.tagline && (
              <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-1 italic">
                {resource.tagline}
              </p>
            )}
            {resource.subtitle && !resource.tagline && (
              <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                {resource.subtitle}
              </p>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            {resource.description}
          </p>

          {/* Key Benefits List */}
          <div className="pt-4 mt-auto border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
              Key Guides & Inclusions:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {resource.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0 space-y-2">
        {purchased ? (
          <button
            onClick={() => downloadEbook(resource.id)}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            id={`download-ebook-btn-${resource.id}`}
          >
            <Download className="w-4 h-4 text-emerald-200" />
            <span>Download eBook</span>
          </button>
        ) : (
          <button
            onClick={() => openCheckout(resource)}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
            id={`buy-ebook-btn-${resource.id}`}
          >
            <ShoppingBag className="w-4 h-4 text-emerald-300" />
            <span>Buy Now • ${resource.price.toFixed(2)}</span>
          </button>
        )}
      </div>

    </div>
  );
};
