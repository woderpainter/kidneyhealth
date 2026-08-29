import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';
import { HEALTHCARE_DISCLAIMER } from '../data/bundleData';

export const DisclaimerSection: React.FC = () => {
  return (
    <section className="py-10 bg-slate-100/70 border-y border-slate-200 text-slate-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3.5 bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-2xs">
          <div className="p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Important Healthcare Disclaimer
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {HEALTHCARE_DISCLAIMER} Always seek the advice of your nephrologist, physician, or other qualified health provider with any questions you may have regarding a medical condition, diet alterations, or treatment plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
