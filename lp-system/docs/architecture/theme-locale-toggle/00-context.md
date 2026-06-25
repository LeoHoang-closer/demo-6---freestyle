# Context — Theme + Locale Toggles

Goal:
Add two user-controlled preferences across all LP pages with zero drift:

1) Theme toggle: light | dark (manual, persistent)

2) Locale toggle: de | en (manual, deterministic)

Non-goals:
- No redesign.
- No new sections.
- No URL changes for theme.
- No per-page custom logic.

Success Criteria:
- Theme selection persists across page loads and routes.
- Locale toggle switches locale while preserving vertical + slug.
- Deterministic behavior: same inputs -> same DOM class/attrs -> same render.
- No violations of global navbar + section architecture.

Architectural Constraints:
- Landing pages use global shell: Navbar -> Main Sections -> Final CTA -> Footer.
- Navigation is a single component with deterministic ordering.
- No assumptions or inferred behavior.
