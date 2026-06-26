import React from 'react';
import React from 'react';
import { ColorTheme } from '../../config/design-system';
import { CTAButton } from './CTAButton';

export type PricingCardProps = {
  title: string;
  price: string;
  subtitle?: string;
  body: string;
  features: string[];
  ctaLabel: string;
  theme: ColorTheme;
  isHighlighted?: boolean;
  bottomNoteLeft?: string;
  bottomNoteRight?: string;
  className?: string;
};

/**
 * PricingCard Component
 * Pricing plan card with title, price, description, features, and CTA
 * Owns: Internal layout, spacing, card styling
 * Does NOT own: Section-level spacing
 */
export function PricingCard({
  title,
  price,
  subtitle,
  body,
  features,
  ctaLabel,
  theme,
  bottomNoteLeft,
  bottomNoteRight,
  className = '',
}: PricingCardProps) {
  return (
    <div
      className={`
        bg-bg-default
        border border-border-subtle
        rounded-2xl
        p-6
        shadow-sm dark:shadow-none
        flex flex-col h-full
        transition-all duration-150 ease-out
        hover:shadow-md dark:hover:shadow-none
        ${className}
      `}
    >
      {/* Top Content: Title → Price → Description → Features */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-text-primary mb-2">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-[10px] uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 mb-4">
            {subtitle}
          </p>
        )}
        
        <div className="text-3xl font-bold text-text-primary mb-4">
          {price}
        </div>
        
        {/* FIXED HEIGHT DESCRIPTION: Ensures uniform tick-alignment across columns */}
        <div className="min-h-[48px] flex items-center text-text-secondary mb-6">
          <p className="text-sm leading-relaxed min-w-0">
            {body}
          </p>
        </div>
        
        {/* Features List: Uniform alignment across all cards */}
        <ul className="flex flex-col space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 min-w-0">
              <span className="flex-shrink-0 text-blue-600 dark:text-blue-500 font-bold">✓</span>
              <span className="text-sm text-text-secondary leading-normal">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Content: Notes + Button (pinned to bottom) */}
      <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
        {(bottomNoteLeft || bottomNoteRight) && (
          <div className="flex items-center justify-between text-[11px] text-text-muted mb-4">
            <span>{bottomNoteLeft}</span>
            <span>{bottomNoteRight}</span>
          </div>
        )}
        
        <CTAButton variant="primary" theme={theme} label={ctaLabel} />
      </div>
    </div>
  );
}
