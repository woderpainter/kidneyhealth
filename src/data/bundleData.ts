import { EbookResource, FAQItem, BenefitItem, AudienceItem } from '../types';

export const BRAND_NAME = "International Kidney Health";
export const BUNDLE_NAME = "KIDNEY HEALTH ESSENTIALS BUNDLE";
export const HERO_HEADLINE = "3 Powerful Kidney Health Guides. 1 Healthier You.";
export const HERO_SUBTEXT = "Gain instant access to practical, easy-to-understand resources covering kidney disease, transplant, nutrition, and chronic kidney disease (CKD)—all in one structured digital collection.";

export const MAIN_RESOURCES: EbookResource[] = [
  {
    id: "kidney-transplant-journey",
    title: "KIDNEY TRANSPLANT JOURNEY",
    subtitle: "A complete patient guide to kidney transplant, covering what patients need to know before, during, and after kidney transplant.",
    description: "A comprehensive, compassionate patient guide providing step-by-step clarity on the evaluation process, surgery preparation, hospital stay, and long-term post-transplant wellness.",
    price: 19.99,
    currency: "USD",
    cover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    pdfFile: "kidney-transplant-journey.pdf",
    paypalProductId: "EBOOK-TRANSPLANT-001",
    benefits: [
      "Before transplant preparation & evaluation",
      "During the journey & hospital stay insights",
      "After-transplant guidance & recovery care",
      "Practical patient information & daily living"
    ],
    coverColor: "forest",
    badgeText: "RESOURCE 1",
    accentColor: "from-emerald-950 via-emerald-900 to-teal-950",
    pagesEstimate: "Comprehensive Digital Guide",
    tableOfContents: [
      { chapter: "Chapter 1: Understanding Transplant Candidacy", summary: "How evaluation works, kidney matching factors, and waitlist navigation." },
      { chapter: "Chapter 2: The Surgical & Hospital Experience", summary: "What to expect on surgery day, the ICU/step-down phase, and immediate recovery." },
      { chapter: "Chapter 3: Post-Transplant Medications & Care", summary: "Understanding immunosuppressants, lab monitoring routines, and infection prevention." },
      { chapter: "Chapter 4: Thriving with Your New Kidney", summary: "Nutrition, hydration, physical activity, and long-term graft protection." }
    ],
    keyHighlights: [
      "Step-by-step patient timeline from evaluation to recovery",
      "Questions to ask your transplant coordinator & nephrologist",
      "Medication management routines and adherence tips"
    ]
  },
  {
    id: "kidney-disease",
    title: "KIDNEY DISEASE",
    tagline: "“The Illness You Don’t Feel… Until You Do”",
    description: "An easy-to-understand guide helping readers understand kidney disease, recognize important information early, and better understand kidney health and treatment options.",
    price: 19.99,
    currency: "USD",
    cover: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    pdfFile: "kidney-disease.pdf",
    paypalProductId: "EBOOK-DISEASE-002",
    benefits: [
      "Understand kidney disease and how kidneys function",
      "Learn important warning signs & subtle indicators",
      "Understand treatment options & diagnostic stages",
      "Improve kidney-health awareness for proactive care"
    ],
    coverColor: "emerald",
    badgeText: "RESOURCE 2",
    accentColor: "from-slate-950 via-emerald-950 to-teal-900",
    pagesEstimate: "Essential Patient Guide",
    tableOfContents: [
      { chapter: "Chapter 1: The Silent Nature of Kidney Health", summary: "Why early stages often go unnoticed and how filtration works." },
      { chapter: "Chapter 2: Deciphering Lab Values & Numbers", summary: "Making sense of eGFR, Creatinine, BUN, and urine protein tests." },
      { chapter: "Chapter 3: Risk Factors & Progression Mechanics", summary: "How blood pressure, blood sugar, and genetics impact kidney tissue." },
      { chapter: "Chapter 4: Navigating Treatment Pathways", summary: "Collaborating with your care team and preserving remaining kidney function." }
    ],
    keyHighlights: [
      "Clear visual explanations of eGFR and Creatinine lab metrics",
      "Early warning signals often missed in standard checkups",
      "Empowerment guide for doctor consultations"
    ]
  },
  {
    id: "kidney-health-food-guide",
    title: "KIDNEY HEALTH FOOD GUIDE",
    tagline: "“What to Eat, What to Avoid & 7-Day Meal Plan”",
    description: "A practical guide to kidney-friendly food choices, foods to avoid, a 7-day meal plan, and a low-potassium food chart.",
    price: 19.99,
    currency: "USD",
    cover: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    pdfFile: "kidney-food-guide.pdf",
    paypalProductId: "EBOOK-FOOD-003",
    benefits: [
      "Kidney-friendly foods & daily pantry staples",
      "Foods to avoid & hidden mineral sources",
      "7-day structured meal plan with practical ideas",
      "Low-potassium & low-sodium food chart reference"
    ],
    coverColor: "teal",
    badgeText: "RESOURCE 3",
    accentColor: "from-teal-950 via-emerald-900 to-emerald-950",
    pagesEstimate: "Practical Nutrition Plan",
    tableOfContents: [
      { chapter: "Chapter 1: Nutrition Fundamentals for Kidney Support", summary: "Balancing protein, sodium, potassium, and phosphorus safely." },
      { chapter: "Chapter 2: The Smart Grocery List & Pantry Swaps", summary: "Simple ingredient substitutions to protect your filtration system." },
      { chapter: "Chapter 3: The 7-Day Kidney-Friendly Meal Plan", summary: "Breakfast, lunch, dinner, and snack blueprints with easy preparation." },
      { chapter: "Chapter 4: Low-Potassium & Low-Sodium Reference Tables", summary: "Color-coded quick reference guide for eating out and dining at home." }
    ],
    keyHighlights: [
      "Complete 7-day ready-to-use kidney meal blueprint",
      "Visual low-potassium & low-sodium substitution tables",
      "Clear guidelines on portion sizing and seasoning alternatives"
    ]
  }
];

