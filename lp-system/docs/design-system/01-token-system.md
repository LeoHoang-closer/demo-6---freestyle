# Token System — Canonical Definitions

Tokens MUST exist for:
- Spacing: section, block, element, grid gaps, container padding
- Typography: H1/H2/H3/body/label
- Color: semantic variables (bg/text/border) + brand accents (CTA)
- Radius: one radius family
- Shadow: limited elevation steps
- Motion: duration/easing/distance

Rules:
- Components MUST use tokens only.
- Tokens MUST be semantic, not raw.
- Theme changes MUST be implemented by swapping CSS variables at root.
- Any new token requires a design-system extension.

Forbidden:
- Arbitrary Tailwind values
- Inline styles
- Mixed token families in one component

