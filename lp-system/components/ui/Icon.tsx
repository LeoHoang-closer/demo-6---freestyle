import React from 'react';

export type IconProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  'aria-hidden'?: boolean;
};

/**
 * Icon Wrapper Component
 * 
 * Wraps SVG icons to ensure theme compatibility via currentColor.
 * Icons use semantic icon tokens that switch automatically between light/dark themes.
 * 
 * SVG uses currentColor to support theming: All SVG paths/strokes use currentColor
 * which inherits from this wrapper's text-icon-secondary class. The icon tokens
 * are defined in globals.css and switch automatically based on the html.dark class.
 * This allows icons to adapt to light/dark themes without hardcoded colors or duplicate assets.
 */
export function Icon({ 
  children, 
  className = '', 
  title,
  'aria-hidden': ariaHidden = true 
}: IconProps) {
  return (
    <span 
      className={`text-icon-secondary ${className}`}
      title={title}
      aria-hidden={ariaHidden}
    >
      {children}
    </span>
  );
}

