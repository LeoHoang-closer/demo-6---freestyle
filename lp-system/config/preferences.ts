/**
 * Preference Constants and Helpers
 * 
 * Defines allowed values, cookie keys, defaults, and pure helper functions
 * for theme and locale preferences.
 */

// ============================================================================
// THEME CONSTANTS
// ============================================================================

export const THEME_COOKIE_KEY = 'theme';

export type Theme = 'light' | 'dark';

export const DEFAULT_THEME: Theme = 'light';

export const VALID_THEMES: readonly Theme[] = ['light', 'dark'] as const;

// ============================================================================
// LOCALE CONSTANTS
// ============================================================================

export const LOCALES = ['en', 'de'] as const;

export type Locale = typeof LOCALES[number];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Validates if a value is a valid theme
 */
export function isValidTheme(value: unknown): value is Theme {
  return typeof value === 'string' && VALID_THEMES.includes(value as Theme);
}

/**
 * Returns the opposite locale
 */
export function getOppositeLocale(locale: Locale): Locale {
  return locale === 'en' ? 'de' : 'en';
}
