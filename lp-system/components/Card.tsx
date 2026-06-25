import React from 'react';
import { FeatureCard } from './ui/FeatureCard';
import type { ColorTheme } from '../config/design-system';

export type CardProps = {
  theme: ColorTheme;
  children: React.ReactNode;
  className?: string;
};

/**
 * Card Component (Legacy Wrapper)
 * Re-exports FeatureCard for backward compatibility
 */
export function Card({ theme, children, className = '' }: CardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
