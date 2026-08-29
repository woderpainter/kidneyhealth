import React from 'react';
import { Article } from '../types';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BRAND_NAME } from '../data/bundleData';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenCheckout: () => void;
  onSelectArticle: (article: Article) => void;
  relatedArticles?: Article[];
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onOpenCheckout,
  onSelectArticle,
  relatedArticles = []
}) => {
  if (!article) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch {
        // user cancelled share
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center items-start p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-4 sm:my-8 shadow-2xl border border-slate-200 overflow-hidden relative text-slate-900">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-800 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-700" />
            <span>Back to articles</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Share this article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-900">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-emerald-600 text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                {article.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedAt}
              </span>
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-5 sm:p-8 md:p-10 space-y-8 max-w-3xl mx-auto">
          
          {/* Author info card */}
          <div className="flex items-center gap-3.5 py-3 border-y border-slate-100 text-xs sm:text-sm text-slate-600">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center border border-emerald-300 shadow-sm shrink-0">
              <User className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <div className="font-bold text-slate-900">{article.author.name}</div>
              <div className="text-slate-500 text-xs">{article.author.role} • {BRAND_NAME}</div>
            </div>
          </div>

          {/* Lead excerpt */}
          <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed italic bg-emerald-50/70 p-4 sm:p-5 rounded-xl border-l-4 border-emerald-700">
            {article.excerpt}
          </p>

          {/* Intro */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>{article.content.intro}</p>
          </div>

          {/* Structured Sections */}
          <div className="space-y-8 pt-4">
            {article.content.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-2">
                  {sec.heading}
                </h2>
                
                <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Key Takeaways if available */}
                {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                  <div className="bg-emerald-900/5 rounded-xl p-4 sm:p-5 border border-emerald-700/20 space-y-2 mt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Key Takeaways:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {sec.keyTakeaways.map((point, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-2">
                          <span className="text-emerald-700 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-200 text-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>In Summary</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-1">
              <Tag className="w-3.5 h-3.5" />
              Keywords:
            </span>
            {article.tags.map((tag, tIdx) => (
              <span 
                key={tIdx}
                className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* In-Article Bundle Promo Box */}
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-emerald-700/50 mt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="space-y-2 max-w-lg">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Complete Patient Collection</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                  Ready to take complete control of your kidney health?
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  Unlock our 3 core digital guides + bonus CKD educational guide: meal plans, lab metrics decoding, and transplant roadmaps.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>GET THE BUNDLE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Recommended Related Articles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.slice(0, 2).map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="group bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 rounded-xl p-4 transition-all cursor-pointer flex gap-3"
                  >
                    <img 
                      src={rel.featuredImage} 
                      alt={rel.title} 
                      className="w-16 h-16 rounded-lg object-cover shrink-0" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                        {rel.category}
                      </span>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 line-clamp-2 transition-colors">
                        {rel.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Medical disclaimer note */}
          <div className="text-[11px] text-slate-400 text-center pt-2 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Educational and general health literacy content. Always consult your personal nephrologist.</span>
          </div>

        </div>

      </div>
    </div>
  );
};
