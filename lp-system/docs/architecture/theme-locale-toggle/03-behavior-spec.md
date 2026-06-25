# Behavior Specification

## Theme Toggle

Action:
- Switch between light and dark

Effects:
- Update cookie

- Update <html> class (single theme only)

- Immediate application

Accessibility:
- Semantic button

- Deterministic aria-label

- Keyboard operable

- Focus visible

## Locale Toggle

Action:
- Navigate to same route under other locale

Rules:
- Preserve vertical and slug

- Deterministic failure behavior

- No implicit fallbacks

Accessibility:
- Semantic navigation element

- Keyboard and screen-reader compatible

Navbar placement order:
1) Locale toggle

2) Theme toggle

3) Primary CTA
