'use client';

import React from 'react';
import Link from 'next/link';

export function FinalCTA({ locale = 'en', onTrialClick }: { locale?: 'en' | 'de', onTrialClick?: () => void }) {
  const content = locale === 'en' ? {
    headline: "Stop managing your fleet. Start understanding it.",
    subheadline: "Join 500+ fleet operators who now see their overtime costs, route profitability, and driver performance in real time — without spreadsheets.",
    primaryCta: "Start Free Trial — Free for 14 days",
    secondaryCta: "Book a Demo",
    finePrint: "No credit card required. No contract. Cancel any time.",
    trust: [
      { icon: "🔒", text: "GDPR Compliant" },
      { icon: "⚡", text: "Setup in under 15 minutes" },
      { icon: "📞", text: "Support in English & German" }
    ]
  } : {
    headline: "Hören Sie auf zu verwalten. Fangen Sie an zu verstehen.",
    subheadline: "Schließen Sie sich 500+ Betreibern an, die ihre Überstundenkosten, Routenprofitabilität und Fahrer-Performance in Echtzeit sehen – ohne Excel.",
    primaryCta: "Kostenlos testen — 14 Tage gratis",
    secondaryCta: "Demo buchen",
    finePrint: "Keine Kreditkarte erforderlich. Kein Vertrag. Jederzeit kündbar.",
    trust: [
      { icon: "🔒", text: "DSGVO-konform" },
      { icon: "⚡", text: "Einrichtung in unter 15 Min." },
      { icon: "📞", text: "Support auf Deutsch & Englisch" }
    ]
  };

  return (
    <section id="cta" className="relative py-24 bg-white dark:bg-gradient-to-b dark:from-[#0D0D14] dark:to-[#0A0A0F] overflow-hidden transition-colors">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
          {content.headline}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          {content.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button 
            onClick={onTrialClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 active:scale-95 focus-visible:ring-2 ring-blue-500 outline-none"
            aria-label={content.primaryCta}
          >
            {content.primaryCta}
          </button>
          <Link 
            href="https://wa.me/491718411868"
            className="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-white/10 transition-all text-center focus-visible:ring-2 ring-blue-500 outline-none"
            aria-label={content.secondaryCta}
          >
            {content.secondaryCta}
          </Link>
        </div>

        <p className="text-gray-500 text-sm mb-12">
          {content.finePrint}
        </p>

        {/* Trust Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-10 border-t border-gray-100 dark:border-white/5">
          {content.trust.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
