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
  Newspaper
} from 'lucide-react';

interface ArticlesSectionProps {
  onSelectArticle: (article: Article) => void;
  onOpenCheckout: () => void;
  onNavigateToArticles?: () => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  onSelectArticle,
  onOpenCheckout,
  onNavigateToArticles,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Latest / Featured Article
  const latestArticle = useMemo(() => {
    return ARTICLES_DATA.find((a) => a.isFeatured) || ARTICLES_DATA[0];
  }, []);

  // Filtered Articles for the 3-column grid
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="articles" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_0.7px,transparent_0.7px)] [background-size:20px_20px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Clinical Insights & Recent Articles</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kidney Health Articles & Practical Guides
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore evidence-grounded articles written to help you better understand renal function, optimize your nutrition, prepare for treatment pathways, and live with clarity.
          </p>

          {onNavigateToArticles && (
            <div className="pt-1">
              <button
                onClick={onNavigateToArticles}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-100/70 hover:bg-emerald-100 border border-emerald-300/80 px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <Newspaper className="w-4 h-4 text-emerald-700" />
                <span>Open Dedicated Articles Knowledge Hub</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
              </button>
            </div>
          )}
        </div>

        {/* ========================================================
            1. LATEST ARTICLE (Hero Card - Featured Article)
           ======================================================== */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Col */}
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-slate-900">
              <img
                src={latestArticle.featuredImage}
                alt={latestArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  Latest Article
                </span>
                <span className="bg-emerald-900/90 text-emerald-100 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                  {latestArticle.category}
                </span>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    {latestArticle.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    {latestArticle.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => onSelectArticle(latestArticle)}
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors leading-tight cursor-pointer"
                >
                  {latestArticle.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {latestArticle.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {latestArticle.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center border border-emerald-300 shrink-0">
                    <User className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{latestArticle.author.name}</div>
                    <div className="text-[10px] text-slate-500">{latestArticle.author.role}</div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectArticle(latestArticle)}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================
            2. FILTER & SEARCH CONTROLS
           ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* ========================================================
            3. 3-COLUMN ARTICLES GRID
           ======================================================== */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold text-slate-700">No articles match your search or filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-emerald-800 underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer hover:-translate-y-1"
              >
                
                {/* Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-md text-emerald-900 font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-slate-100">
                      {article.category}
                    </span>
                  </div>

                  {/* Hover bookmark */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-7 h-7 rounded-full bg-emerald-900/90 text-white flex items-center justify-center shadow">
                      <Bookmark className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                  
                  <div className="space-y-2.5">
                    {/* Meta date & read time */}
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
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Footer Action */}
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

        {/* View All Articles Hub CTA Banner */}
        {onNavigateToArticles && (
          <div className="mt-8 text-center bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-emerald-700">
            <div className="text-left space-y-1">
              <h4 className="font-extrabold text-base sm:text-lg">Want to explore all articles with advanced filtering?</h4>
              <p className="text-xs sm:text-sm text-emerald-200">Access our complete clinical library with instant reading mode and quick reads.</p>
            </div>
            <button
              onClick={onNavigateToArticles}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
