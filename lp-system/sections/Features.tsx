'use client';

import React from 'react';

type FeatureRowProps = {
  title: string;
  body: string;
  isReversed?: boolean;
  bgClass: string;
  mockup: React.ReactNode;
};

function FeatureRow({ title, body, isReversed, bgClass, mockup }: FeatureRowProps) {
  return (
    <div className={`py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-6">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {body}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl relative group">
               <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               {mockup}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Features({ locale = 'en' }: { locale?: 'en' | 'de' }) {
  const content = locale === 'en' ? {
    eyebrow: "Fleet Management Software Built for DSPs",
    headline: "See what's costing you money. Fix it before it compounds.",
    subheadline: "Fahrly gives dispatchers, operations managers, and fleet owners a single view of every route, driver, and vehicle — updated in real time.",
    features: [
      {
        title: "Route Profitability — by driver, by day",
        body: "Stop guessing which routes make money. Fahrly calculates profit per route after factoring in driver hours, overtime, fuel, and vehicle costs. See your top 5 and bottom 5 routes at a glance using our Route Planning Software.",
      },
      {
        title: "Overtime Forecasting — before the shift ends",
        body: "Know which drivers will go over their contracted hours before they do. Fahrly Dispatch Software alerts you mid-route so dispatchers can intervene: reassign stops, send support, or adjust tomorrow's plan.",
      },
      {
        title: "Driver Performance — retention starts with data",
        body: "Track earnings per hour, on-time completion rate, and overtime frequency per driver. Driver Management Software helps you spot your top performers before they leave — and your at-risk drivers before they become a problem.",
      },
      {
        title: "Fleet Utilization — stop paying for idle vans",
        body: "See which vehicles are being underutilized, which need maintenance, and which are generating the most profit per kilometre. Make asset allocation decisions with actual Fleet Management Software data.",
      }
    ]
  } : {
    eyebrow: "Flottenmanagement-Software für DSPs",
    headline: "Sehen Sie, was Sie Geld kostet. Beheben Sie es sofort.",
    subheadline: "Fahrly bietet Dispatchern, Betriebsleitern und Flottenbesitzern eine zentrale Ansicht aller Routen, Fahrer und Fahrzeuge – in Echtzeit aktualisiert.",
    features: [
      {
        title: "Tourenplanung Software & Profitabilität",
        body: "Hören Sie auf zu raten, welche Routen Gewinn bringen. Fahrly berechnet den Gewinn pro Route unter Berücksichtigung von Fahrerfluktuation, Überstunden, Kraftstoff und Fahrzeugkosten. Sehen Sie Ihre Top- und Flop-Routen auf einen Blick.",
      },
      {
        title: "Überstunden-Prognose — vor Schichtende",
        body: "Wissen Sie, welche Fahrer ihre vertraglichen Stunden überschreiten, bevor es passiert. Fahrly alarmiert Sie mitten in der Route, damit Dispatcher eingreifen können: Stopps neu zuweisen oder den Plan anpassen.",
      },
      {
        title: "Integrierte Fahrerverwaltung Software",
        body: "Verfolgen Sie Verdienst pro Stunde, Pünktlichkeit und Überstundenhäufigkeit pro Fahrer. Erkennen Sie Top-Performer, bevor sie gehen – und Risikofahrer, bevor sie zum Problem werden.",
      },
      {
        title: "Flottenauslastung — keine Kosten für stillstehende Vans",
        body: "Sehen Sie, welche Fahrzeuge unterausgelastet sind, welche Wartung benötigen und welche den meisten Gewinn pro Kilometer erzielen. Treffen Sie Entscheidungen auf Basis echter Daten.",
      }
    ]
  };

  return (
    <section id="features" className="scroll-mt-20 lg:scroll-mt-[80px]">
      <div className="bg-white dark:bg-[#0A0A0F] pt-24 pb-12 text-center transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">
            {content.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content.headline}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {content.subheadline}
          </p>
        </div>
      </div>

      <FeatureRow 
        title={content.features[0].title}
        body={content.features[0].body}
        bgClass="bg-gray-50 dark:bg-[#0D0D14]"
        mockup={<RouteProfitabilityMockup locale={locale} />}
      />

      <FeatureRow 
        title={content.features[1].title}
        body={content.features[1].body}
        isReversed
        bgClass="bg-white dark:bg-[#0A0A0F]"
        mockup={<OvertimeForecastingMockup locale={locale} />}
      />

      <FeatureRow 
        title={content.features[2].title}
        body={content.features[2].body}
        bgClass="bg-gray-50 dark:bg-[#0D0D14]"
        mockup={<DriverPerformanceMockup locale={locale} />}
      />

      <FeatureRow 
        title={content.features[3].title}
        body={content.features[3].body}
        isReversed
        bgClass="bg-white dark:bg-[#0A0A0F]"
        mockup={<FleetUtilizationMockup locale={locale} />}
      />
    </section>
  );
}

function RouteProfitabilityMockup({ locale }: { locale: string }) {
  void locale; // Reserved for localization
  const rows = [
    { id: "RT-041", driver: "J. Müller", rev: "€284", ot: "€0", profit: "€284", status: "green" },
    { id: "RT-038", driver: "K. Ahmed", rev: "€241", ot: "€47", profit: "€194", status: "green" },
    { id: "RT-052", driver: "P. Santos", rev: "€198", ot: "€89", profit: "€109", status: "amber" },
    { id: "RT-029", driver: "D. Okafor", rev: "€176", ot: "€193", profit: "-€17", status: "red" },
  ];

  return (
    <div className="p-6 font-mono">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="text-gray-500 border-b border-gray-100 dark:border-white/5 uppercase tracking-tighter">
            <th className="pb-3 px-2">ID</th>
            <th className="pb-3 px-2">Driver</th>
            <th className="pb-3 px-2">Rev</th>
            <th className="pb-3 px-2">OT</th>
            <th className="pb-3 px-2 text-right">Net</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-300">
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-50 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              <td className="py-3 px-2 font-bold text-blue-400">{row.id}</td>
              <td className="py-3 px-2">{row.driver}</td>
              <td className="py-3 px-2">{row.rev}</td>
              <td className="py-3 px-2 text-red-500/70">{row.ot}</td>
              <td className={`py-3 px-2 text-right font-bold ${
                row.status === 'green' ? 'text-green-400' : 
                row.status === 'amber' ? 'text-amber-400' : 'text-red-400'
              }`}>
                {row.profit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OvertimeForecastingMockup({ locale }: { locale: string }) {
  const isEn = locale === 'en';
  const alerts = [
    { name: "D. Okafor", status: "red", time: "+2h 14min", label: isEn ? "overtime today" : "Überstunden heute" },
    { name: "M. Yildiz", status: "amber", time: "+47min", label: isEn ? "projected, borderline" : "prognostiziert, grenzwertig" },
    { name: "J. Müller", status: "green", time: "on track", label: isEn ? "finishing at 16:40" : "Ende um 16:40" },
  ];

  return (
    <div className="p-8 space-y-6">
      {alerts.map((alert, idx) => (
        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full animate-pulse ${
              alert.status === 'red' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 
              alert.status === 'amber' ? 'bg-amber-500' : 'bg-green-500'
            }`} />
            <span className="font-bold text-gray-900 dark:text-gray-200">{alert.name}</span>
          </div>
          <div className="text-right">
            <p className={`text-sm font-bold ${
              alert.status === 'red' ? 'text-red-400' : 
              alert.status === 'amber' ? 'text-amber-400' : 'text-green-400'
            }`}>{alert.time}</p>
            <p className="text-[10px] text-gray-500 uppercase">{alert.label}</p>
          </div>
        </div>
      ))}
      <p className="text-center text-[10px] text-gray-600 font-bold tracking-widest uppercase">
        {isEn ? "Updated every 15 minutes" : "Alle 15 Minuten aktualisiert"}
      </p>
    </div>
  );
}