export const BONUS_RESOURCE: EbookResource = {
  id: "bonus-ckd-guide",
  title: "BONUS GUIDE — CKD GUIDE",
  tagline: "“Exclusive Companion Educational Guide”",
  description: "A practical educational guide designed to help readers better understand chronic kidney disease and protect their kidney health.",
  price: 14.99,
  currency: "USD",
  cover: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
  pdfFile: "bonus-ckd-guide.pdf",
  paypalProductId: "EBOOK-CKD-004",
  benefits: [
    "Deeper clarity on Chronic Kidney Disease stages 1 through 5",
    "Evidence-based lifestyle strategies to support kidney longevity",
    "Actionable steps to communicate effectively with your nephrology team",
    "Practical daily habits to reduce stress on kidney filtration"
  ],
  coverColor: "gold-dark",
  badgeText: "INCLUDED FREE WITH BUNDLE",
  accentColor: "from-amber-950 via-emerald-950 to-slate-950",
  pagesEstimate: "Exclusive Bonus Resource",
  tableOfContents: [
    { chapter: "Section 1: Chronic Kidney Disease Explained Simply", summary: "The anatomy, stages, and what each category means for daily life." },
    { chapter: "Section 2: Protective Daily Habits & Hydration", summary: "Optimizing hydration, limiting nephrotoxic exposure, and sleep quality." },
    { chapter: "Section 3: Long-term Kidney Wellness Roadmaps", summary: "Maintaining consistency, monitoring trends, and building support systems." }
  ],
  keyHighlights: [
    "Included at no extra charge inside the complete bundle",
    "Simplifies complex nephrology terminology into plain language",
    "Step-by-step lifestyle checklist for daily kidney protection"
  ]
};

export const COMPLETE_BUNDLE_PRODUCT = {
  id: "bundle-complete",
  title: "Kidney Health Essentials Complete Bundle",
  tagline: "All 3 Core Guides + Exclusive Bonus CKD Guide",
  description: "Instant access to all 3 core patient guides plus the exclusive bonus Chronic Kidney Disease guide.",
  price: 27.00,
  regularPrice: 97.00,
  currency: "USD",
  pdfFile: "kidney-health-essentials-bundle.pdf",
  paypalProductId: "BUNDLE-ESSENTIALS-005"
};

