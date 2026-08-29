import React from 'react';
import { AUDIENCE_LIST } from '../data/bundleData';
import { Users, CheckCircle2, HeartHandshake } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-300/60">
            <Users className="w-3.5 h-3.5 text-emerald-700" />
            <span>Targeted Patient & Family Guidance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            Who Is This Bundle For?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            These resources are intentionally written in approachable, clear language for individuals, families, and caregivers at all stages of the kidney journey.
          </p>
        </div>

        {/* 6 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE_LIST.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 max-w-3xl mx-auto bg-emerald-900 text-white rounded-2xl p-6 text-center shadow-md flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed text-center sm:text-left">
            Whether you received a recent diagnosis or have been managing kidney considerations for years, these guides provide structured reassurance without medical jargon.
          </p>
        </div>

      </div>
    </section>
  );
};
