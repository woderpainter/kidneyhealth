import React, { useState, useMemo } from 'react';
import { EbookResource } from '../types';
import { MAIN_RESOURCES, BONUS_RESOURCE, BRAND_NAME, BUNDLE_NAME } from '../data/bundleData';
import { EbookCoverVisual } from './EbookCoverVisual';
import { usePurchases } from '../context/PurchaseContext';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  FileText, 
  Download, 
  Layers, 
  CheckCircle2, 
  Award,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ShoppingBag
} from 'lucide-react';

interface EbooksPageProps {
  onPreviewEbook: (ebook: EbookResource) => void;
  onOpenCheckout: () => void;
  onNavigateHome: () => void;
}

interface EnrichedEbook extends EbookResource {
  category: 'Transplantation' | 'Kidney Disease' | 'Nutrition' | 'CKD Care';
  pageCount: string;
  idealFor: string;
  format: string;
}

const ALL_ENRICHED_EBOOKS: EnrichedEbook[] = [
  {
    ...MAIN_RESOURCES[0],
    category: 'Transplantation',
    pageCount: '68 pages',
    idealFor: 'Transplant candidates, living donors, recipients, and their support networks.',
    format: 'PDF (Phone, Tablet, Desktop & Print-Ready)'
  },
  {
    ...MAIN_RESOURCES[1],
    category: 'Kidney Disease',
    pageCount: '54 pages',
    idealFor: 'Anyone diagnosed with kidney concerns or seeking to decode lab reports.',
    format: 'PDF (Phone, Tablet, Desktop & Print-Ready)'
  },
  {
    ...MAIN_RESOURCES[2],
    category: 'Nutrition',
    pageCount: '82 pages',
    idealFor: 'Patients and caregivers managing dietary potassium, sodium, and daily meals.',
    format: 'PDF (Phone, Tablet, Desktop & Print-Ready)'
  },
  {
    ...BONUS_RESOURCE,
    category: 'CKD Care',
    pageCount: '46 pages',
    idealFor: 'Individuals navigating CKD stages 1 through 5 seeking lifestyle protection.',
    format: 'PDF (Phone, Tablet, Desktop & Print-Ready)'
  }
];

const EBOOK_CATEGORIES = ['All Guides', 'Nutrition', 'Transplantation', 'Kidney Disease', 'CKD Care'] as const;

