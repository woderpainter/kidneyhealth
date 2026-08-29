/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { WhatsInsideSection } from './components/WhatsInsideSection';
import { BonusSection } from './components/BonusSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { AudienceSection } from './components/AudienceSection';
import { ProductValueSection } from './components/ProductValueSection';
import { OfferSection } from './components/OfferSection';
import { DisclaimerSection } from './components/DisclaimerSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { EbookPreviewModal } from './components/EbookPreviewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { EbooksPage } from './components/EbooksPage';
import { ArticlesPage } from './components/ArticlesPage';
import { DialysisAppsPage } from './components/DialysisAppsPage';
import { EbookResource, Article } from './types';
import { ARTICLES_DATA } from './data/articlesData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'ebooks' | 'articles' | 'apps'>('home');
  const [selectedPreviewEbook, setSelectedPreviewEbook] = useState<EbookResource | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handlePreviewEbook = (ebook: EbookResource) => {
    setSelectedPreviewEbook(ebook);
  };

  const handleClosePreview = () => {
    setSelectedPreviewEbook(null);
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  const handleNavigate = (view: 'home' | 'ebooks' | 'articles' | 'apps') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Top Navigation Bar with View Switcher */}
      <Navbar 
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenCheckout={handleOpenCheckout} 
      />

      {/* Main Content Render based on currentView */}
      <main className="flex-grow">
        {currentView === 'ebooks' ? (
          <EbooksPage
            onPreviewEbook={handlePreviewEbook}
            onOpenCheckout={handleOpenCheckout}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : currentView === 'articles' ? (
          <ArticlesPage
            onSelectArticle={handleSelectArticle}
            onOpenCheckout={handleOpenCheckout}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : currentView === 'apps' ? (
          <DialysisAppsPage
            onOpenCheckout={handleOpenCheckout}
            onNavigateHome={() => handleNavigate('home')}
            onNavigateToEbooks={() => handleNavigate('ebooks')}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onOpenCheckout={handleOpenCheckout}
              onPreviewEbook={handlePreviewEbook}
              onNavigateToEbooks={() => handleNavigate('ebooks')}
            />

            {/* 2. Problem / Awareness Section */}
            <ProblemSection />

            {/* 3. What's Inside the Bundle */}
            <WhatsInsideSection
              onPreviewEbook={handlePreviewEbook}
              onOpenCheckout={handleOpenCheckout}
              onNavigateToEbooks={() => handleNavigate('ebooks')}
            />

            {/* 4. Bonus Section */}
            <BonusSection
              onPreviewEbook={handlePreviewEbook}
              onOpenCheckout={handleOpenCheckout}
            />

            {/* 5. Benefits Section */}
            <BenefitsSection />

            {/* 6. Articles Section (Dernier Article + 3 Colonnes) */}
            <ArticlesSection
              onSelectArticle={handleSelectArticle}
              onOpenCheckout={handleOpenCheckout}
              onNavigateToArticles={() => handleNavigate('articles')}
            />

            {/* 7. Who Is This Bundle For? */}
            <AudienceSection />

            {/* 8. Product Value Section */}
            <ProductValueSection
              onPreviewEbook={handlePreviewEbook}
              onOpenCheckout={handleOpenCheckout}
            />

            {/* 9. Offer / CTA Section */}
            <OfferSection onOpenCheckout={handleOpenCheckout} />

            {/* 10. Trust / Disclaimer Section */}
            <DisclaimerSection />

            {/* 11. FAQ Section */}
            <FAQSection />

            {/* 12. Final CTA Section */}
            <FinalCTASection onOpenCheckout={handleOpenCheckout} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Floating CTA */}
      <StickyMobileCTA onOpenCheckout={handleOpenCheckout} />

      {/* Interactive Ebook Look-Inside Preview Modal */}
      <EbookPreviewModal
        resource={selectedPreviewEbook}
        onClose={handleClosePreview}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* Interactive Article Reading Full Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={handleCloseArticle}
        onOpenCheckout={handleOpenCheckout}
        onSelectArticle={handleSelectArticle}
        relatedArticles={ARTICLES_DATA.filter((a) => a.id !== selectedArticle?.id)}
      />

      {/* Interactive Digital Checkout / Access Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />

    </div>
  );
}
