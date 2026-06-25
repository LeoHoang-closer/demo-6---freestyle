import React from 'react';
import { layout } from '../../config/design-system';

export type SingleColumnProps = {
  children: React.ReactNode;
  alignment?: 'left' | 'center';
};

/**
 * SingleColumn Layout Primitive
 * Same container behavior as CenteredLayout (max-width, mx-auto, padding)
 * Layout is a simple vertical stack; alignment usually left
 * No vertical spacing or colors; sections control section spacing via tokens
 */
export function SingleColumn({ children, alignment = 'left' }: SingleColumnProps) {
  const containerClass = `
    ${layout.container.maxWidth}
    ${layout.container.px}
    mx-auto
    ${alignment === 'center' ? 'text-center' : ''}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}

