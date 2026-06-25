'use client';

import React, { useState } from 'react';

export function FAQ({ locale = 'en' }: { locale?: 'en' | 'de' }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const content = locale === 'en' ? {
    eyebrow: "Common Questions",
    headline: "Everything you need to know before you start",
    items: [
      {
        q: "Does Fahrly work with the Amazon DSP portal?",
        a: "Yes. Fahrly connects directly to your Amazon DSP dashboard via API to import route data, delivery records, and driver performance metrics. You don't need to export any spreadsheets manually."
      },
      {
        q: "How long does setup take?",
        a: "Most operators are up and running within 10–15 minutes. You connect your data sources, enter your cost parameters (driver rates, fuel, lease), and Fahrly begins calculating profitability immediately."
      },
      {
        q: "Do I need to replace my current dispatch tools?",
        a: "No. Fahrly works alongside your existing tools. It aggregates data from Amazon DSP, your payroll system, and other sources into one operational view. You keep what works — Fahrly fills the visibility gaps."
      },
      {
        q: "What if I have multiple depots?",
        a: "Multi-depot support is included in the Enterprise plan. You can view performance by depot, compare route profitability across locations, and manage drivers and vehicles from a single dashboard."
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Every plan starts with a 14-day free trial. No credit card required. You can explore all Core and Operations features before committing to a paid plan."
      },
      {
        q: "Are there long-term contracts?",
        a: "No. Fahrly is billed month-to-month on the Core and Operations plans. You can cancel or change your plan at any time. The Enterprise plan is custom and discussed on a call."
      },
      {
        q: "How is profitability calculated?",
        a: "Fahrly takes your gross route revenue and subtracts driver labour costs (including overtime), fuel consumption, vehicle lease or depreciation, and any reported maintenance costs. What remains is your true profit per route and per driver."
      },
      {
        q: "Is my data secure?",
        a: "Yes. Fahrly is GDPR compliant and all data is encrypted in transit and at rest. Driver personal data is handled in accordance with German data protection law (BDSG) and EU GDPR."
      }
    ]
  } : {
    eyebrow: "Häufige Fragen",
    headline: "Alles, was Sie vor dem Start wissen müssen",
    items: [
      {
        q: "Funktioniert Fahrly mit dem Amazon DSP Portal?",
        a: "Ja. Fahrly verbindet sich per API direkt mit Ihrem Amazon DSP Dashboard, um Tourdaten, Lieferberichte und Fahrer-Performance zu importieren. Ein manueller Export ist nicht nötig."
      },
      {
        q: "Wie lange dauert die Einrichtung?",
        a: "Die meisten Betreiber sind in 10–15 Minuten startklar. Datenquellen verknüpfen, Kostenparameter eingeben, und Fahrly berechnet sofort die Profitabilität."
      },
      {
        q: "Muss ich meine aktuellen Dispatch-Tools ersetzen?",
        a: "Nein. Fahrly arbeitet ergänzend. Es bündelt Daten aus Amazon DSP, Ihrer Lohnabrechnung und anderen Quellen in einer Ansicht. Sie behalten, was funktioniert."
      },
      {
        q: "Was ist mit mehreren Depots?",
        a: "Multi-Depot-Unterstützung ist im Enterprise-Plan enthalten. Sie können die Performance nach Standort vergleichen und alle Depots in einem Dashboard verwalten."
      },
      {
        q: "Gibt es einen kostenlosen Testzeitraum?",
        a: "Ja. Jedes Paket startet mit einem 14-tägigen Testzeitraum. Keine Kreditkarte erforderlich. Testen Sie Core und Operations ohne Risiko."
      },
      {
        q: "Gibt es langfristige Verträge?",
        a: "Nein. Fahrly wird monatlich abgerechnet. Sie können jederzeit kündigen oder Ihr Paket anpassen. Der Enterprise-Plan ist individuell gestaltbar."
      },
      {
        q: "Wie wird die Profitabilität berechnet?",
        a: "Fahrly zieht vom Bruttoumsatz die Fahrerkosten (inkl. Überstunden), Kraftstoff, Fahrzeugleasing und Wartung ab. Übrig bleibt Ihr echter Gewinn pro Route."
      },
      {
        q: "Ist meine Datensicherheit gewährleistet?",
        a: "Ja. Fahrly ist DSGVO-konform. Alle Daten sind verschlüsselt. Fahrerdaten werden gemäß BDSG und EU-DSGVO sicher verarbeitet."
      }
    ]
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#0A0A0F] scroll-mt-20 lg:scroll-mt-[80px] transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content.headline}
          </h2>
        </div>

        <div className="space-y-4">
          {content.items.map((item, idx) => {
            const isOpen = activeIndex === idx;
            const itemId = `faq-answer-${idx}`;
            return (
              <div key={idx} className="border-b border-gray-100 dark:border-white/10">
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center py-6 text-left group focus-visible:ring-2 ring-blue-500 outline-none rounded"
                  aria-expanded={isOpen}
                  aria-controls={itemId}
                >
                  <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'}`}>
                    {item.q}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  id={itemId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-height-initial opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                  style={{ maxHeight: isOpen ? '500px' : '0' }}
                  role="region"
                >
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
