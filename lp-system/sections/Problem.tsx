'use client';

import React from 'react';

export function Problem({ locale = 'en' }: { locale?: 'en' | 'de' }) {
  const content = locale === 'en' ? {
    eyebrow: "The Real Cost of Running Blind",
    title: "Most DSP owners don&apos;t know how much overtime is costing them. Until it&apos;s too late.",
    subtitle: "Excel and WhatsApp weren&apos;t built for 50-driver fleets. Every hour without visibility is an hour of avoidable loss.",
    cards: [
      {
        icon: <ClockIcon />,
        title: "Overtime is eating your margins",
        body: "Your drivers are consistently finishing 45–90 minutes late. You don&apos;t see it until payroll — by then, the damage is done.",
        stat: "Avg €8,400/month in hidden overtime costs"
      },
      {
        icon: <RouteIcon />,
        title: "Route workloads are guesswork",
        body: "Some drivers finish at 3pm. Others are still out at 7pm. Without route balance data, you&apos;re relying on tribal knowledge and luck.",
        stat: "31% of routes are imbalanced on any given day"
      },
      {
        icon: <PersonIcon />,
        title: "Your best drivers keep leaving",
        body: "Driver turnover costs €3,000–€6,000 per replacement in recruitment and training. Most DSPs have no visibility into which drivers are at risk.",
        stat: "DSP average driver turnover: 74% annually"
      }
    ],
    bottom: "There is a better way to run your fleet.",
    cta: "See How Fahrly Works ↓"
  } : {
    eyebrow: "Die wahren Kosten von unübersichtlichen Operationen",
    title: "Die meisten DSP-Besitzer wissen nicht, wie viel Überstunden sie kosten. Bis es zu spät ist.",
    subtitle: "Excel und WhatsApp wurden nicht für 50-Fahrer-Flotten gebaut. Jede Stunde ohne Sichtbarkeit ist eine Stunde vermeidbarer Verlust.",
    cards: [
      {
        icon: <ClockIcon />,
        title: "Überstunden fressen Ihre Margen auf",
        body: "Ihre Fahrer kommen regelmäßig 45–90 Minuten zu spät. Sie sehen es erst bei der Lohnabrechnung – dann ist der Schaden bereits angerichtet.",
        stat: "Durchschn. 8.400 €/Monat versteckte Überstundenkosten"
      },
      {
        icon: <RouteIcon />,
        title: "Routen-Arbeitslast ist reine Schätzung",
        body: "Einige Fahrer sind um 15 Uhr fertig. Andere sind noch um 19 Uhr unterwegs. Ohne Daten zur Routenbalance verlassen Sie sich auf Glück.",
        stat: "31 % der Routen sind an jedem Tag unausgewogen"
      },
      {
        icon: <PersonIcon />,
        title: "Ihre besten Fahrer kündigen",
        body: "Fahrerfluktuation kostet 3.000–6.000 € pro Ersatz. Die meisten DSPs haben keinen Überblick darüber, welche Fahrer gefährdet sind.",
        stat: "Durchschnittliche DSP-Fahrerfluktuation: 74 % jährlich"
      }
    ],
    bottom: "Es gibt einen besseren Weg, Ihre Flotte zu führen.",
    cta: "Wie Fahrly funktioniert ↓"
  };

  return (
    <section id="problem" className="py-24 bg-gray-50 dark:bg-[#0D0D14] relative scroll-mt-20 lg:scroll-mt-[80px] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 transition-all duration-700">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4 block">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 max-w-4xl mx-auto leading-tight">
            {content.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {content.cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-all group shadow-sm dark:shadow-none"
            >
              <div className="mb-6 text-amber-500 group-hover:scale-110 transition-transform" aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                {card.body}
              </p>
              <div className="pt-6 border-t border-gray-100 dark:border-white/5">
                <p className="text-amber-500 font-bold text-sm tracking-tight">
                  {card.stat}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-900 dark:text-white font-medium mb-6">{content.bottom}</p>
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-amber-500 font-bold hover:text-amber-400 transition-colors inline-flex items-center gap-2 group focus-visible:ring-2 ring-amber-500 outline-none rounded"
            aria-label={locale === 'en' ? "Learn how it works" : "Erfahren Sie, wie es funktioniert"}
          >
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  );
}
