export type SectionHeroCopy = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
};

export type HeroVariant = 'hero-split-phone' | 'hero-centered-area' | 'hero-text-contact';

export type SectionValuePropsCopy = {
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionFeaturesCopy = {
  heading?: string;
  subtitle?: string;
  items?: {
    title?: string;
    body?: string;
  }[];
};

export type SectionPricingCopy = {
  heading: string;
  subtitle: string;
  plans: {
    name: string;
    price: string;
    subtitle?: string;
    description: string;
    features: string[];
    ctaLabel: string;
    bottomNoteLeft?: string;
    bottomNoteRight?: string;
  }[];
};

export type SectionFAQCopy = {
  heading: string;
  subtitle: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type SectionFinalCtaCopy = {
  heading?: string;
  subtitle?: string;
  ctaLabel?: string;
};

export type SectionTestimonialsCopy = {
  heading: string;
  subtitle: string;
  testimonials: {
    quote: string;
    name: string;
    role: string;
    metric?: string;
  }[];
};

export type SectionDeepDiveCopy = {
  heading: string;
  subtitle: string;
  steps: {
    title: string;
    body: string;
  }[];
};

export type SectionUseCasesCopy = {
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionIntegrationsCopy = {
  heading: string;
  subtitle: string;
  integrations: {
    name: string;
  }[];
};

export type SectionSecurityCopy = {
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionMetricsCopy = {
  heading: string;
  subtitle: string;
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
};

export type MockDashboardCopy = {
  user: string;
  navItems?: {
    label: string;
    active?: boolean;
  }[];
  footerItems?: string[];
  pageTitle: string;
  mapTitle?: string;
  mapItems?: {
    initials: string;
    name: string;
    status: string;
    statusColor?: string;
  }[];
  metrics: {
    label: string;
    value: string;
    trend?: string;
    status?: string;
    subtext?: string;
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
  table: {
    title: string;
    columns: string[];
    rows: string[][];
  };
};

export type PageCopyConfig = {
  hero?: SectionHeroCopy;
  valueProps?: SectionValuePropsCopy;
  features?: SectionFeaturesCopy;
  deepDive?: SectionDeepDiveCopy;
  useCases?: SectionUseCasesCopy;
  integrations?: SectionIntegrationsCopy;
  security?: SectionSecurityCopy;
  metrics?: SectionMetricsCopy;
  testimonials?: SectionTestimonialsCopy;
  pricing?: SectionPricingCopy;
  faq?: SectionFAQCopy;
  finalCta?: SectionFinalCtaCopy;
  mockDashboard?: MockDashboardCopy;
};