export const EbooksPage: React.FC<EbooksPageProps> = ({
  onPreviewEbook,
  onOpenCheckout,
  onNavigateHome,
}) => {
  const { isPurchased, downloadEbook, openCheckout } = usePurchases();
  const [selectedCategory, setSelectedCategory] = useState<string>('All Guides');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedEbookId, setExpandedEbookId] = useState<string | null>(null);

  const filteredEbooks = useMemo(() => {
    return ALL_ENRICHED_EBOOKS.filter((ebook) => {
      const matchesCategory =
        selectedCategory === 'All Guides' || ebook.category === selectedCategory;
      const matchesSearch =
        ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ebook.tagline && ebook.tagline.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (ebook.benefits && ebook.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedEbookId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ========================================================
          1. HERO HEADER SECTION
         ======================================================== */}
      <section className="bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900 text-white py-16 sm:py-24 relative overflow-hidden border-b border-emerald-900/40">
        
        {/* Subtle Background Geometry */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Patient Library • 4 Complete Guides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            The Complete Kidney Health <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              Digital Ebook Collection
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore all 4 evidence-based publications crafted for patients, families, and caregivers. Gain instant, lifetime digital access to step-by-step guidance on every critical phase of kidney health.
          </p>

          {/* Quick Action Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-emerald-200">
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <Download className="w-3.5 h-3.5 text-emerald-400" /> Instant PDF Delivery
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Lifetime Access & Updates
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <Award className="w-3.5 h-3.5 text-amber-400" /> All 4 Included in 1 Bundle
            </span>
          </div>

          {/* Quick CTA */}
          <div className="pt-4">
            <button
              onClick={onOpenCheckout}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>GET ALL 4 GUIDES IN THE BUNDLE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. SEARCH & FILTER CONTROLS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </div>
            {EBOOK_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-900 text-white shadow-sm border border-emerald-900'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides, chapters, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================
          3. COMPREHENSIVE EBOOK CARDS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        
        {filteredEbooks.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4 max-w-md mx-auto shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No guides found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search terms or category selection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Guides');
                setSearchQuery('');
              }}
              className="bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {filteredEbooks.map((ebook, idx) => {
              const isExpanded = expandedEbookId === ebook.id;
              const isBonus = ebook.id === 'bonus-ckd-guide';

              return (
                <div
                  key={ebook.id}
                  id={`ebook-card-${ebook.id}`}
                  className={`bg-white rounded-3xl border ${
                    isBonus ? 'border-amber-300 ring-2 ring-amber-400/20' : 'border-slate-200'
                  } shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between`}
                >
                  
                  {/* Card Header & Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    
                    {/* Top Row: Cover Visual + Title Specs */}
                    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                      
                      {/* 3D Visual Cover */}
                      <div className="shrink-0 relative group">
                        <EbookCoverVisual resource={ebook} size="md" />
                        <button
                          onClick={() => onPreviewEbook(ebook)}
                          className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center text-white text-xs font-bold gap-1.5 cursor-pointer backdrop-blur-[2px]"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Look Inside</span>
                        </button>
                      </div>

                      {/* Info */}
                      <div className="space-y-2.5 flex-grow">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${
                            isBonus ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-emerald-100 text-emerald-900'
                          }`}>
                            {ebook.badgeText || `RESOURCE ${idx + 1}`}
                          </span>
                          <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                            {ebook.category}
                          </span>
                          <span className="text-[10px] font-medium text-slate-500">
                            {ebook.pageCount}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                          {ebook.title}
                        </h2>

                        {ebook.tagline && (
                          <p className="text-xs sm:text-sm font-semibold text-emerald-800 italic">
                            {ebook.tagline}
                          </p>
                        )}

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                          {ebook.description}
                        </p>
                      </div>

                    </div>

                    {/* Ideal For Note */}
                    <div className="bg-slate-50 rounded-xl p-3.5 text-xs text-slate-600 border border-slate-100 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Ideal For: </strong>
                        <span>{ebook.idealFor}</span>
                      </div>
                    </div>

                    {/* Key Benefits Checklist */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        What You Will Learn:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {ebook.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Table of Contents Preview */}
                    {ebook.tableOfContents && ebook.tableOfContents.length > 0 && (
                      <div className="pt-2">
                        <button
                          onClick={() => toggleExpand(ebook.id)}
                          className="w-full bg-emerald-50/60 hover:bg-emerald-50 text-emerald-900 border border-emerald-200/60 rounded-xl p-3 text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-emerald-700" />
                            <span>Detailed Table of Contents ({ebook.tableOfContents.length} Chapters)</span>
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-emerald-700" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-emerald-700" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="mt-3 bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3 animate-in fade-in-50 duration-200">
                            {ebook.tableOfContents.map((chap, cIdx) => (
                              <div key={cIdx} className="text-xs border-b border-slate-200/60 last:border-0 pb-2.5 last:pb-0">
                                <div className="font-bold text-slate-900">{chap.chapter}</div>
                                <div className="text-slate-600 text-[11px] mt-0.5">{chap.summary}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="bg-slate-50/90 border-t border-slate-100 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      onClick={() => onPreviewEbook(ebook)}
                      className="w-full sm:w-auto text-xs font-bold text-slate-700 hover:text-emerald-800 bg-white border border-slate-200 hover:border-emerald-300 px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Eye className="w-4 h-4 text-emerald-700" />
                      <span>Preview Look Inside</span>
                    </button>

                    {isPurchased(ebook.id) ? (
                      <button
                        onClick={() => downloadEbook(ebook.id)}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        id={`ebook-page-download-${ebook.id}`}
                      >
                        <Download className="w-3.5 h-3.5 text-white" />
                        <span>Download eBook (PDF)</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => openCheckout(ebook)}
                        className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        id={`ebook-page-buy-${ebook.id}`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Buy Now • ${ebook.price.toFixed(2)}</span>
                      </button>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* ========================================================
          4. COMPARISON MATRIX (What Each Guide Covers)
         ======================================================== */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Topic Coverage Across All 4 Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Each publication is dedicated to a distinct pillar of kidney health, creating a complete, non-overlapping educational library.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900">
                  <th className="p-4 font-extrabold">Key Patient Topic</th>
                  <th className="p-4 font-bold text-center">Kidney Transplant Journey</th>
                  <th className="p-4 font-bold text-center">Kidney Disease</th>
                  <th className="p-4 font-bold text-center">Food Guide & Meal Plan</th>
                  <th className="p-4 font-bold text-center text-amber-900 bg-amber-50/80">BONUS CKD Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-semibold text-slate-900">Pre-transplant evaluation & surgery steps</td>
                  <td className="p-4 text-center text-emerald-700 font-bold">✓ Full Focus</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-slate-300 bg-amber-50/30">—</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-semibold text-slate-900">Lab test decoding (eGFR, Creatinine, uACR)</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-emerald-700 font-bold">✓ Full Focus</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-emerald-700 font-bold bg-amber-50/30">✓ Included</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-semibold text-slate-900">7-Day structured meal plan & recipes</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-emerald-700 font-bold">✓ Full Focus</td>
                  <td className="p-4 text-center text-slate-300 bg-amber-50/30">—</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-semibold text-slate-900">Low-potassium & low-sodium substitution tables</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-emerald-700 font-bold">✓ Full Focus</td>
                  <td className="p-4 text-center text-slate-300 bg-amber-50/30">—</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-semibold text-slate-900">CKD Stages 1 through 5 progression guide</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-emerald-700 font-bold">✓ Included</td>
                  <td className="p-4 text-center text-slate-300">—</td>
                  <td className="p-4 text-center text-emerald-700 font-bold bg-amber-50/30">✓ Full Focus</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-semibold text-slate-900">Doctor consultation cheat-sheets & questions</td>
                  <td className="p-4 text-center text-emerald-700 font-bold">✓ Included</td>
                  <td className="p-4 text-center text-emerald-700 font-bold">✓ Included</td>
                  <td className="p-4 text-center text-emerald-700 font-bold">✓ Included</td>
                  <td className="p-4 text-center text-emerald-700 font-bold bg-amber-50/30">✓ Included</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ========================================================
          5. BUNDLE VALUE & INSTANT ACCESS CTA
         ======================================================== */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-emerald-700/50 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete 4-Guide Digital Collection</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
            Get Instant Access to All 4 Digital Ebooks in One Complete Bundle
          </h2>

          <p className="text-emerald-100 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Download the 3 core guides plus the exclusive Bonus CKD Guide immediately. Read seamlessly on your phone, tablet, computer, or print them at home.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>GET THE COMPLETE BUNDLE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl transition-colors border border-white/20 cursor-pointer"
            >
              Back to Home Overview
            </button>
          </div>

          <p className="text-[11px] text-emerald-300/80 pt-2">
            Instant PDF Download • One-Time Payment • Lifetime Access
          </p>

        </div>
      </section>

    </div>
  );
};
