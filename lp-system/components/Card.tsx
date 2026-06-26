import React from 'react';

/**
 * Card Component (Legacy Wrapper)
 * Re-exports FeatureCard for backward compatibility
 */
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
