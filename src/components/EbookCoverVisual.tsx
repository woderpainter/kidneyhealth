import React from 'react';
import { EbookResource } from '../types';
import { BookOpen, Sparkles, Shield, Heart, Utensils, Award } from 'lucide-react';

interface EbookCoverVisualProps {
  resource: EbookResource;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  isBonus?: boolean;
}

export const EbookCoverVisual: React.FC<EbookCoverVisualProps> = ({
  resource,
  size = 'md',
  className = '',
  isBonus = false,
}) => {
  // Dimension styles based on size
  const sizeClasses = {
    sm: 'w-[140px] h-[195px] text-[10px]',
    md: 'w-[190px] h-[265px] text-xs',
    lg: 'w-[240px] h-[335px] text-sm',
    hero: 'w-[200px] sm:w-[240px] md:w-[270px] h-[280px] sm:h-[340px] md:h-[380px] text-sm',
  };

  // Color schemes for covers
  const themeStyles = {
    forest: {
      bg: 'bg-gradient-to-br from-emerald-950 via-[#064e3b] to-emerald-900',
      accent: 'border-amber-400/40 text-amber-300',
      tagBg: 'bg-emerald-900/80 text-emerald-200 border-emerald-700/50',
      spine: 'bg-emerald-950',
      icon: Heart,
    },
    emerald: {
      bg: 'bg-gradient-to-br from-slate-950 via-[#065f46] to-emerald-950',
      accent: 'border-emerald-400/40 text-emerald-300',
      tagBg: 'bg-teal-900/80 text-teal-200 border-teal-700/50',
      spine: 'bg-slate-950',
      icon: Shield,
    },
    teal: {
      bg: 'bg-gradient-to-br from-teal-950 via-[#047857] to-emerald-900',
      accent: 'border-amber-400/40 text-amber-200',
      tagBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-600/50',
      spine: 'bg-teal-950',
      icon: Utensils,
    },
    'gold-dark': {
      bg: 'bg-gradient-to-br from-amber-950 via-emerald-950 to-slate-950',
      accent: 'border-amber-400 text-amber-300',
      tagBg: 'bg-amber-900/60 text-amber-200 border-amber-500/50',
      spine: 'bg-amber-950',
      icon: Award,
    },
  };

  const theme = themeStyles[resource.coverColor] || themeStyles.forest;
  const IconComponent = theme.icon;

  return (
    <div className={`relative perspective-1000 group ${className}`}>
      {/* Outer 3D Book Frame */}
      <div
        className={`relative ${sizeClasses[size]} rounded-r-xl rounded-l-sm shadow-2xl transition-all duration-300 ease-out transform group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-[0_25px_35px_-5px_rgba(4,47,46,0.35)] overflow-hidden border border-white/20 select-none ${theme.bg}`}
      >
        {/* Book Spine Left Highlight Effect (Crease) */}
        <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-r from-black/60 via-white/20 to-transparent z-20 pointer-events-none" />
        <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-[1px] bg-black/40 z-20 pointer-events-none" />
        
        {/* Glossy Top Sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/40 z-10 pointer-events-none" />
        
        {/* Gold Border Line Trim */}
        <div className="absolute inset-2 sm:inset-3 border border-amber-400/30 rounded-r-lg rounded-l-xs z-10 pointer-events-none" />

        {/* Book Cover Content */}
        <div className="relative z-10 h-full w-full p-3 sm:p-4 pl-4 sm:pl-5 flex flex-col justify-between text-white">
          {/* Top Brand Header */}
          <div className="space-y-1">
            <div className="flex items-center justify-between border-b border-white/15 pb-1 sm:pb-1.5">
              <span className="text-[9px] sm:text-[10px] tracking-widest font-semibold uppercase text-emerald-200/90 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                International Kidney Health
              </span>
              {isBonus && (
                <span className="bg-amber-500 text-slate-950 font-extrabold text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded shadow">
                  BONUS
                </span>
              )}
            </div>

            {resource.badgeText && !isBonus && (
              <div className="pt-0.5">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-amber-300/90">
                  {resource.badgeText}
                </span>
              </div>
            )}
          </div>

          {/* Central Emblem & Title */}
          <div className="my-auto text-center py-2">
            <div className="inline-flex p-2 sm:p-2.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 mb-1.5 sm:mb-2 text-amber-300 shadow-inner">
              <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            
            <h3 className="font-extrabold tracking-tight text-white leading-tight drop-shadow uppercase text-[11px] sm:text-[14px] md:text-[15px] font-sans">
              {resource.title}
            </h3>

            {resource.tagline && (
              <p className="mt-1 text-[8.5px] sm:text-[10px] text-amber-200/90 italic font-medium leading-tight px-1">
                {resource.tagline}
              </p>
            )}

            {resource.subtitle && (
              <p className="mt-1 text-[8px] sm:text-[9.5px] text-emerald-100/80 line-clamp-2 leading-tight px-1">
                {resource.subtitle}
              </p>
            )}
          </div>

          {/* Bottom Authority Seal */}
          <div className="border-t border-white/15 pt-1.5 sm:pt-2 flex items-center justify-between text-[8px] sm:text-[9.5px] text-emerald-200/80">
            <span className="flex items-center gap-1 font-medium">
              <BookOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-300" />
              Patient Guide
            </span>
            <span className="text-amber-300 font-semibold tracking-wide">
              Official Edition
            </span>
          </div>
        </div>

        {/* Page Edge 3D Illusion on Right */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-slate-200/40 to-transparent pointer-events-none" />
      </div>

      {/* Realistic Ground Shadow */}
      <div className="absolute -bottom-3 left-4 right-2 h-3 bg-emerald-950/20 blur-md rounded-full -z-10 group-hover:scale-105 transition-transform duration-300" />
    </div>
  );
};
