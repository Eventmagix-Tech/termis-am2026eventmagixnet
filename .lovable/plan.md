## WCAG Compliance Fixes

Implement accessibility improvements in 4 prioritized steps. No visual/brand changes — purely a11y and semantic markup.

### Step 1 — Critical fixes

- `src/components/Header.tsx`
  - Add `aria-label` ("Open menu" / "Close menu") and `aria-expanded={isOpen}` + `aria-controls` to the mobile menu toggle button.
  - Add `aria-label` to the two mobile social icon links (X, LinkedIn).
  - Add `aria-expanded`, `aria-haspopup="true"` to desktop submenu trigger buttons.
- `src/components/NewsletterSection.tsx`
  - Add a visually-hidden `<label htmlFor="newsletter-email">` (or `aria-label="Email address"`) on the email input.
  - Bump placeholder opacity from `/50` to `/80` for contrast.
- Wrap decorative `⚜` fleur-de-lis glyphs in `<span aria-hidden="true">` in `InfoCards.tsx`, `PlenarySpeakersSection.tsx`, `GuestSocietyAnnouncementsSection.tsx`.

### Step 2 — Desktop Header keyboard support

Replace the custom hover-only dropdowns in `src/components/Header.tsx` with the shadcn/Radix `NavigationMenu` primitives that are already imported. This gives:
- Keyboard focus open/close
- Escape to dismiss
- Proper ARIA roles, `aria-expanded`, `aria-controls`
- Click-to-open for touch devices

Visual styling is preserved by passing existing Tailwind classes to `NavigationMenuTrigger` / `NavigationMenuContent`.

### Step 3 — Page-level semantics & motion

- Add a "Skip to main content" link as the first focusable element in `Header.tsx`, jumping to `#main`. Style as visually hidden until focused.
- Add `id="main"` to the `<main>` element in `Index.tsx` and other top-level page files.
- Add an `<h1>` to the homepage (in `HeroSection`, visually hidden if needed) — currently the home page starts at `<h2>`.
- Wrap continuous Hero animations in `src/components/HeroSection.tsx` with a `prefers-reduced-motion: reduce` guard using a `useReducedMotion()` hook from framer-motion, disabling the infinite shimmer/wave/glow loops.

### Step 4 — Tap targets & contrast sweep

- Increase mobile menu toggle button to `min-h-11 min-w-11`.
- Increase header social icon links to `min-h-11 min-w-11` (mobile) with centered icon.
- Audit usages of `text-accent` (gold) on white/light backgrounds across pages and switch to `text-primary` or darken token where contrast < 4.5:1.
- Bump `text-white/70` and `text-primary-foreground/70` body copy to `/85` where it appears as readable text (not decorative).

### Out of scope

- No content rewrites, no brand color changes, no layout redesigns.
- Existing animations are preserved, only gated by user preference.

### Verification

After implementation, spot-check via keyboard navigation (Tab through Header, Esc closes submenus), screen reader announcement of menu button and newsletter input, and a quick contrast check on updated tokens.
