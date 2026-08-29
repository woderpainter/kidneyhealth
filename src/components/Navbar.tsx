import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Menu, X, ArrowRight, Library, Newspaper, Smartphone } from 'lucide-react';
import { BRAND_NAME } from '../data/bundleData';

interface NavbarProps {
  currentView: 'home' | 'ebooks' | 'articles' | 'apps';
  onNavigate: (view: 'home' | 'ebooks' | 'articles' | 'apps') => void;
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'ebooks' | 'articles' | 'apps', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(view);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-emerald-800/40">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>Complete Patient Collection • 3 Main Resources + Bonus CKD Guide Included</span>
        <span className="hidden sm:inline-block text-emerald-400">• Instant PDF Download</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white flex items-center justify-center shadow-md border border-emerald-700/40 group-hover:shadow-emerald-900/20 transition-all">
              <ShieldCheck className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <span className="block font-extrabold text-slate-900 tracking-tight text-base sm:text-lg leading-none font-sans">
                {BRAND_NAME}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                Patient Education Series
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors cursor-pointer font-semibold ${
                currentView === 'home'
                  ? 'text-emerald-800 border-b-2 border-emerald-800 py-1'
                  : 'hover:text-emerald-800'
              }`}
            >
              Home & Bundle
            </button>

            {/* Dedicated Ebooks Page Nav */}
            <button
              onClick={() => handleNavClick('ebooks')}
              className={`transition-colors flex items-center gap-1.5 cursor-pointer font-bold px-3 py-1.5 rounded-lg ${
                currentView === 'ebooks'
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
              }`}
            >
              <Library className="w-4 h-4" />
              <span>Ebooks</span>
              <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                currentView === 'ebooks' ? 'bg-emerald-700 text-white' : 'bg-emerald-200 text-emerald-900'
              }`}>
                4
              </span>
            </button>

            {/* Dedicated Articles Page Nav */}
            <button
              onClick={() => handleNavClick('articles')}
              className={`transition-colors flex items-center gap-1.5 cursor-pointer font-bold px-3 py-1.5 rounded-lg ${
                currentView === 'articles'
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-800 hover:bg-emerald-50 hover:text-emerald-900'
              }`}
            >
              <Newspaper className="w-4 h-4 text-emerald-700" />
              <span>Articles</span>
              <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                currentView === 'articles' ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                6
              </span>
            </button>

            {/* NEW: Dedicated Dialysis Mobile Apps Page Nav */}
            <button
              onClick={() => handleNavClick('apps')}
              className={`transition-colors flex items-center gap-1.5 cursor-pointer font-bold px-3 py-1.5 rounded-lg ${
                currentView === 'apps'
                  ? 'bg-teal-900 text-white shadow-sm'
                  : 'bg-teal-50 text-teal-900 hover:bg-teal-100'
              }`}
            >
              <Smartphone className="w-4 h-4 text-teal-700" />
              <span>Apps Dialyse</span>
              <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                currentView === 'apps' ? 'bg-teal-700 text-white' : 'bg-teal-200 text-teal-900'
              }`}>
                Top Apps
              </span>
            </button>

            <button
              onClick={() => handleNavClick('home', 'bonus')}
              className="hover:text-emerald-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Bonus</span>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-300">
                Free
              </span>
            </button>

            <button
              onClick={() => handleNavClick('home', 'faq')}
              className="hover:text-emerald-800 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Header CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCheckout}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 border border-emerald-700/50 cursor-pointer"
              id="nav-cta-btn"
            >
              <span>GET THE BUNDLE</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2.5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left py-2 px-3 rounded-lg font-semibold text-sm ${
              currentView === 'home' ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700 hover:text-emerald-800'
            }`}
          >
            Home & Bundle Overview
          </button>

          {/* Dedicated Ebooks Page Mobile Button */}
          <button
            onClick={() => handleNavClick('ebooks')}
            className={`flex items-center justify-between w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold ${
              currentView === 'ebooks'
                ? 'bg-emerald-900 text-white'
                : 'bg-emerald-100 text-emerald-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Library className="w-4 h-4" />
              <span>Ebooks Library (4 Guides)</span>
            </div>
            <span className="text-[10px] bg-white text-emerald-900 px-2 py-0.5 rounded-full font-extrabold">
              4 Guides
            </span>
          </button>

          {/* Dedicated Articles Page Mobile Button */}
          <button
            onClick={() => handleNavClick('articles')}
            className={`flex items-center justify-between w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold ${
              currentView === 'articles'
                ? 'bg-emerald-900 text-white'
                : 'bg-slate-100 text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-emerald-700" />
              <span>Articles & Clinical Insights</span>
            </div>
            <span className="text-[10px] bg-emerald-800 text-white px-2 py-0.5 rounded-full font-extrabold">
              6 Articles
            </span>
          </button>

          {/* NEW: Dedicated Dialysis Apps Page Mobile Button */}
          <button
            onClick={() => handleNavClick('apps')}
            className={`flex items-center justify-between w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold ${
              currentView === 'apps'
                ? 'bg-teal-900 text-white'
                : 'bg-teal-50 text-teal-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-teal-700" />
              <span>Apps Mobiles Dialyse</span>
            </div>
            <span className="text-[10px] bg-teal-800 text-white px-2 py-0.5 rounded-full font-extrabold">
              Top Apps
            </span>
          </button>
          
          <button
            onClick={() => handleNavClick('home', 'bonus')}
            className="block w-full text-left py-2 px-3 text-slate-700 font-semibold text-sm hover:text-emerald-800"
          >
            Bonus CKD Guide (Free)
          </button>

          <button
            onClick={() => handleNavClick('home', 'faq')}
            className="block w-full text-left py-2 px-3 text-slate-700 font-semibold text-sm hover:text-emerald-800"
          >
            Frequently Asked Questions
          </button>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-lg text-sm shadow text-center flex items-center justify-center gap-2"
            >
              <span>GET THE COMPLETE BUNDLE</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
