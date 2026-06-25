"use client";

import React from 'react';
import { ColorTheme } from '../config/design-system';
import logo from '../image/logo.png';

type MetricCard = {
  label: string;
  value: string;
  trend?: string;
  status?: string;
  statusColor?: string;
  subtext?: string;
};

type MockDashboardProps = (
  | { showMetrics?: true; metrics: MetricCard[] }
  | { showMetrics: false; metrics?: never }
) & {
  user: string;
  navItems?: {
    label: string;
    active?: boolean;
    icon?: React.ReactNode;
  }[];
  sidebar?: string[];
  footerItems?: string[];
  pageTitle?: string;
  theme?: ColorTheme;
  locale?: 'en' | 'de';
  mapTitle?: string;
  mapItems?: {
    initials: string;
    name: string;
    status: string;
    statusColor?: string;
  }[];
  topPerformer?: {
    driver: string;
    value: string;
    subtext: string;
  };
  fleetStatus?: {
    label: string;
    value: string;
  }[];
  todaysPerformance?: {
    label: string;
    value: string;
  }[];
};

// Inline SVGs to match Lucide icons without dependencies
const Icons = {
  Dashboard: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
  ),
  Navigation: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
  ),
  Truck: (props: { className?: string }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10h3Z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
  ),
  Users: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  Shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1-1z" /></svg>
  ),
  Coins: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18.06" /><path d="M7 6h1v4" /><path d="M17.3 14.3l.7.7-1.4 1.4" /></svg>
  ),
  ChevronRight: (props: { size?: number; className?: string }) => (
    <svg width={props.size || "18"} height={props.size || "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="m9 18 6-6-6-6" /></svg>
  ),
  TrendingUp: (props: { size?: number; className?: string }) => (
    <svg width={props.size || "18"} height={props.size || "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
  ),
  Receipt: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 17.5V6.5" /></svg>
  ),
  ListTodo: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m9 10 2 2 4-4" /><path d="M8 16h8" /></svg>
  ),
};

