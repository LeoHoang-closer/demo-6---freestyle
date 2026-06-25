'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function Pricing({ locale = 'en', onTrialClick }: { locale?: 'en' | 'de', onTrialClick?: () => void }) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const content = locale === 'en' ? {
    eyebrow: "Simple Pricing",
    headline: "Start seeing your fleet's profitability for €50/month",
    subheadline: "No contracts. No setup fees. Cancel any time. Upgrade as you grow.",
    monthly: "Monthly",
    annual: "Annual",
    save: "save 20%",
    plans: [
      {
        id: "core",
        name: "Core",
        tagline: "See what comes in",
        for: "1–2 depot operators starting with visibility",
        price: billingCycle === 'annual' ? "40" : "50",
        features: [
          { label: "All trip data in one dashboard", included: true },
          { label: "Driver performance analytics", included: true },
          { label: "Route summary reporting", included: true },
          { label: "Email support (24h response)", included: true },
          { label: "Overtime forecasting", included: false },
          { label: "Payroll calculator", included: false },
          { label: "Fleet cost tracking", included: false },
        ],
        cta: "Start Free Trial",
        link: "https://qpp.fahrlygo.de/account/register",
        popular: false
      },
      {
        id: "operations",
        name: "Operations",
        tagline: "See what comes in and what goes out",
        for: "Growing DSPs who need cost control",
        price: billingCycle === 'annual' ? "80" : "100",
        features: [
          { label: "Everything in Core", included: true },
          { label: "Overtime forecasting & alerts", included: true },
          { label: "Payroll calculator with e-signatures", included: true },
          { label: "Time tracking per driver", included: true },
          { label: "Route profitability breakdown", included: true },
          { label: "Priority support", included: true },
          { label: "Fleet management", included: false },
          { label: "Compliance tools", included: false },
        ],
        cta: "Start Free Trial",
        link: "https://qpp.fahrlygo.de/account/register",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        tagline: "See exactly where money is being lost",
        for: "Multi-depot operators needing full visibility",
        price: "Custom",
        description: "Scale without hiring more managers.",
        features: [
          { label: "Everything in Operations", included: true },
          { label: "Fleet management & utilization", included: true },
          { label: "Compliance & licence checks", included: true },
          { label: "Multi-depot support", included: true },
          { label: "API integrations", included: true },
          { label: "Dedicated account manager", included: true },
        ],
        cta: "Book a Call",
        link: "https://wa.me/491718411868",
        popular: false
      }
    ],
    foot: "All plans include a 14-day free trial. No credit card required."
  } : {
    eyebrow: "Einfache Preisgestaltung",
    headline: "Überwachen Sie Ihre Flottenprofitabilität ab 50 €/Monat",
    subheadline: "Keine Verträge. Keine Einrichtungsgebühr. Jederzeit kündbar.",
    monthly: "Monatlich",
    annual: "Jährlich",
    save: "20 % sparen",
    plans: [
      {
        id: "core",
        name: "Core",
        tagline: "Sehen Sie, was reinkommt",
        for: "1–2 Depot-Betreiber, die Sichtbarkeit suchen",
        price: billingCycle === 'annual' ? "40" : "50",
        features: [
          { label: "Alle Tourdaten in einem Dashboard", included: true },
          { label: "Fahrer-Performance-Analyse", included: true },
          { label: "Routen-Zusammenfassungen", included: true },
          { label: "Email-Support (24h Reaktion)", included: true },
          { label: "Überstunden-Prognose", included: false },
          { label: "Lohnabrechnungs-Rechner", included: false },
          { label: "Fuhrpark-Kosten-Tracking", included: false },
        ],
        cta: "Kostenlos testen",
        link: "https://qpp.fahrlygo.de/account/register",
        popular: false
      },
      {
        id: "operations",
        name: "Operations",
        tagline: "Sehen Sie, was reinkommt und was rausgeht",
        for: "Wachsende DSPs mit Bedarf an Kostenkontrolle",
        price: billingCycle === 'annual' ? "80" : "100",
        features: [
          { label: "Alles aus Core", included: true },
          { label: "Überstunden-Prognose & Alarme", included: true },
          { label: "Lohnabrechnung mit E-Signatur", included: true },
          { label: "Zeiterfassung pro Fahrer", included: true },
          { label: "Detaillierte Routenprofitabilität", included: true },
          { label: "Priorisierter Support", included: true },
          { label: "Fuhrparkmanagement", included: false },
          { label: "Compliance-Tools", included: false },
        ],
        cta: "Kostenlos testen",
        link: "https://qpp.fahrlygo.de/account/register",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        tagline: "Erkennen Sie exakt, wo Geld verloren geht",
        for: "Mehrdepot-Betreiber mit vollem Fokus",
        price: "Individuell",
        description: "Skalieren, ohne mehr Manager einzustellen.",
        features: [
          { label: "Alles aus Operations", included: true },
          { label: "Flottenauslastung & Fuhrpark", included: true },
          { label: "Compliance & Lizenz-Checks", included: true },
          { label: "Multidepot-Unterstützung", included: true },
          { label: "API-Integrationen", included: true },
          { label: "Persönlicher Account Manager", included: true },
        ],
        cta: "Beratung buchen",
        link: "https://wa.me/491718411868",
        popular: false
      }
    ],
    foot: "Alle Pakete beinhalten einen 14-tägigen Testzeitraum. Keine Kreditkarte erforderlich."
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-[#0D0D14] scroll-mt-20 lg:scroll-mt-[80px] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content.headline}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            {content.subheadline}
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 font-normal'}`}>
              {content.monthly}
            </span>
            <button 
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-white/10 p-1 transition-colors hover:bg-gray-300 dark:hover:bg-white/20 focus-visible:ring-2 ring-blue-500 outline-none"
              aria-label={locale === 'en' ? "Toggle billing cycle" : "Abrechnungszeitraum umschalten"}
            >
              <div className={`w-5 h-5 rounded-full bg-blue-600 transition-transform ${billingCycle === 'annual' ? 'translate-x-[1.75rem]' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-gray-900 dark:text-white' : 'text-gray-500 font-normal'}`}>
                {content.annual}
              </span>
              <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight">
                {content.save}
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {content.plans.map((plan) => (
            <div 
              key={plan.id}
              className={`flex flex-col h-full bg-white dark:bg-[#111827] rounded-3xl p-8 border transition-all ${
                plan.popular 
                  ? 'border-blue-500 hover:border-blue-400 ring-1 ring-blue-500/30 shadow-2xl shadow-blue-500/10 lg:scale-110 z-10' 
                  : 'border-gray-200 dark:border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="flex justify-end mb-2">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {locale === 'en' ? "Most Popular" : "Am beliebtesten"}
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 font-bold mb-6 italic uppercase tracking-wider">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  {typeof plan.price === 'string' && isNaN(Number(plan.price)) ? (
                    <span className="text-4xl font-black text-gray-900 dark:text-white">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-sm font-bold text-gray-400">€</span>
                      <span className="text-5xl font-black text-gray-900 dark:text-white tracking-tight">{plan.price}</span>
                      <span className="text-gray-500 text-sm font-medium ml-1">/month</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{plan.for}</p>
                <div className="pt-6 space-y-4 border-t border-gray-100 dark:border-white/5">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex gap-3">
                      <span className={`text-sm mt-0.5 ${feat.included ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-gray-400 dark:text-gray-600 font-normal'}`}>
                        {feat.included ? '✓' : '✗'}
                      </span>
                      <span className={`text-[13px] leading-tight ${feat.included ? 'text-gray-600 dark:text-gray-200' : 'text-gray-400 dark:text-gray-600'}`}>
                        {feat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {plan.id === 'enterprise' ? (
                <Link 
                  href={plan.link}
                  className="w-full py-4 text-center rounded-xl font-bold transition-all active:scale-95 focus-visible:ring-2 ring-blue-500 outline-none bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10"
                  aria-label={plan.cta + " for " + plan.name + " plan"}
                >
                  {plan.cta}
                </Link>
              ) : (
                <button 
                  onClick={onTrialClick}
                  className={`w-full py-4 text-center rounded-xl font-bold transition-all active:scale-95 focus-visible:ring-2 ring-blue-500 outline-none ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30' 
                      : 'bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
                  }`}
                  aria-label={plan.cta + " for " + plan.name + " plan"}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            {content.foot}
          </p>
        </div>
      </div>
    </section>
  );
}
