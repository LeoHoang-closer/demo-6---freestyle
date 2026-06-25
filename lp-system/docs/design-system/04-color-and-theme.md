# Color & Theme System

Principle:
- Default surfaces, text, and borders MUST use semantic tokens backed by CSS variables:
  - bg-bg-default, bg-bg-neutral
  - text-text-primary, text-text-secondary, text-text-muted
  - border-border-subtle

Theme:
- Light is default (:root).
- Dark via html.dark.
- Components MUST NOT branch on theme for defaults.

Accent rules:
- Brand color reserved for CTAs.
- Max two accent colors per page.
- Neutrals dominate.

Forbidden:
- text-white / text-black for default copy
- bg-transparent for required opaque surfaces
- dark: variants for default colors

