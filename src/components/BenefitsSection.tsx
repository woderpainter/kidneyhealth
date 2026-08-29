import React from 'react';
import { Activity, Utensils, HeartPulse, ShieldCheck, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { BENEFITS_LIST } from '../data/bundleData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Activity,
  Salad: Utensils,
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
};

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-300/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Why This Collection Is Essential</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            Everything You Need to Start Taking Kidney Health Seriously.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Gain immediate clarity, reduce dietary confusion, and build confidence at every stage of your kidney health journey.
          </p>
        </div>

        {/* 6 Benefits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS_LIST.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName] || Activity;
            return (
              <div
                key={index}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-emerald-700/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Practical Patient Resource</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
