import React, { useState, useMemo } from 'react';
import { Article } from '../types';
import { ARTICLES_DATA, CATEGORIES_LIST } from '../data/articlesData';
import { 
  Sparkles, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Search, 
  BookOpen, 
  Filter, 
  Bookmark, 
  Tag, 
  Share2, 
  CheckCircle2, 
  ArrowLeft,
  Flame,
  Newspaper,
  HeartPulse
} from 'lucide-react';
import { BRAND_NAME } from '../data/bundleData';

interface ArticlesPageProps {
  onSelectArticle: (article: Article) => void;
  onOpenCheckout: () => void;
  onNavigateHome: () => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  onSelectArticle,
  onOpenCheckout,
  onNavigateHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'readTime'>('latest');

  // Featured article (Hero)
  const featuredArticle = useMemo(() => {
    return ARTICLES_DATA.find((a) => a.isFeatured) || ARTICLES_DATA[0];
  }, []);

  // Filtered & Sorted articles
  const filteredArticles = useMemo(() => {
    const list = ARTICLES_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'readTime') {
      return [...list].sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
    }
    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  // Topic Statistics
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = { All: ARTICLES_DATA.length };
    ARTICLES_DATA.forEach((art) => {
      stats[art.category] = (stats[art.category] || 0) + 1;
    });
    return stats;
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ========================================================
          1. HERO HEADER SECTION
         ======================================================== */}
      <section className="bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden border-b border-emerald-900/40">
        
        {/* Subtle geometry background */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            <Newspaper className="w-3.5 h-3.5 text-amber-400" />
            <span>Clinical Knowledge Hub & Patient Articles</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Kidney Health Insights, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              Guides & Nutrition Articles
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Written by medical and nephrology contributors to help you decode lab results, master renal-friendly culinary choices, and navigate kidney wellness with confidence.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-emerald-200">
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Evidence-Grounded Guides
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <HeartPulse className="w-3.5 h-3.5 text-emerald-400" /> Practical Patient Tips
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Free Educational Reading
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. FEATURED HERO ARTICLE (Big Spotlight Card)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-900">
              <img
                src={featuredArticle.featuredImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              
              <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                <span className="bg-amber-400 text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 fill-slate-950" />
                  Featured Article
                </span>
                <span className="bg-emerald-900/90 text-emerald-100 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                  {featuredArticle.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    {featuredArticle.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 
                  onClick={() => onSelectArticle(featuredArticle)}
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors leading-tight cursor-pointer"
                >
                  {featuredArticle.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-md border border-emerald-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center border border-emerald-300 shrink-0">
                    <User className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{featuredArticle.author.name}</div>
                    <div className="text-[10px] text-slate-500">{featuredArticle.author.role}</div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectArticle(featuredArticle)}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 text-emerald-300" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. SEARCH, FILTERS & CONTROLS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </div>
            {CATEGORIES_LIST.map((cat) => {
              const count = categoryStats[cat] || 0;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-900 text-white shadow-sm border border-emerald-900'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles by keyword, author, tag..."
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
          4. ARTICLES GRID
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm font-semibold text-slate-500">
            Showing <span className="text-slate-900 font-bold">{filteredArticles.length}</span> article{filteredArticles.length > 1 ? 's' : ''}
          </p>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <span>Sort:</span>
            <button
              onClick={() => setSortBy('latest')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                sortBy === 'latest' ? 'bg-emerald-100 text-emerald-900 font-bold' : 'hover:bg-slate-100'
              }`}
            >
              Latest
            </button>
            <button
              onClick={() => setSortBy('readTime')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                sortBy === 'readTime' ? 'bg-emerald-100 text-emerald-900 font-bold' : 'hover:bg-slate-100'
              }`}
            >
              Quick Reads
            </button>
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4 max-w-md mx-auto shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No articles found</h3>
            <p className="text-xs text-slate-500">
              No results match your search query. Try broadening your keywords or select "All".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer hover:-translate-y-1"
              >
                
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-md text-emerald-900 font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-slate-100">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-7 h-7 rounded-full bg-emerald-900/90 text-white flex items-center justify-center shadow">
                      <Bookmark className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                  
                  <div className="space-y-2.5">
                    {/* Meta info */}
                    <div className="flex items-center gap-2.5 text-[11px] font-semibold text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-700" />
                        {article.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-700" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5 truncate max-w-[130px]">
                      <User className="w-3 h-3 text-emerald-700 shrink-0" />
                      <span className="truncate">{article.author.name}</span>
                    </div>

                    <div className="text-xs font-bold text-emerald-800 group-hover:text-emerald-950 flex items-center gap-1">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>

              </article>
            ))}
          </div>
        )}

      </section>

      {/* ========================================================
          5. BUNDLE PROMO BANNER
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-emerald-700/50 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Complete Patient Ebook Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking for our structured meal plans and step-by-step roadmaps?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Explore our 3 core digital guides + bonus CKD companion book in one complete bundle. Instant PDF download on any device.
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
            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-colors border border-white/20 cursor-pointer"
            >
              Back to Home
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
