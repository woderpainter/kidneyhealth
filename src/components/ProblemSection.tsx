import React from 'react';
import { AlertCircle, CheckCircle2, HelpCircle, FileSearch, Sparkles, HeartPulse } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-y border-emerald-950/5 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-900/10">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-700" />
            <span>Why Clear Information Matters</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            Your Kidney Health Deserves More Than Confusion.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Kidney health can be difficult to understand. For many individuals and families, kidney function is rarely discussed until lab markers suddenly change—leaving patients overwhelmed by complicated terminology and unsure of what questions to ask.
          </p>
        </div>

        {/* Contrast Grid: The Challenge vs The Solution */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left: The Common Reality (Confusion & Uncertainty) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-red-200/60 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 shadow-xs">
                <AlertCircle className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                The Reality of Navigating Kidney Health Alone
              </h3>

              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                  <span><strong>Silent Progression:</strong> Kidney issues frequently develop quietly without noticeable symptoms until later stages.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                  <span><strong>Fragmented Advice:</strong> Scattered online searches lead to conflicting diets, extreme food restrictions, and unnecessary anxiety.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                  <span><strong>Intimidating Terminology:</strong> Lab numbers like eGFR, Creatinine, and BUN can feel like an undecipherable code without context.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                  <span><strong>Rushed Doctor Visits:</strong> Short appointments often leave you without enough time to ask the questions that truly matter.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium italic">
              Result: Stress, hesitation, and second-guessing every meal and symptom.
            </div>
          </div>

          {/* Right: The Solution (The Kidney Health Essentials Collection) */}
          <div className="bg-gradient-to-br from-emerald-900 via-[#064e3b] to-teal-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden border border-emerald-700/40">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-emerald-600/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 shadow-inner">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white">
                Clear, Organized Information in One Place
              </h3>

              <ul className="space-y-3.5 text-sm text-emerald-100/90">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span><strong>Structured Understanding:</strong> Connect the dots between how kidneys work, early indicators, and medical stages.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span><strong>Actionable Nutrition Clarity:</strong> Easy-to-follow meal plans, low-potassium charts, and clear lists of what to eat and avoid.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span><strong>Empowered Consultations:</strong> Go into nephrology and physician visits knowing exactly what questions to ask.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span><strong>Complete Patient Compassion:</strong> Comprehensive coverage for pre-transplant, surgery, recovery, and lifelong CKD care.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/15 text-xs text-emerald-200 font-medium">
              Result: Confidence, peace of mind, and proactive health decisions.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
