import React, { useState, useMemo } from 'react';
import { MobileApp } from '../types';
import { MOBILE_APPS_DATA, APPS_CATEGORIES, DIALYSIS_APP_TIPS } from '../data/appsData';
import {
  Smartphone,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  Star,
  Download,
  ExternalLink,
  ShieldCheck,
  Droplets,
  Activity,
  Apple,
  Pill,
  Scale,
  HeartPulse,
  AlertTriangle,
  ArrowRight,
  Bookmark,
  Share2,
  Layers,
  Flame,
  BookOpen
} from 'lucide-react';

interface DialysisAppsPageProps {
  onOpenCheckout: () => void;
  onNavigateHome: () => void;
  onNavigateToEbooks?: () => void;
}

export const DialysisAppsPage: React.FC<DialysisAppsPageProps> = ({
  onOpenCheckout,
  onNavigateHome,
  onNavigateToEbooks,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedAppId, setCopiedAppId] = useState<string | null>(null);

  // Filtered Apps
  const filteredApps = useMemo(() => {
    return MOBILE_APPS_DATA.filter((app) => {
      const matchesCategory =
        selectedCategory === 'All' || app.category === selectedCategory;
      const matchesSearch =
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.bestFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.dialysisCompatibility.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyAppName = (appName: string, id: string) => {
    navigator.clipboard?.writeText(appName);
    setCopiedAppId(id);
    setTimeout(() => setCopiedAppId(null), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fluid & Weight':
        return <Droplets className="w-3.5 h-3.5" />;
      case 'Dialysis Tracker':
        return <Activity className="w-3.5 h-3.5" />;
      case 'Renal Nutrition':
        return <Apple className="w-3.5 h-3.5" />;
      case 'Labs & Vitals':
        return <HeartPulse className="w-3.5 h-3.5" />;
      case 'Medication & Care':
        return <Pill className="w-3.5 h-3.5" />;
      default:
        return <Smartphone className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ========================================================
          1. HERO HEADER SECTION
         ======================================================== */}
      <section className="bg-gradient-to-b from-slate-950 via-teal-950 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden border-b border-teal-900/40">
        
        {/* Subtle grid accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            <Smartphone className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Patient Toolkit • Dialysis & Kidney Health</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Useful Mobile Apps for <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
              Dialysis & Renal Care
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Curated smartphone tools to help hemodialysis and peritoneal dialysis patients manage daily fluid quotas, track dry weight, time phosphate binders, scan potassium/phosphorus, and monitor lab adequacy.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-teal-200">
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <Droplets className="w-3.5 h-3.5 text-cyan-400" /> Fluid & Ice Trackers
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <Activity className="w-3.5 h-3.5 text-teal-400" /> Dialysis Log & Ultrafiltration
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <Apple className="w-3.5 h-3.5 text-emerald-400" /> Potassium & Phosphorus Scanners
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <Pill className="w-3.5 h-3.5 text-amber-400" /> Phosphate Binder Alarms
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. MUST-HAVE SPOTLIGHT BANNER
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-slate-950 text-[11px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  Patient Guide
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  How Mobile Apps Support Your Dialysis Routine
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Dialysis requires meticulous attention to numbers between clinic sessions. These selected apps eliminate guesswork and simplify communication with your nephrology care team.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-slate-900">100% Smartphone Ready</div>
                <div className="text-[11px] text-slate-500">iOS & Android Compatible</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center border border-teal-200">
                <Smartphone className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* 4 Pillar Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="p-3.5 rounded-2xl bg-cyan-50/70 border border-cyan-100 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-cyan-500 text-white shrink-0 shadow-sm">
                <Droplets className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Prevent Fluid Overload</div>
                <div className="text-[11px] text-slate-600">Track interdialytic weight gain (IDWG) and stay safely under fluid limits.</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-teal-600 text-white shrink-0 shadow-sm">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Log Treatment Runs</div>
                <div className="text-[11px] text-slate-600">Record pre/post weight, blood pressure drops, and ultrafiltration rates.</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0 shadow-sm">
                <Apple className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Decode Grocery Labels</div>
                <div className="text-[11px] text-slate-600">Scan barcodes to verify hidden phosphorus additives and high potassium.</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500 text-slate-950 shrink-0 shadow-sm">
                <Pill className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Time Phosphate Binders</div>
                <div className="text-[11px] text-slate-600">Never miss meal-synchronized binder doses to keep phosphorus below 5.5 mg/dL.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CATEGORIES & SEARCH CONTROLS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </div>
            {APPS_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-teal-900 text-white shadow-sm border border-teal-900'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat !== 'All' && getCategoryIcon(cat)}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search apps by feature, fluid, phosphorus, weight..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 shadow-inner"
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
          4. APPS CATALOG GRID
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm font-semibold text-slate-500">
            Showing <span className="text-slate-900 font-bold">{filteredApps.length}</span> patient application{filteredApps.length > 1 ? 's' : ''}
          </p>

          <div className="text-xs text-slate-500 font-medium">
            Available on iOS App Store & Google Play
          </div>
        </div>

        {filteredApps.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4 max-w-md mx-auto shadow-sm">
            <Smartphone className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No applications found</h3>
            <p className="text-xs text-slate-500">
              No results match your search query. Try searching for "fluid", "phosphorus", "weight", or select "All".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-teal-800 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-teal-900 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 relative group"
              >
                {/* Top Row: App Icon + Name + Badge */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    
                    <div className="flex items-center gap-3.5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.iconGradient} text-white flex items-center justify-center shadow-md shrink-0 border border-white/20`}>
                        {getCategoryIcon(app.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                            {app.name}
                          </h3>
                          {app.isMustHave && (
                            <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                              Top Pick
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                          <span className="font-semibold text-teal-800 flex items-center gap-1">
                            {getCategoryIcon(app.category)}
                            {app.category}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-amber-600 font-bold">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            {app.rating}
                          </span>
                          <span className="text-slate-400 text-[11px]">({app.reviewsCount})</span>
                        </div>
                      </div>
                    </div>

                    {app.badge && (
                      <span className="hidden sm:inline-block bg-teal-50 text-teal-900 border border-teal-200/80 text-[10px] font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap">
                        {app.badge}
                      </span>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {app.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 space-y-2">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                      <span>Key Features for Dialysis Patients:</span>
                    </div>
                    <ul className="space-y-1.5">
                      {app.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For Tag */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <span className="font-bold text-slate-800 shrink-0">Best suited for:</span>
                    <span className="bg-emerald-50 text-emerald-900 px-2.5 py-0.5 rounded-lg font-medium text-[11px] border border-emerald-200/60 truncate">
                      {app.bestFor}
                    </span>
                  </div>

                  {/* Dialysis Compatibility */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <span className="font-bold text-slate-800 shrink-0">Dialysis Modality:</span>
                    <span className="text-[11px] text-teal-800 font-semibold">
                      {app.dialysisCompatibility}
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Platforms + Copy Name / Store Search Trigger */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-slate-400">Available on:</span>
                    <div className="flex items-center gap-1.5">
                      {app.platforms.map((plat) => (
                        <span
                          key={plat}
                          className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200"
                        >
                          {plat}
                        </span>
                      ))}
                      <span className="text-[11px] font-bold text-emerald-700 ml-1">
                        • {app.price}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyAppName(app.name, app.id)}
                    className="bg-teal-900 hover:bg-teal-950 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    {copiedAppId === app.id ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Name Copied!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-teal-300" />
                        <span>Copy Name to Search on Store</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* ========================================================
          5. PRACTICAL DIALYSIS DIGITAL TIPS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="bg-gradient-to-br from-slate-900 to-teal-950 rounded-3xl p-6 sm:p-10 text-white border border-teal-800/50 shadow-xl space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-teal-300 text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Clinical Best Practices</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              Tips for Getting the Most From Dialysis Apps
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Smartphone tools are most powerful when combined with proper measurement habits and validated clinical guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {DIALYSIS_APP_TIPS.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 space-y-2 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <span className="w-6 h-6 rounded-lg bg-amber-400/20 flex items-center justify-center text-xs font-black text-amber-300">
                    {index + 1}
                  </span>
                  <h4>{item.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-8">
                  {item.tip}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          6. EBOOK COMPANION BANNER (Bundle connection)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-emerald-600/40 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Complete Patient Ebook Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Combine Apps with Our 4 Complete Digital Guides
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              While apps track your daily numbers, our comprehensive e-books provide the in-depth culinary plans (7-Day Renal Meal Plan), transplant preparation milestones, and stage-by-stage clinical roadmaps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>GET THE COMPLETE BUNDLE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {onNavigateToEbooks && (
              <button
                onClick={onNavigateToEbooks}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-colors border border-white/20 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-emerald-300" />
                <span>View 4 Ebooks</span>
              </button>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
