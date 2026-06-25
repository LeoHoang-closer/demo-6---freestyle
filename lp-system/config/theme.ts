import { colors, ColorTheme } from './design-system';

export type ThemeName = ColorTheme;

export type ThemeConfig = {
  name: ThemeName;
  background: string;        // Tailwind bg class
  font: string;              // Tailwind font class
};

export const themes: Record<ThemeName, ThemeConfig> = {
  light: {
    name: 'light',
    background: 'bg-bg-default', // Use semantic class backed by CSS variable
    font: 'font-sans',
  },
  dark: {
    name: 'dark',
    background: 'bg-bg-default', // Use semantic class backed by CSS variable
    font: 'font-sans',
  },
};
