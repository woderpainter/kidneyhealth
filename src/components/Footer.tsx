import React from 'react';
import { BRAND_NAME, BUNDLE_NAME } from '../data/bundleData';
import { ShieldCheck, Sparkles, Library, Newspaper, Smartphone } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'ebooks' | 'articles' | 'apps') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: 'home' | 'ebooks' | 'articles' | 'apps', sectionId?: string) => {
    if (onNavigate) {
      onNavigate(view);
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-900 text-emerald-300 flex items-center justify-center border border-emerald-700/50 shadow">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-white font-extrabold text-base sm:text-lg tracking-tight">
                {BRAND_NAME}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering patients, families, and caregivers with accessible, practical, and compassionate kidney health educational publications and digital tools.
            </p>
            <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Digital Patient Publication Collection</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation & Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('ebooks')}
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Library className="w-3.5 h-3.5" />
                  <span>Ebooks Digital Library (4 Guides)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('articles')}
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Newspaper className="w-3.5 h-3.5" />
                  <span>Articles & Medical Hub (6 Articles)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('apps')}
                  className="text-teal-400 hover:text-teal-300 font-bold transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Applications Mobiles Dialyse</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Home & Bundle Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('home', 'bonus')}
                  className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Free Bonus CKD Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('home', 'faq')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Educational Note */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Patient Education Purpose
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              All digital publications and application directories are created for educational and health literacy purposes to help readers better understand kidney wellness and communicate effectively with their medical providers.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>{BUNDLE_NAME}</span>
            <span>•</span>
            <span>Digital Delivery Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
