import React from 'react';
import { EbookResource } from '../types';
import { EbookCoverVisual } from './EbookCoverVisual';
import { X, BookOpen, Check, ArrowRight, Download, Sparkles, Layers } from 'lucide-react';

interface EbookPreviewModalProps {
  resource: EbookResource | null;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const EbookPreviewModal: React.FC<EbookPreviewModalProps> = ({
  resource,
  onClose,
  onOpenCheckout,
}) => {
  if (!resource) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8 animate-in zoom-in-95 duration-200">
        
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-emerald-950 to-teal-950 text-white p-5 sm:p-6 flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-300" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-200">
              Look Inside Preview
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Top Resource Info with Cover */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="shrink-0">
              <EbookCoverVisual resource={resource} size="sm" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 inline-block">
                {resource.badgeText || 'Digital Publication'}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                {resource.title}
              </h3>
              {resource.tagline && (
                <p className="text-xs sm:text-sm font-semibold text-emerald-800 italic">
                  {resource.tagline}
                </p>
              )}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {resource.description}
              </p>
            </div>
          </div>

          {/* Table of Contents Section */}
          {resource.tableOfContents && resource.tableOfContents.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>Included Chapters & Modules</span>
              </h4>
              <div className="space-y-2.5">
                {resource.tableOfContents.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-left">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm block">
                      {item.chapter}
                    </span>
                    <span className="text-xs text-slate-600 leading-relaxed block mt-0.5">
                      {item.summary}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Inclusions Highlights */}
          <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-200 space-y-2 text-left">
            <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
              Key Patient Takeaways:
            </h4>
            <ul className="space-y-1.5 text-xs text-emerald-950">
              {resource.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5 stroke-[3]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-slate-50 p-5 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-xs text-slate-500 block">Direct access or complete bundle</span>
            <span className="text-xs font-extrabold text-emerald-900">Kidney Health Essentials Bundle ([PRICE])</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            {resource.downloadUrl && (
              <a
                href={resource.downloadUrl}
                download={resource.downloadFileName || true}
                className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                id={`modal-download-${resource.id}`}
              >
                <Download className="w-4 h-4 text-emerald-300" />
                <span>Download eBook</span>
              </a>
            )}
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>GET ALL 4 GUIDES</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
