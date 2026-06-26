'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export type HeroProps = {
  locale?: 'en' | 'de';
  onTrialClick?: () => void;
};

const COPY = {
  en: {
    eyebrow: "Dispatch Software for Amazon DSPs",
    title: "You're running more routes. Making less profit. Here's why.",
    subtitle: "Fahrly shows you exactly where overtime, driver turnover, and unbalanced routes are costing you money — in real time, without spreadsheets. Fleet Management Software built for delivery operations.",
    primaryCta: "Start Free Trial",
    secondaryCta: "See How It Works",
    socialProof: "Trusted by 500+ fleet operators across Germany",
    dashboard: {
      title: "Today's Fleet Performance",
      metric1: { label: "Overtime Hours", value: "47h", badge: "↑ 23% vs last week", type: "red" },
      metric2: { label: "Routes Completed", value: "83/91", badge: "91%", type: "amber" },
      metric3: { label: "Profit per Route", value: "€12.40", badge: "↓ €3.20 lost to overtime", type: "green" },
    }
  },
  de: {
    eyebrow: "Dispositionssoftware für Amazon DSPs",
    title: "Mehr Routen. Weniger Profit. Wir zeigen Ihnen warum.",
    subtitle: "Fahrly zeigt Ihnen in Echtzeit, wo Überstunden, Fahrerfluktuation und unausgewogene Routen Geld kosten – ganz ohne Excel. Flottenmanagement-Software für moderne Lieferbetriebe.",
    primaryCta: "Kostenlos testen",
    secondaryCta: "Funktionsweise",
    socialProof: "Über 500 Flottenbetreiber in Deutschland vertrauen uns",
    dashboard: {
      title: "Heutige Flotten-Performance",
      metric1: { label: "Überstunden", value: "47h", badge: "↑ 23% vs. Vorwoche", type: "red" as const },
      metric2: { label: "Abgeschlossene Routen", value: "83/91", badge: "91%", type: "amber" as const },
      metric3: { label: "Gewinn pro Route", value: "€12,40", badge: "↓ €3,20 Verlust durch Überstunden", type: "green" as const },
    }
  }
};

export function Hero({ locale = 'en', onTrialClick }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const content = COPY[locale];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-white dark:bg-[#0A0A0F] overflow-hidden scroll-mt-20 lg:scroll-mt-[80px] transition-colors"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-6">
              {content.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mb-10">
              {content.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <button 
                onClick={onTrialClick}
                className="w-full sm:w-auto px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 text-center active:scale-95 focus-visible:ring-2 ring-blue-500 outline-none"
              >
                {content.primaryCta}
              </button>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-white/10 transition-all text-center focus-visible:ring-2 ring-blue-500 outline-none"
              >
                {content.secondaryCta}
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0A0A0F] bg-gray-200 dark:bg-gray-800" />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                {content.socialProof}
              </p>
            </div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div 
            className={`transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative group">
              {/* Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Dashboard Header */}
                <div className="px-6 py-4 border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-200">{content.dashboard.title}</h3>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="p-6 space-y-4">
                  <MetricRow data={content.dashboard.metric1} />
                  <MetricRow data={content.dashboard.metric2} />
                  <MetricRow data={content.dashboard.metric3} />
                  
                  {/* Mini Chart */}
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Weekly Profitability Trend</p>
                    <div className="flex items-end justify-between h-24 gap-2">
                      {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t-sm relative group/bar"
                          style={{ height: `${h}%` }}
                        >
                          {i === 3 && <div className="absolute -top-1 left-0 right-0 h-1 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricRow({ data }: { data: { label: string; value: string; badge: string; type: string } }) {
  const badgeColors: Record<string, string> = {
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <div className="flex items-center justify-between group/row p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
      <div>
        <p className="text-xs text-gray-500 font-medium mb-1">{data.label}</p>
        <p className="text-xl font-bold text-gray-900 dark:text-white">{data.value}</p>
      </div>
      <div className={`text-[10px] sm:text-xs font-bold px-2 py-1 rounded border ${badgeColors[data.type]}`}>
        {data.badge}
      </div>
    </div>
  );
}
