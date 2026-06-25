import React from 'react';
import { spacing } from '../../config/design-system';

export type CTAGroupProps = {
  align?: 'left' | 'center' | 'right';
  stack?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  className?: string;
};

/**
 * CTAGroup Component
 * Root: flex container with classes derived from props
 * align="left" → justify-start items-center
 * align="center" → justify-center items-center
 * align="right" → justify-end items-center
 * Gaps use block.x/block.y tokens
 */
export function CTAGroup({ align = 'left', stack = 'horizontal', children, className = '' }: CTAGroupProps) {
  const alignClass = align === 'center' 
    ? 'justify-center items-center'
    : align === 'left'
    ? 'justify-start items-center'
    : 'justify-end items-center';

  const stackClass = stack === 'horizontal'
    ? `flex-row ${spacing.gap.md}`
    : `flex-col ${spacing.block.y.md}`;

  return (
    <div className={`
      flex
      ${stackClass}
      ${alignClass}
      ${className}
    `}>
      {children}
    </div>
  );
}