export const BENEFITS_LIST: BenefitItem[] = [
  {
    title: "Understand Your Kidney Health",
    description: "Demystify complex lab results, eGFR readings, and medical terminology with plain-language, easy-to-follow explanations.",
    iconName: "Activity"
  },
  {
    title: "Eat Smarter",
    description: "Take the guesswork out of meal planning with clear low-potassium, low-sodium food charts and kidney-friendly recipes.",
    iconName: "Salad"
  },
  {
    title: "Prepare for Transplant",
    description: "Feel equipped for every phase of the transplant process—from pre-surgery evaluation to lifelong post-transplant wellness.",
    iconName: "HeartPulse"
  },
  {
    title: "Understand CKD",
    description: "Gain crucial insights into chronic kidney disease stages so you can proactively partner with your medical care team.",
    iconName: "ShieldCheck"
  },
  {
    title: "Make Better Food Choices",
    description: "Learn which everyday foods protect kidney function and which common ingredients place unnecessary stress on filtration.",
    iconName: "CheckCircle2"
  },
  {
    title: "Have Practical Information in One Place",
    description: "Stop sifting through scattered, confusing internet searches. Get structured, trustworthy patient resources in one collection.",
    iconName: "BookOpen"
  }
];

export const AUDIENCE_LIST: AudienceItem[] = [
  {
    title: "People living with kidney disease",
    description: "Looking for clear, structured answers on how to protect remaining kidney function and manage day-to-day wellness."
  },
  {
    title: "Kidney patients",
    description: "Seeking accessible, reliable guides to better understand diagnosis, lab numbers, and medical options."
  },
  {
    title: "People preparing for or recovering from kidney transplant",
    description: "Wanting step-by-step guidance on what to expect before, during, and after transplant surgery."
  },
  {
    title: "Family members and caregivers",
    description: "Striving to support a loved one with kidney disease through thoughtful meal prep and informed caregiving."
  },
  {
    title: "People who want to understand kidney-friendly nutrition",
    description: "Looking for clear food charts, foods to avoid, and balanced meal plans without culinary frustration."
  },
  {
    title: "Anyone looking for accessible kidney-health education",
    description: "Wanting to proactively understand kidney biology, early warning signs, and lifelong kidney preservation."
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    question: "What is included in the bundle?",
    answer: "The Kidney Health Essentials Bundle includes all 3 core digital guides: 1) 'Kidney Transplant Journey', 2) 'Kidney Disease: The Illness You Don't Feel... Until You Do', and 3) 'Kidney Health Food Guide: What to Eat, What to Avoid & 7-Day Meal Plan', plus the exclusive 'BONUS GUIDE — CKD Guide'. All resources are delivered instantly upon purchase."
  },
  {
    question: "Are these digital ebooks?",
    answer: "Yes! All guides are digital ebooks (PDF format) designed for immediate download. You can read them conveniently on any device—smartphone, tablet, e-reader, Mac, or Windows computer—or print pages if you prefer physical reading."
  },
  {
    question: "How do I access the ebooks?",
    answer: "Immediately after your order is confirmed, you will be redirected to an instant download page and receive an email with direct download links. You have lifetime access and can re-download them whenever you need."
  },
  {
    question: "Who are these guides for?",
    answer: "These guides are crafted for kidney patients, people living with CKD, transplant candidates and recipients, family members, caregivers, and anyone who wants practical, plain-language education on kidney wellness and nutrition."
  },
  {
    question: "Is this medical advice?",
    answer: "No. These resources are for educational and informational purposes only. They are designed to empower you with clear knowledge and help you ask informed questions, but they are not intended to replace medical advice, diagnosis, or treatment from a qualified healthcare professional."
  },
  {
    question: "What topics are covered?",
    answer: "The bundle covers essential aspects of kidney health: understanding disease stages and lab markers (eGFR, creatinine), navigating every phase of kidney transplant, kidney-safe nutrition with 7-day meal plans and low-potassium charts, and chronic kidney disease management strategies."
  },
  {
    question: "Is the CKD guide included?",
    answer: "Yes! The BONUS GUIDE — CKD Guide is 100% included for free with your purchase of the Kidney Health Essentials Bundle today."
  }
];

export const HEALTHCARE_DISCLAIMER = "These resources are for educational and informational purposes only. They are not intended to replace medical advice, diagnosis, or treatment from a qualified healthcare professional.";
