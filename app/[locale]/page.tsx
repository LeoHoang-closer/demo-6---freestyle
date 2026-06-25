import { Metadata } from 'next';
import { loadPageCopy } from '../../lp-system/locales';
import { LandingPageTemplate } from '../../lp-system/templates/LandingPage';
import { DEFAULT_THEME, LOCALES } from '../../lp-system/config/preferences';
import { DEFAULT_LP_ID } from '../../lp-system/config/lp-config';

const FIXED_LP_ID = DEFAULT_LP_ID;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

type Props = {
  params: Promise<{ locale: 'en' | 'de' }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const isEn = locale === 'en';
  const title = isEn 
    ? "Fahrly – Dispatch Software for Amazon DSPs & Delivery Fleets"
    : "Fahrly – Dispositionssoftware für Amazon DSPs & Lieferflotten";
  
  const description = isEn
    ? "Fahrly gives Amazon DSP owners real-time visibility into route profitability, overtime costs, and driver performance. Stop managing with Excel. Start managing with data."
    : "Fahrly gibt Amazon-DSP-Betreibern Echtzeit-Einblick in Routenprofitabilität, Überstundenkosten und Fahrer-Performance. Schluss mit Excel – Entscheidungen auf Datenbasis.";

  const keywords = isEn
    ? "Dispatch Software, Fleet Management Software, Driver Management Software, Route Planning Software, Fleet Operations Software, Amazon DSP software, delivery fleet management"
    : "Dispositionssoftware, Fuhrparkmanagement Software, Fahrerverwaltung Software, Tourenplanung Software, Flottenmanagement Software";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://fahrly.de/${locale}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://fahrly.de/${locale}`,
      locale: isEn ? 'en_GB' : 'de_DE',
      siteName: 'Fahrly',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const copy = loadPageCopy(locale, FIXED_LP_ID);
  
  if (!copy) {
    throw new Error(`Copy not found for LP ID: ${FIXED_LP_ID} and locale: ${locale}`);
  }

  const isEn = locale === 'en';
  const description = isEn
    ? "Fahrly gives Amazon DSP owners real-time visibility into route profitability, overtime costs, and driver performance. Stop managing with Excel. Start managing with data."
    : "Fahrly gibt Amazon-DSP-Betreibern Echtzeit-Einblick in Routenprofitabilität, Überstundenkosten und Fahrer-Performance. Schluss mit Excel – Entscheidungen auf Datenbasis.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fahrly",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "50.00",
      "priceCurrency": "EUR"
    },
    "description": description
  };

  // For static export, use default theme (theme switching will be handled client-side)
  const theme = DEFAULT_THEME;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPageTemplate 
        theme={theme} 
        copy={copy} 
        locale={locale}
        lpId={FIXED_LP_ID}
      />
    </>
  );
}

