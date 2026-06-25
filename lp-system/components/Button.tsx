import React from 'react';
import { CTAButton } from './ui/CTAButton';
import type { ColorTheme } from '../config/design-system';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  theme: ColorTheme;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

/**
 * Button Component (Legacy Wrapper)
 * Re-exports CTAButton for backward compatibility
 */
export function Button({
  variant,
  theme,
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  return (
    <CTAButton
      variant={variant === 'primary' ? 'primary' : 'ghost'}
      theme={theme}
      label={typeof children === 'string' ? children : ''}
      onClick={onClick}
      type={type}
      className={className}
    />
  );
}