export function MockDashboard(props: MockDashboardProps) {
  const {
    topPerformer,
    fleetStatus,
    todaysPerformance = [],
    mapTitle = 'Live-Flottenkarte',
    mapItems = [],
    locale = 'en',
  } = props;

  // English metric labels
  const enLabels = {
    'TOTAL EARNINGS': 'TOTAL EARNINGS',
    'TOTAL TRIPS': 'TOTAL TRIPS',
    'ACTIVE DRIVERS': 'ACTIVE DRIVERS',
    'UTILISATION': 'UTILISATION',
  };

  // German metric labels
  const deLabels = {
    'TOTAL EARNINGS': 'UMSATZ',
    'TOTAL TRIPS': 'FAHRTEN',
    'ACTIVE DRIVERS': 'FAHRER AKTIV',
    'UTILISATION': 'AUSLASTUNG',
  };

  // English Quick Insights labels
  const enQuickInsights = {
    title: 'Quick Insights',
    topPerformer: 'Top Performer',
    trips: 'trip',
    hours: 'h',
    fleetStatus: 'Fleet Status',
    totalActive: 'Total Active',
    online: 'Online',
    enRoute: 'En Route',
    onTrip: 'On Trip',
    todaysPerformance: "Today's Performance",
    avgFare: 'Avg fare',
    avgPerHour: 'Avg €/Hour',
  };

  // German Quick Insights labels
  const deQuickInsights = {
    title: 'Schnelle Einblicke',
    topPerformer: 'Top-Performer',
    trips: 'Fahrt',
    hours: 'h',
    fleetStatus: 'Flottenstatus',
    totalActive: 'Gesamt aktiv',
    online: 'Online',
    enRoute: 'Unterwegs',
    onTrip: 'Auf Fahrt',
    todaysPerformance: 'Heutige Performance',
    avgFare: 'Ø FAHRPREIS',
    avgPerHour: 'Ø €/STUNDE',
  };

  // Select labels based on locale
  const metricLabelMap = (locale === 'de' ? deLabels : enLabels) as Record<string, string>;
  const quickInsights = locale === 'de' ? deQuickInsights : enQuickInsights;

  const navItems = [
    { label: 'Dashboard', icon: <Icons.Dashboard />, active: true },
    { label: 'FahrlyGO', icon: <Icons.Navigation /> },
    { label: 'Flotte', icon: <Icons.Truck /> },
    { label: 'Personal', icon: <Icons.Users /> },
    { label: 'Compliance', icon: <Icons.Shield /> },
    { label: 'Finanzen', icon: <Icons.Coins /> },
  ];

  const statusLabelMap: Record<string, string> = {
    'Total Active': quickInsights.totalActive,
    'Online': quickInsights.online,
    'En Route': quickInsights.enRoute,
    'On Trip': quickInsights.onTrip,
  };

  const metrics = props.metrics || [];

  return (
    <div className="bg-[var(--dash-outer-bg)] border border-[var(--dash-outer-border)] rounded-3xl shadow-sm dark:shadow-none overflow-hidden w-full h-[580px] flex transition-colors duration-200">
      {/* SIDEBAR */}
      <aside className="w-60 bg-[var(--dash-sidebar-bg)] border-r border-[var(--dash-sidebar-border)] flex flex-col h-full flex-shrink-0 transition-colors duration-200">
        <div className="flex items-center gap-2 p-6">
          <div className="h-8 w-8 rounded-lg overflow-hidden flex items-center justify-center shadow-sm">
            <img src={logo.src} alt="Logo" className="h-full w-full object-cover" />
          </div>
          <span className="text-xl font-bold text-[var(--dash-header-text)]">Fahrly</span>
        </div>

        <nav className="flex-1 px-4 py-2 space-y-1">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-not-allowed transition-all ${item.active
                  ? 'bg-[var(--dash-nav-active-bg)] text-[var(--dash-nav-active-text)] font-semibold shadow-sm'
                  : 'text-[var(--dash-muted-text)] hover:bg-[var(--dash-nav-hover-bg)]'
                }`}
            >
              <div className="flex items-center gap-3">
                <span className={item.active ? 'text-[var(--dash-accent)]' : 'text-[var(--dash-sidebar-icon)]'}>
                  {item.icon}
                </span>
                <span className="text-sm">{item.label}</span>
              </div>
              {!item.active && index > 0 && index < 5 && (
                <Icons.ChevronRight size={14} className="text-slate-300 dark:text-slate-600" />
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-[#E9ECEF] dark:border-[#1E2640] space-y-1">
          <div className="flex items-center gap-3 px-3 py-2 text-[var(--dash-body-text)] text-sm font-medium">
            <Icons.TrendingUp size={18} className="text-slate-400 dark:text-slate-600" />
            <span>Integration</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-[var(--dash-body-text)] text-sm font-medium">
            <span className="text-slate-400 dark:text-slate-600">
              <Icons.Users />
            </span>
            <span>Support</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 bg-[var(--dash-inner-bg)] flex flex-col h-full overflow-hidden transition-colors duration-200">
        {/* Header */}
        <header className="px-8 py-6">
          <h1 className="text-2xl font-bold text-[var(--dash-header-text)]">Dashboard</h1>
        </header>

        {/* Content Container */}
        <div className="flex-1 px-8 pb-8 overflow-hidden">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-4 gap-4 w-full mb-6">
            {metrics.slice(0, 4).map((metric, index) => {
              const displayLabel = metricLabelMap[metric.label.toUpperCase()] ||
                (metric.label === 'FAHRTEN' ? 'FAHRTEN' :
                  metric.label === 'UMSATZ' ? 'UMSATZ' :
                    metric.label === 'AUSLASTUNG' ? 'AUSLASTUNG' :
                      metric.label === 'FAHRER AKTIV' ? 'FAHRER AKTIV' : metric.label);

              return (
                <div key={index} className="bg-[var(--dash-card-bg)] border border-[var(--dash-card-border)] rounded-2xl p-4 shadow-sm dark:shadow-none flex flex-col justify-between h-[135px] min-w-0 w-full transition-colors duration-200">
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-[var(--dash-inner-bg)] rounded-xl text-slate-400 dark:text-slate-500">
                      {index === 0 ? <Icons.Receipt /> :
                        index === 1 ? <Icons.ListTodo /> :
                          index === 2 ? <Icons.Users /> :
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>}
                    </div>
                    {metric.trend && (
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-500">
                        <Icons.TrendingUp size={10} />
                        <span className="whitespace-nowrap">+0,0 %</span>
                      </div>
                    )}
                    {metric.status && (
                      <span className="text-[11px] font-bold text-emerald-500 whitespace-nowrap">
                        {metric.status === 'Active' ? 'Aktiv' : metric.status}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-[11px] font-semibold tracking-wider text-[var(--dash-muted-text)] uppercase whitespace-nowrap mb-0.5">
                      {displayLabel}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-[var(--dash-header-text)] leading-tight truncate">
                      {metric.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-12 gap-6 h-[calc(100%-155px)] pb-4">
            {/* Center Section: Live Map Area */}
            <section className="col-span-12 xl:col-span-7 bg-[var(--dash-card-bg)] border border-[var(--dash-card-border)] rounded-2xl shadow-sm dark:shadow-none overflow-hidden flex flex-col transition-colors duration-200">
              <div className="px-5 py-4 border-b border-[#F4F5F7] dark:border-[#222F4D] flex items-center justify-between">
                <h3 className="text-base font-bold text-[var(--dash-header-text)]">{mapTitle}</h3>
                <Icons.ChevronRight size={16} className="text-slate-300 dark:text-slate-600" />
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-none">
                <div className="bg-[var(--dash-inner-bg)] relative m-4 rounded-xl overflow-hidden min-h-[160px] transition-colors duration-200 border border-[var(--dash-outer-border)]">
                  {/* Map Placeholder with Dots */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full opacity-40">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-500 rounded-full" />
                      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-emerald-500 rounded-full" />
                      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-emerald-500 rounded-full" />
                      <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-emerald-500 rounded-full" />
                      <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4 space-y-2">
                  {mapItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-[#F4F5F7] dark:border-[#222F4D]/50 last:border-0 min-w-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-8 w-8 rounded-full bg-[#F4F5F7] dark:bg-[#1E2640] flex items-center justify-center text-gray-500 dark:text-gray-400 text-[10px] font-bold border border-[#E9ECEF] dark:border-[#222F4D] transition-colors duration-200">
                          {item.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[var(--dash-header-text)] truncate">{item.name}</div>
                          <div className={`text-[10px] ${item.status === 'Online' ? 'text-emerald-500 font-bold' : 'text-blue-500 font-bold'} truncate`}>
                            {item.status}
                          </div>
                        </div>
                      </div>
                      <Icons.ChevronRight size={14} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Right Section: Quick Insights */}
            <aside className="col-span-12 xl:col-span-5 h-full overflow-hidden flex flex-col">
              <div className="mb-4 flex-shrink-0">
                <h3 className="text-lg font-bold text-[var(--dash-header-text)] truncate">{quickInsights.title}</h3>
              </div>

              <div className="overflow-y-auto h-[calc(100%-40px)] pr-1 scrollbar-none space-y-5">
                {/* Top Performer */}
                {topPerformer && (
                  <div className="bg-[var(--dash-card-bg)] border border-[var(--dash-card-border)] rounded-2xl p-5 shadow-sm dark:shadow-none transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Icons.TrendingUp size={16} className="text-amber-500" />
                      <span className="text-[11px] font-bold text-gray-400 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">{quickInsights.topPerformer}</span>
                    </div>
                    <div className="text-2xl font-bold text-[var(--dash-header-text)] mb-2 whitespace-nowrap">{topPerformer.value}</div>
                    <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                      <span className="flex items-center gap-1">1 {quickInsights.trips}</span>
                      <span className="flex items-center gap-1">• 0,39 {quickInsights.hours}</span>
                    </div>
                  </div>
                )}

                {/* Fleet Status */}
                {fleetStatus && (
                  <div className="bg-[var(--dash-card-bg)] border border-[var(--dash-card-border)] rounded-2xl p-5 shadow-sm dark:shadow-none flex flex-col transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Icons.Truck className="text-slate-400 dark:text-slate-500" />
                      <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">{quickInsights.fleetStatus}</span>
                    </div>
                    <div className="space-y-4">
                      {fleetStatus.map((status, index) => (
                        <div key={index} className="flex items-center justify-between text-sm min-w-0 min-h-[48px]">
                          <span className="font-bold text-[var(--dash-header-text)] flex-shrink-0">{status.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {todaysPerformance && todaysPerformance.length > 0 && (
                  <div className="bg-[var(--dash-card-bg)] border border-[var(--dash-card-border)] rounded-2xl p-5 shadow-sm dark:shadow-none flex flex-col transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Icons.TrendingUp size={16} className="text-blue-500" />
                      <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">{quickInsights.todaysPerformance}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {todaysPerformance.map((item, index) => {
                        const getLabel = (label: string) => {
                          if (label === 'Avg Fare') return quickInsights.avgFare;
                          if (label === 'Avg €/Hour') return quickInsights.avgPerHour;
                          return label;
                        };
                        return (
                          <div key={index} className="min-w-0">
                            <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide truncate">
                              {getLabel(item.label)}
                            </div>
                            <div className="mt-1 text-base font-bold text-[var(--dash-header-text)] truncate">{item.value}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
