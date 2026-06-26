import React from 'react';
import { colors } from '../../config/design-system';

export type CTAButtonProps = {
  variant: 'primary' | 'ghost';
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

/**
 * CTAButton Component
 * White slim CTA button (primary/ghost variants)
 * Owns: Button styling, hover/active/focus states
 * Does NOT own: Layout spacing
 */
export function CTAButton({
  variant = 'primary',
  label,
  onClick,
  type = 'button',
  className = '',
}: CTAButtonProps) {
  // Use semantic tokens only - no theme branching
  // Primary variant: uses semantic CTA tokens (black in light mode, white in dark mode)
  // Ghost variant: uses semantic border/text tokens
  
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all active:scale-[0.98] outline-none focus-visible:ring-2 ring-blue-500";
  let variantClasses: string;
  
  if (variant === 'primary') {
    // Primary uses semantic CTA tokens (no theme branching)
    variantClasses = `${colors.light.primary.bg} ${colors.light.primary.text} ${colors.light.primary.hover} ${colors.light.primary.active}`;
  } else {
    // Ghost/secondary variant: white base, semantic tokens in both modes (no theme branching)
    // Base: white (bg-bg-default in light mode)
    // Enhanced hover: background + border color change for better visibility
    // Active state slightly stronger than hover
    variantClasses = `bg-bg-default border border-border-subtle text-text-primary hover:bg-bg-neutral-hover hover:border-border-strong active:bg-bg-neutral-active active:border-border-strong`;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantClasses} cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
