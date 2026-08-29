import { Article } from '../types';

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    slug: 'understanding-potassium-rich-foods-and-kidney-health',
    title: 'Understanding Potassium-Rich Foods and Their Impact on Kidney Health',
    excerpt: 'Potassium is an essential mineral for cellular function, but when kidney filtration declines, precise management is crucial. Discover key food sources, smart substitutions, and preparation tips.',
    category: 'Nutrition',
    readTime: '6 min read',
    publishedAt: 'Aug 28, 2026',
    author: {
      name: 'Dr. Sarah Alami',
      role: 'Nephrology & Clinical Nutrition Specialist'
    },
    featuredImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    tags: ['Potassium', 'Renal Nutrition', 'CKD Diet', 'Healthy Eating'],
    content: {
      intro: 'When kidneys function normally, they easily filter out excess minerals like potassium. However, as filtration efficiency declines, high blood potassium levels (hyperkalemia) can develop and influence heart rhythm. This guide outlines practical dietary strategies to protect your kidneys without compromising nutrition.',
      sections: [
        {
          heading: '1. Why Potassium Balance Matters',
          body: [
            'Potassium is vital for muscle contraction, nerve impulse transmission, and fluid balance across cells.',
            'For individuals with optimal kidney function, a diet rich in potassium from fruits and vegetables is protective against hypertension. However, when glomerular filtration rate (eGFR) drops, the kidneys struggle to excrete surplus amounts.',
            'The key is learning how to balance portion sizes and select kidney-friendly alternatives based on your personal blood lab results.'
          ],
          keyTakeaways: [
            'Always have your serum potassium levels verified through routine blood work by your doctor.',
            'Avoid eliminating all fruits and vegetables without clinical guidance: focus on mindful substitutions.'
          ]
        },
        {
          heading: '2. High-Potassium Foods to Consume Mindfully',
          body: [
            'Certain foods contain naturally concentrated amounts of potassium: bananas, avocados, concentrated tomato products, dried fruits (dates, apricots, raisins), dark chocolate, and potatoes.',
            'Culinary tip for root vegetables: peeling, dicing, and soaking or boiling in generous amounts of water can leach out a significant percentage of soluble potassium.'
          ]
        },
        {
          heading: '3. Delicious, Kidney-Friendly Low-Potassium Alternatives',
          body: [
            'Excellent lower-potassium choices include apples, berries (blueberries, raspberries, strawberries), grapes, cucumbers, zucchini, and cauliflower.',
            'Seasoning makes all the difference: replace table salt and potassium chloride "diet salts" with fresh herbs, lemon juice, garlic, and gentle spices.'
          ]
        }
      ],
      conclusion: 'Adapting your diet does not mean sacrificing the joy of eating. With clear benchmarks and ongoing collaboration with your renal dietitian, you can sustainably nourish your body and safeguard your kidneys.'
    }
  },
  {
    id: 'art-2',
    slug: 'step-by-step-guide-to-kidney-transplant-journey',
    title: 'The Kidney Transplant Journey: From Pre-Evaluation to Long-Term Post-Transplant Life',
    excerpt: 'Receiving a kidney transplant is a transformative milestone. Explore the pre-transplant workup, waitlist preparation, and key factors for long-term graft survival.',
    category: 'Transplantation',
    readTime: '8 min read',
    publishedAt: 'Aug 24, 2026',
    author: {
      name: 'Dr. Marc Delacroix',
      role: 'Transplant Surgeon & Clinical Researcher'
    },
    featuredImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    tags: ['Kidney Transplant', 'Immunosuppressants', 'Patient Roadmap', 'Surgery'],
    content: {
      intro: 'A kidney transplant is considered the treatment of choice for many patients experiencing end-stage renal disease. Gaining a clear understanding of each milestone reduces anxiety and empowers you as an active partner in your care.',
      sections: [
        {
          heading: 'The Pre-Transplant Comprehensive Evaluation',
          body: [
            'This phase confirms the absence of cardiovascular risks, active infections, or surgical contraindications while mapping tissue compatibility (HLA typing and crossmatching).',
            'It is also the ideal window to explore living donor possibilities, which typically offer superior longevity and expedited scheduling.'
          ]
        },
        {
          heading: 'The Surgical Procedure and Hospital Stay',
          body: [
            'The procedure usually takes 2 to 4 hours. The donor kidney is typically placed in the lower abdomen (iliac fossa) while your native kidneys usually remain in place.',
            'Intensive post-operative monitoring ensures prompt kidney function onset and allows the clinical team to fine-tune anti-rejection medications.'
          ]
        },
        {
          heading: 'Everyday Care and Protecting Your New Kidney',
          body: [
            'Strict adherence to daily immunosuppressant schedules, consistent hydration (averaging 2+ liters of water daily as prescribed), and infection prevention routines guarantee long graft vitality.'
          ]
        }
      ],
      conclusion: 'A successful transplant provides a renewed lease on energy and quality of life, maintained through diligent daily medication habits and regular follow-ups with your transplant center.'
    }
  },
  {
    id: 'art-3',
    slug: '5-silent-warning-signs-of-kidney-dysfunction',
    title: '5 Subtle Warning Signs Your Kidneys May Be Struggling',
    excerpt: 'Kidney conditions are frequently called "silent illnesses" because early stages produce few overt symptoms. Here are 5 subtle signals you should never overlook.',
    category: 'Prevention',
    readTime: '5 min read',
    publishedAt: 'Aug 19, 2026',
    author: {
      name: 'Dr. Claire Laurent',
      role: 'Nephrologist & Public Health Consultant'
    },
    featuredImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80',
    tags: ['Early Signs', 'eGFR', 'Creatinine', 'Screening'],
    content: {
      intro: 'Because nephrons work tirelessly to compensate for cellular stress, kidney function can decline substantially before noticeable symptoms emerge. Recognizing subtle physiological shifts early enables timely clinical intervention.',
      sections: [
        {
          heading: '1. Changes in Urination Patterns and Foaminess',
          body: [
            'Increased frequency at night (nocturia), persistent foamy or bubbly urine, or unusual color changes warrant medical review.',
            'Persistent foam often indicates proteinuria (protein leaking through damaged renal filtration barriers).'
          ]
        },
        {
          heading: '2. Persistent Swelling in Ankles, Feet, or Eyelids',
          body: [
            'When kidneys are unable to effectively balance sodium and fluid levels, edema (fluid retention) often manifests around the lower extremities or as puffiness around the eyes upon waking.'
          ]
        },
        {
          heading: '3. Unexplained Fatigue and Brain Fog',
          body: [
            'A decline in erythropoietin (EPO) hormone production by the kidneys can trigger anemia, leaving individuals feeling constantly depleted of energy and mentally sluggish.'
          ]
        }
      ],
      conclusion: 'A routine blood test (checking serum creatinine and calculating eGFR) alongside a spot urine test (checking urine albumin-to-creatinine ratio) provides instant clarity during your next doctor visit.'
    }
  },
  {
    id: 'art-4',
    slug: 'how-to-read-and-understand-kidney-lab-results',
    title: 'How to Read Your Kidney Blood & Urine Tests: eGFR, Creatinine, and BUN',
    excerpt: 'Understanding key diagnostic laboratory markers empowers you to communicate confidently with your healthcare team and track your wellness trajectory.',
    category: 'Kidney Disease',
    readTime: '7 min read',
    publishedAt: 'Aug 12, 2026',
    author: {
      name: 'Dr. Sarah Alami',
      role: 'Nephrology & Clinical Nutrition Specialist'
    },
    featuredImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80',
    tags: ['Lab Tests', 'Creatinine', 'eGFR', 'Medical Literacy'],
    content: {
      intro: 'Receiving laboratory printouts filled with acronyms can feel overwhelming. However, focusing on a few core benchmarks provides clear insight into how effectively your kidneys filter waste.',
      sections: [
        {
          heading: 'Serum Creatinine & Estimated Glomerular Filtration Rate (eGFR)',
          body: [
            'Creatinine is a natural waste byproduct from muscle metabolism excreted exclusively by the kidneys. Higher blood levels typically reflect lower clearance.',
            'eGFR (calculated using standardized equations like CKD-EPI) estimates filtration efficiency in mL/min/1.73m². A value above 90 is considered normal in healthy young adults.'
          ]
        },
        {
          heading: 'Urine Albumin-to-Creatinine Ratio (uACR)',
          body: [
            'Measured from a morning urine sample, this test detects microscopic amounts of leaked albumin, serving as an ultra-early indicator of glomerular strain.'
          ]
        }
      ],
      conclusion: 'Never interpret single lab numbers in isolation. Your nephrologist always evaluates trends over time in conjunction with blood pressure, hydration, and overall clinical history.'
    }
  },
  {
    id: 'art-5',
    slug: 'hydration-and-kidneys-how-much-water-to-drink',
    title: 'Hydration & Kidney Health: How Much Water Do You Actually Need Daily?',
    excerpt: 'Is the standard "8 glasses a day" universal for everyone? Understand how fluid requirements change across different stages of kidney function and lifestyle factors.',
    category: 'Lifestyle',
    readTime: '4 min read',
    publishedAt: 'Aug 05, 2026',
    author: {
      name: 'Dr. Claire Laurent',
      role: 'Nephrologist & Public Health Consultant'
    },
    featuredImage: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1000&q=80',
    tags: ['Hydration', 'Water Intake', 'Kidney Stones', 'Daily Habits'],
    content: {
      intro: 'Water is the primary conduit that helps your kidneys flush metabolic toxins and prevent stone-forming crystals from precipitating. However, fluid guidelines differ significantly between early stages and advanced kidney care.',
      sections: [
        {
          heading: 'For Healthy Kidneys & Early Prevention',
          body: [
            '1.5 to 2.5 liters of fluid spread steadily across the day maintains adequate urine output and significantly lowers kidney stone risks.',
            'Choose plain filtered water, herbal teas, or lemon-infused water, while avoiding sugar-sweetened beverages and sodas containing phosphoric acid additives.'
          ]
        },
        {
          heading: 'In Advanced CKD or Dialysis Care',
          body: [
            'If fluid retention or congestive heart issues arise, your nephrologist may prescribe a specific daily fluid limit to prevent circulatory overload and pulmonary congestion.'
          ]
        }
      ],
      conclusion: 'Listen to your body, check your urine color (aiming for pale straw), and always follow individualized fluid limits established with your medical team.'
    }
  },
  {
    id: 'art-6',
    slug: 'reducing-sodium-without-sacrificing-flavor',
    title: 'Reducing Sodium Without Sacrificing Flavor: Kidney-Protecting Seasoning Secrets',
    excerpt: 'Excess dietary sodium raises blood pressure and accelerates glomerular stress. Learn practical culinary techniques to elevate meals using herbs, citrus, and spices.',
    category: 'Nutrition',
    readTime: '5 min read',
    publishedAt: 'Jul 28, 2026',
    author: {
      name: 'Dr. Sarah Alami',
      role: 'Nephrology & Clinical Nutrition Specialist'
    },
    featuredImage: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1000&q=80',
    tags: ['Low Sodium', 'Salt Alternatives', 'Cooking', 'Blood Pressure'],
    content: {
      intro: 'The World Health Organization recommends limiting daily sodium intake to under 2,000 mg (about one teaspoon of salt). Cutting excess sodium reduces strain on micro-vessels in your kidneys and boosts the efficacy of blood pressure treatments.',
      sections: [
        {
          heading: 'Where Hidden Sodium Lurks',
          body: [
            'Over 70% of dietary sodium comes from processed convenience foods: deli meats, aged cheeses, canned soups, frozen ready-meals, commercial breads, and bottled condiments.',
            'Cooking at home from whole, unprocessed ingredients is the easiest, most cost-effective way to control sodium intake.'
          ]
        },
        {
          heading: 'Flavor Enhancers That Protect Your Kidneys',
          body: [
            'Fresh and dried herbs: rosemary, thyme, oregano, basil, dill, and cilantro.',
            'Aromatic spices: garlic powder, onion powder, smoked paprika, turmeric, cumin, and cracked black pepper.',
            'Natural citrus acid: fresh lemon zest, lime juice, apple cider vinegar, and balsamic reduction.'
          ]
        }
      ],
      conclusion: 'Your taste buds adjust to lower salt levels within 2 to 3 weeks. Soon, you will discover the authentic, rich natural flavors of wholesome foods.'
    }
  }
];

export const CATEGORIES_LIST = [
  'All',
  'Nutrition',
  'Transplantation',
  'Prevention',
  'Kidney Disease',
  'Lifestyle'
] as const;
