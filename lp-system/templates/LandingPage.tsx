'use client';

import React from 'react';
import { ThemeName, themes } from '../config/theme';
import type { HeroVariant, PageCopyConfig } from '../config/types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../sections/Hero';
import { Problem } from '../sections/Problem';
import { Features } from '../sections/Features';
import { HowItWorks } from '../sections/HowItWorks';
import { Testimonials } from '../sections/Testimonials';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
import { FinalCTA } from '../sections/FinalCTA';
import { TrialModal } from '../components/TrialModal';
import { findLandingPageConfigById } from '../config/lp-config';
import { useState } from 'react';

export type LandingPageTemplateProps = {
  theme: ThemeName;
  copy: PageCopyConfig;
  locale: 'en' | 'de';
  lpId?: string;
};

/**
 * Landing Page Template
 * Section order: Navbar → Hero → Pain → HowItWorks → Pricing → FAQ → FinalCTA → Footer
 */
export function LandingPageTemplate({
  theme,
  locale,
  lpId,
}: LandingPageTemplateProps) {
  const themeConfig = themes[theme];
  const defaultHeroVariant: HeroVariant = 'hero-split-phone';
  const lpConfig = lpId ? findLandingPageConfigById(lpId) : null;
  void defaultHeroVariant;
  void lpConfig;

  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const openTrial = () => setIsTrialModalOpen(true);

  return (
    <div className={`min-h-screen ${themeConfig.background} ${themeConfig.font}`}>
      <Navbar locale={locale} onTrialClick={openTrial} />
      <main>
        <Hero locale={locale} onTrialClick={openTrial} />
        <Problem locale={locale} />
        <Features locale={locale} />
        <HowItWorks locale={locale} onTrialClick={openTrial} />
        <Testimonials locale={locale} />
        <Pricing locale={locale} onTrialClick={openTrial} />
        <FAQ locale={locale} />
        <FinalCTA locale={locale} onTrialClick={openTrial} />
      </main>
      <Footer locale={locale} />
      <TrialModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
        locale={locale} 
      />
    </div>
  );
}
