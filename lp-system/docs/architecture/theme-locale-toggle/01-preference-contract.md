# Preference Contract — Sources of Truth

## Locale (de/en)

Canonical source:
- Locale is determined ONLY by URL segment: /[locale]/[vertical]/[slug]

Toggle behavior:
- Toggle performs a pure route transform:

  /{locale}/{vertical}/{slug} -> /{otherLocale}/{vertical}/{slug}

- Preserve [vertical] and [slug] exactly.

- Missing-page behavior must be deterministic:

  - Either hard 404

  - Or explicit fallback registry

- No guessing.

Persistence:
- Optional cookie only if locale-less entry routes are later introduced.

## Theme (light/dark)

Canonical source:
- Cookie: theme = "light" | "dark"

Resolution order:
1) Valid cookie

2) System preference (prefers-color-scheme)

3) Explicit default

Application:
- Applied at <html> root as class and optional data-theme

- Must occur before paint

Allowed values:
- Theme: light | dark

- Locale: de | en

Forbidden:
- Extra themes

- Per-section theming

- URL-based theming
