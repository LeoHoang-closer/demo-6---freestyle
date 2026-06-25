'use client';

import React from 'react';
import Link from 'next/link';

export function HowItWorks({ locale = 'en', onTrialClick }: { locale?: 'en' | 'de', onTrialClick?: () => void }) {
  const content = locale === 'en' ? {
    eyebrow: "Setup in under 10 minutes",
    headline: "Three steps from Excel chaos to operational clarity",
    steps: [
      {
        id: "01",
        title: "Connect your Amazon DSP data",
        body: "Link your Amazon DSP dashboard via API. Fahrly imports your routes, driver records, and delivery data automatically. No manual exports, no spreadsheet uploads.",
        icon: <PlugIcon />
      },
      {
        id: "02",
        title: "Set your cost parameters",
        body: "Enter driver hourly rates, fuel costs, lease rates, and overtime thresholds. Fahrly uses these to calculate true profitability per route and per driver — not just gross revenue.",
        icon: <SettingsIcon />
      },
      {
        id: "03",
        title: "See where money is being lost — today",
        body: "Within hours of connecting, you'll see your first profitability breakdown. Real overtime costs. Underperforming routes. At-risk drivers. All in one dashboard.",
        icon: <ChartIcon />
      }
    ],
    quote: {
      text: "Within the first week, I found out we were losing €620/month on one vehicle alone. That's money I never would have found in Excel.",
      author: "DSP Owner, Cologne (12 vans, 18 drivers)"
    },
    ctaPrefix: "Start your free trial — no contract required",
    ctaLabel: "Start Free Trial"
  } : {
    eyebrow: "Einrichtung in unter 10 Minuten",
    headline: "Drei Schritte vom Excel-Chaos zur operativen Klarheit",
    steps: [
      {
        id: "01",
        title: "Amazon DSP Daten verknüpfen",
        body: "Verbinden Sie Ihr Amazon DSP Dashboard per API. Fahrly importiert Ihre Routen, Fahrerdaten und Lieferdaten automatisch. Kein manueller Export, kein Excel-Upload.",
        icon: <PlugIcon />
      },
      {
        id: "02",
        title: "Kostenparameter festlegen",
        body: "Geben Sie Fahrer-Stundenlöhne, Kraftstoffkosten, Leasingraten und Überstunden-Grenzwerte ein. Fahrly berechnet daraus die echte Profitabilität pro Route.",
        icon: <SettingsIcon />
      },
      {
        id: "03",
        title: "Verluste identifizieren — heute noch",
        body: "Innerhalb weniger Stunden nach der Verknüpfung sehen Sie Ihre erste Profitabilitätsanalyse. Überstundenkosten. Defizitäre Routen. Alles in einem Dashboard.",
        icon: <ChartIcon />
      }
    ],
    quote: {
      text: "In der ersten Woche fand ich heraus, dass wir allein bei einem Fahrzeug 620 €/Monat verloren haben. Das hätte ich in Excel nie gefunden.",
      author: "DSP-Besitzer, Köln (12 Vans, 18 Fahrer)"
    },
    ctaPrefix: "Starten Sie Ihren kostenlosen Test – kein Vertrag erforderlich",
    ctaLabel: "Kostenlos testen"
  };

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-[#0D0D14] scroll-mt-20 lg:scroll-mt-[80px] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content.headline}
          </h2>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative">
          {/* Connector line (Desktop only) */}
          <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-px border-t border-dashed border-white/20 z-0" />

          {content.steps.map((step) => (
            <div key={step.id} className="relative z-10 space-y-6">
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 mb-8 mx-auto md:mx-0" aria-hidden="true">
                {step.icon}
              </div>
              
              {/* Number and Title */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-7xl font-black text-white/5 select-none pointer-events-none">
                  {step.id}
                </span>
                <h3 className="text-xl font-bold text-white relative z-10">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-24 max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-blue-500 bg-white/3 p-8 rounded-r-2xl">
            <p className="text-xl text-gray-300 italic mb-4 leading-relaxed">
              "{content.quote.text}"
            </p>
            <footer className="text-gray-500 text-sm font-medium">
              — {content.quote.author}
            </footer>
          </blockquote>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-6">
            {content.ctaPrefix}
          </p>
          <button 
            onClick={onTrialClick}
            className="inline-block px-10 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 active:scale-95 focus-visible:ring-2 ring-blue-500 outline-none"
            aria-label={content.ctaLabel}
          >
            {content.ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

function PlugIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
