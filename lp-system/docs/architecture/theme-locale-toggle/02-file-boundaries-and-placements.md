# File Boundaries + Placement

## Files to add

- lp-system/config/preferences.ts

- lp-system/components/ui/ThemeToggle.tsx

- lp-system/components/ui/LocaleToggle.tsx

## Files to modify

- app/layout.tsx

- lp-system/components/Navbar.tsx

## Responsibilities

preferences.ts:
- Allowed values

- Cookie keys

- Defaults

ThemeToggle:
- Client-only

- Toggle theme

- Write cookie

- Update <html> class/attr

LocaleToggle:
- Client-only

- Compute alternate locale route

- Navigate deterministically

Navbar:
- Render toggles as utilities

- Preserve existing structure

Invariants:
- Exactly one Navbar

- No new navbar sections

- Shell order unchanged
