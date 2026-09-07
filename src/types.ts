export interface EbookResource {
  id: string;
  title: string;
  tagline?: string;
  subtitle?: string;
  description: string;
  price: number;
  currency: string;
  cover?: string;
  pdfFile: string;
  paypalProductId?: string;
  benefits: string[];
  coverColor: 'emerald' | 'forest' | 'teal' | 'gold-dark';
  badgeText?: string;
  accentColor: string;
  tableOfContents?: { chapter: string; summary: string }[];
  keyHighlights: string[];
  pagesEstimate?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface AudienceItem {
  title: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Nutrition' | 'Transplantation' | 'Prevention' | 'Kidney Disease' | 'Lifestyle';
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featuredImage: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaways?: string[];
    }[];
    conclusion: string;
  };
  tags: string[];
  isFeatured?: boolean;
}

export interface MobileApp {
  id: string;
  name: string;
  category: 'Fluid & Weight' | 'Dialysis Tracker' | 'Renal Nutrition' | 'Labs & Vitals' | 'Medication & Care';
  tagline: string;
  description: string;
  keyFeatures: string[];
  bestFor: string;
  rating: number;
  reviewsCount: string;
  price: string;
  platforms: ('iOS' | 'Android' | 'Web')[];
  badge?: string;
  isMustHave?: boolean;
  dialysisCompatibility: string;
  iconGradient: string;
}

