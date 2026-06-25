'use client';

import React, { useState, useEffect } from 'react';
import { LocaleToggle } from './ui/LocaleToggle';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';

export type NavbarProps = {
  locale: 'en' | 'de';
  onTrialClick?: () => void;
};

const NAV_LINKS = [
  { id: 'features', label: { en: 'Features', de: 'Funktionen' } },
  { id: 'how-it-works', label: { en: 'How It Works', de: 'Wie es funktioniert' } },
  { id: 'stories', label: { en: 'Stories', de: 'Berichte' } },
  { id: 'pricing', label: { en: 'Pricing', de: 'Preise' } },
  { id: 'faq', label: { en: 'FAQ', de: 'FAQ' } },
];

export function Navbar({ locale, onTrialClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll for background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle intersection observer for active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const copy = {
    login: locale === 'en' ? 'Log in' : 'Anmelden',
    trial: locale === 'en' ? 'Start Free Trial' : 'Kostenlos testen',
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-[#0A0A0F]/90 backdrop-blur-md shadow-lg h-16' 
          : 'bg-transparent h-16 md:h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href={`/${locale}`}
              className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Fahrly
            </Link>
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm transition-colors duration-200 hover:text-blue-600 dark:hover:text-white focus-visible:ring-2 ring-blue-500 outline-none rounded p-1 ${
                  activeSection === link.id ? 'text-blue-600 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {link.label[locale]}
              </button>
            ))}
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-3">
              <LocaleToggle />
              <ThemeToggle />
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://qpp.fahrlygo.de/account/login"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors focus-visible:ring-2 ring-blue-500 outline-none rounded p-1"
              >
                {copy.login}
              </Link>
              <button 
                onClick={onTrialClick}
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md shadow-blue-500/20 active:scale-95 focus-visible:ring-2 ring-blue-500 outline-none"
              >
                {copy.trial}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <LocaleToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 focus-visible:ring-2 ring-blue-500 outline-none rounded"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-x-0 top-14 bg-white dark:bg-[#0A0A0F] border-b border-gray-200 dark:border-gray-800 transition-all duration-300 md:hidden overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-lg text-gray-300 hover:text-white py-2 transition-colors focus-visible:ring-2 ring-blue-500 outline-none rounded"
            >
              {link.label[locale]}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-800 flex flex-col space-y-4">
            <Link 
              href="https://qpp.fahrlygo.de/account/login"
              className="text-left py-2 text-gray-300 hover:text-white transition-colors focus-visible:ring-2 ring-blue-500 outline-none rounded"
            >
              {copy.login}
            </Link>
            <button 
              onClick={onTrialClick}
              className="bg-[#2563EB] text-white px-5 py-3 rounded-lg font-semibold text-center transition-colors focus-visible:ring-2 ring-blue-500 outline-none"
            >
              {copy.trial}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
