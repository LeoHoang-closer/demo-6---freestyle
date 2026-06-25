import React from 'react';
import { layout } from '../../config/design-system';

export type CenteredLayoutProps = {
  children: React.ReactNode;
  heading?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

/**
 * Centered Layout Primitive
 * Owns: max-width via layout.container.maxWidth, horizontal centering via mx-auto, horizontal padding via layout.container.px
 * MUST NOT: set vertical spacing, set colors, borders, shadows
 */
export function CenteredLayout({ 
  children, 
  heading,
  align = 'left',
  className = '',
}: CenteredLayoutProps) {
  const textAlignClass = align === 'center' 
    ? 'text-center'
    : 'text-left';

  const contentClass = `
    ${layout.container.maxWidth}
    ${layout.container.px}
    mx-auto
    ${textAlignClass}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={contentClass}>
      {heading}
      {children}
    </div>
  );
}

