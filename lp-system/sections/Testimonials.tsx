'use client';

import React from 'react';
import Link from 'next/link';

export function Testimonials({ locale = 'en' }: { locale?: 'en' | 'de' }) {
  const content = locale === 'en' ? {
    eyebrow: "Trusted by 500+ Fleet Operators",
    headline: "What DSP owners say after the first month",
    testimonials: [
      {
        company: "MK25 GmbH",
        role: "Geschäftsführer",
        quote: "We were managing 18 drivers on WhatsApp and three Excel sheets. The first week with Fahrly, we found €150/day in avoidable coordination costs. That's now back in our margin.",
        metrics: ["150€ saved per day", "3 hours saved in daily dispatch"],
        modules: ["Fahrly Go"]
      },
      {
        company: "AC Empire GmbH",
        name: "Alper Coskun",
        role: "Geschäftsführer",
        quote: "Payroll used to take two hours every week. Every calculation was manual, every error was an argument with a driver. Now it's automated. Drivers trust the numbers. I trust the numbers.",
        metrics: ["2 hours saved per week on payroll", "€2,000+ saved annually"],
        modules: ["Fahrly Go", "Human Resource"]
      },
      {
        company: "Atash GmbH",
        role: "Fleet Manager",
        quote: "We had three vehicles go into unexpected repair in one quarter. Since using Fahrly's maintenance alerts, we've had zero unplanned workshop visits. That alone paid for the software five times over.",
        metrics: ["30% fewer unplanned repairs", "€500+ saved per month"],
        modules: ["Fahrly Go", "Fleet Management", "Compliance"]
      }
    ],
    google: {
      text: "5.0 / 5.0 on Google Reviews",
      link: "Read all reviews →",
      url: "https://share.google/jnQQp0UIEti8scgY7"
    },
    logoStrip: {
      heading: "Fleet operators who trust Fahrly",
      companies: ["AC Transfer GmbH", "MK28 GmbH", "YourCar GmbH", "RheinTransfers GmbH", "9PM GmbH"]
    }
  } : {
    eyebrow: "Vertraut von 500+ Flottenbetreibern",
    headline: "Was DSP-Besitzer nach dem ersten Monat sagen",
    testimonials: [
      {
        company: "MK25 GmbH",
        role: "Geschäftsführer",
        quote: "Wir haben 18 Fahrer über WhatsApp und drei Excel-Tabellen verwaltet. In der ersten Woche mit Fahrly haben wir 150 €/Tag an vermeidbaren Koordinationskosten gefunden.",
        metrics: ["150 € Ersparnis pro Tag", "3 Std. Zeitersparnis im Dispatch"],
        modules: ["Fahrly Go"]
      },
      {
        company: "AC Empire GmbH",
        name: "Alper Coskun",
        role: "Geschäftsführer",
        quote: "Die Lohnabrechnung dauerte früher jede Woche zwei Stunden. Jede Berechnung war manuell, jeder Fehler ein Streit mit einem Fahrer. Jetzt ist es automatisiert.",
        metrics: ["2 Std. Zeitersparnis/Woche", "2.000 €+ jährliche Ersparnis"],
        modules: ["Fahrly Go", "Human Resource"]
      },
      {
        company: "Atash GmbH",
        role: "Fleet Manager",
        quote: "In einem Quartal mussten drei Fahrzeuge unerwartet in die Werkstatt. Seit wir Fahrly nutzen, hatten wir null ungeplante Werkstattbesuche.",
        metrics: ["30 % weniger Reparaturen", "500 €+ Ersparnis pro Monat"],
        modules: ["Fahrly Go", "Fleet Management", "Compliance"]
      }
    ],
    google: {
      text: "5.0 / 5.0 bei Google Rezensionen",
      link: "Alle Bewertungen lesen →",
      url: "https://share.google/jnQQp0UIEti8scgY7"
    },
    logoStrip: {
      heading: "Flottenbetreiber, die Fahrly vertrauen",
      companies: ["AC Transfer GmbH", "MK28 GmbH", "YourCar GmbH", "RheinTransfers GmbH", "9PM GmbH"]
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#0A0A0F] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            {content.headline}
          </h2>
          
          {/* Google Badge */}
          <Link 
            href={content.google.url}
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-yellow-500/30 bg-yellow-400/5 hover:bg-yellow-400/10 transition-colors group"
          >
            <span className="text-yellow-600 dark:text-yellow-400 font-bold tracking-tighter">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">{content.google.text}</span>
            <span className="text-yellow-600 dark:text-yellow-400 text-sm font-bold group-hover:translate-x-1 transition-transform">{content.google.link}</span>
          </Link>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {content.testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 dark:bg-[#111827] border border-gray-100 dark:border-white/10 rounded-2xl p-8 flex flex-col h-full hover:border-blue-500/30 transition-all group shadow-sm dark:shadow-none"
            >
              <blockquote className="flex-grow mb-8">
                <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed">
                  "{t.quote}"
                </p>
              </blockquote>
              
              <div className="space-y-6">
                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {t.metrics.map((m, i) => (
                    <span key={i} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-3 py-1 text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1.5 font-medium">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      {m}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-white/5 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    {t.company.charAt(0)}
                  </div>
                  <div>
                    {t.name && <p className="text-gray-900 dark:text-white font-bold">{t.name}</p>}
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">{t.company}</p>
                    <p className="text-gray-600 dark:text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Modules */}
                <div className="pt-6 border-t border-gray-100 dark:border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-2">Modules</p>
                  <div className="flex flex-wrap gap-2">
                    {t.modules.map((mod, i) => (
                      <span key={i} className="text-[10px] font-bold text-blue-500/80 bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="pt-20 border-t border-gray-100 dark:border-white/5 text-center">
          <p className="text-gray-400 dark:text-gray-600 text-sm font-bold uppercase tracking-[0.2em] mb-12">
            {content.logoStrip.heading}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-4 opacity-70 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {content.logoStrip.companies.map((name, i) => (
              <span key={i} className="text-gray-900 dark:text-white font-bold text-xl tracking-tighter whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
