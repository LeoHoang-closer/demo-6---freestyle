'use client';

import React from 'react';
import Link from 'next/link';

export function Footer({ locale = 'en' }: { locale?: 'en' | 'de' }) {
  const isEn = locale === 'en';
  
  const content = isEn ? {
    tagline: "Operational visibility through Fleet Management Software for Amazon DSPs and delivery fleets.",
    product: {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/en/privacy" },
        { label: "Terms of Use", href: "/en/terms" },
        { label: "Imprint", href: "/en/imprint" }
      ]
    },
    contact: {
      title: "Contact",
      email: "support@fahrly.de",
      whatsapp: "+49 171 8411868",
      whatsappHref: "https://wa.me/491718411868"
    },
    bottom: {
      copy: "© 2026 Fahrly OÜ. All rights reserved.",
      madeFor: "Made for Amazon DSPs in Germany"
    }
  } : {
    tagline: "Operative Sichtbarkeit durch Flottenmanagement Software für Amazon DSPs und Lieferflotten.",
    product: {
      title: "Produkt",
      links: [
        { label: "Funktionen", href: "#features" },
        { label: "Funktionsweise", href: "#how-it-works" },
        { label: "Preise", href: "#pricing" },
        { label: "FAQ", href: "#faq" }
      ]
    },
    legal: {
      title: "Rechtliches",
      links: [
        { label: "Datenschutz", href: "/de/privacy" },
        { label: "Nutzungsbedingungen", href: "/de/terms" },
        { label: "Impressum", href: "/de/imprint" }
      ]
    },
    contact: {
      title: "Kontakt",
      email: "support@fahrly.de",
      whatsapp: "+49 171 8411868",
      whatsappHref: "https://wa.me/491718411868"
    },
    bottom: {
      copy: "© 2026 Fahrly OÜ. Alle Rechte vorbehalten.",
      madeFor: "Entwickelt für Amazon DSPs in Deutschland"
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-[#070709] pt-16 pb-8 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-6">
            <Link href="/" className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">
              Fahrly
            </Link>
            <p className="text-sm max-w-xs leading-relaxed">
              {content.tagline}
            </p>
          </div>

          {/* Product Col */}
          <div className="space-y-4">
            <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest">
              {content.product.title}
            </h4>
            <nav className="flex flex-col gap-3">
              {content.product.links.map((link, i) => (
                <Link key={i} href={link.href} className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Col */}
          <div className="space-y-4">
            <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest">
              {content.legal.title}
            </h4>
            <nav className="flex flex-col gap-3">
              {content.legal.links.map((link, i) => (
                <Link key={i} href={link.href} className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest">
              {content.contact.title}
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href={`mailto:${content.contact.email}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                {content.contact.email}
              </a>
              <a href={content.contact.whatsappHref} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                {content.contact.whatsapp}
              </a>
              
              {/* Lang Switcher */}
              <div className="pt-4 flex items-center gap-2">
                <Link href="/en" className={`text-xs ${isEn ? 'text-gray-900 dark:text-white font-bold' : 'hover:text-gray-900 dark:hover:text-white'}`}>
                  🇬🇧 EN
                </Link>
                <span className="text-gray-200 dark:text-white/10">|</span>
                <Link href="/de" className={`text-xs ${!isEn ? 'text-gray-900 dark:text-white font-bold' : 'hover:text-gray-900 dark:hover:text-white'}`}>
                  🇩🇪 DE
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>{content.bottom.copy}</p>
          <p className="text-gray-600">{content.bottom.madeFor}</p>
        </div>
      </div>
    </footer>
  );
}
