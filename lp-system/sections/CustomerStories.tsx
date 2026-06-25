'use client';

import React from 'react';
import Link from 'next/link';

export function CustomerStories({ locale = 'en' }: { locale?: 'en' | 'de' }) {
  const isEn = locale === 'en';

  const content = isEn ? {
    eyebrow: "Our Customers Say",
    headline: "Real outcomes from real Amazon DSP operators",
    subheadline: "Learn how fleet owners are using Fahrly to reclaim their margins and scale operations without adding headcount.",
    stories: [
      {
        id: 1,
        category: "Case Study",
        title: "How one Berlin DSP reduced weekly overtime by 42% in 30 days",
        excerpt: "By using real-time route profitability markers, the dispatch team identified 4 'loss-leader' routes that were consistently exceeding 10 hours. Simple adjustments saved them €3,400 in the first month.",
        author: "Marco S., Geschäftsführer",
        tags: ["Overtime Control", "Efficiency"]
      },
      {
        id: 2,
        category: "Success Story",
        title: "From 12 to 50 vans: Scaling without the spreadsheet nightmare",
        excerpt: "Scaling used to mean hiring more dispatchers just to manage the data. With Fahrly, this London-based team tripled their fleet size while keeping their head office lean.",
        author: "James T., Operations Manager",
        tags: ["Scaling", "Automation"]
      },
      {
        id: 3,
        category: "Operational Insight",
        title: "The data behind 95% driver retention in a competitive market",
        excerpt: "High turnover is usually the result of unbalanced workloads. Discover how transparency into route difficulty helped this fleet keep their top performers happy and on the road.",
        author: "Anja K., Fleet Owner",
        tags: ["Retention", "Workload Balance"]
      }
    ],
    cta: "View all customer stories"
  } : {
    eyebrow: "Kundenberichte",
    headline: "Echte Ergebnisse von echten Amazon-DSP-Partnern",
    subheadline: "Erfahren Sie, wie Flottenbesitzer Fahrly nutzen, um ihre Margen zurückzugewinnen und Operationen ohne Personalaufbau zu skalieren.",
    stories: [
      {
        id: 1,
        category: "Fallstudie",
        title: "Wie ein Berliner DSP die wöchentlichen Überstunden in 30 Tagen um 42 % senkte",
        excerpt: "Durch Echtzeit-Profitabilitätsmarker identifizierte das Dispatch-Team 4 'Verlust-Routen', die regelmäßig 10 Stunden überschritten. Einfache Anpassungen sparten 3.400 € im ersten Monat.",
        author: "Marco S., Geschäftsführer",
        tags: ["Überstunden-Kontrolle", "Effizienz"]
      },
      {
        id: 2,
        category: "Erfolgsgeschichte",
        title: "Von 12 auf 50 Vans: Skalieren ohne den Excel-Albtraum",
        excerpt: "Skalierung bedeutete früher, mehr Dispatcher einzustellen, nur um die Daten zu verwalten. Mit Fahrly verdreifachte dieses Team seine Flotte bei gleichbleibender Teamgröße.",
        author: "James T., Operations Manager",
        tags: ["Skalierung", "Automatisierung"]
      },
      {
        id: 3,
        category: "Operativer Einblick",
        title: "Hinter den Kulissen: 95 % Fahrerbindung in einem harten Markt",
        excerpt: "Hohe Fluktuation ist oft das Ergebnis ungleicher Arbeitslast. Erfahren Sie, wie Transparenz bei der Routenschwierigkeit half, die Top-Performer zu halten.",
        author: "Anja K., Flottenbesitzerin",
        tags: ["Retention", "Arbeitslast-Balance"]
      }
    ],
    cta: "Alle Berichte ansehen"
  };

  return (
    <section id="stories" className="py-24 bg-white dark:bg-[#0A0A0F] scroll-mt-20 lg:scroll-mt-[80px] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">
            {content.eyebrow}
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white max-w-2xl leading-tight">
              {content.headline}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-sm mb-1">
              {content.subheadline}
            </p>
          </div>
        </div>

        {/* Blog/Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.stories.map((story) => (
            <article 
              key={story.id} 
              className="flex flex-col bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all group shadow-sm dark:shadow-none"
            >
              {/* Mock Image Area */}
              <div className="h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1),transparent)]" />
                <div className="w-16 h-1 bg-blue-500/50 rounded-full mb-4 group-hover:w-24 transition-all duration-500" />
                <span className="absolute top-6 left-6 text-[10px] font-bold text-blue-400 px-2 py-1 rounded-full border border-blue-400/20 bg-blue-400/5 uppercase tracking-widest">
                  {story.category}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-medium text-gray-500">#{tag}</span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {story.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 dark:text-gray-200">
                    {story.author}
                  </span>
                  <Link 
                    href={`/${locale}/stories/${story.id}`} 
                    className="text-blue-500 text-xs font-black uppercase tracking-widest flex items-center gap-2 group/link"
                  >
                    {isEn ? "Read more" : "Mehr lesen"}
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link 
            href={`/${locale}/stories`}
            className="inline-flex items-center gap-3 text-gray-900 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-8 py-4 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500/30"
          >
            {content.cta}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