function DriverPerformanceMockup({ locale }: { locale: string }) {
  const isEn = locale === 'en';
  const drivers = [
    { name: "J. Müller", rate: "€32.40", routes: "14", badge: "Top Performer", color: "green" },
    { name: "K. Ahmed", rate: "€28.10", routes: "12", badge: null, color: "gray" },
    { name: "D. Okafor", rate: "€16.80", routes: "9", badge: "At Risk", color: "red" },
  ];

  return (
    <div className="p-8 space-y-4">
      {drivers.map((d, idx) => (
        <div key={idx} className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold border border-blue-500/20">
              {d.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">{d.name}</p>
              <p className="text-[10px] text-gray-500">{d.rate}/hr • {d.routes} {isEn ? "routes" : "Routen"}</p>
            </div>
          </div>
          {d.badge && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
              d.color === 'green' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
            }`}>
              {d.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function FleetUtilizationMockup({ locale }: { locale: string }) {
  void locale; // Reserved for localization
  const vehicles = [
    { plate: "BN-AB 1042", val: 89, color: "bg-green-500" },
    { plate: "BN-XY 8814", val: 74, color: "bg-green-500" },
    { plate: "K-SW 2209", val: 51, color: "bg-amber-500" },
    { plate: "BN-LK 5531", val: 28, color: "bg-red-500" },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-4">
        {vehicles.map((v, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
              <span className="text-gray-400">{v.plate}</span>
              <span className="text-white">{v.val}%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${v.color}`}
                style={{ width: `${v.val}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[8px] text-gray-600 font-bold uppercase">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
