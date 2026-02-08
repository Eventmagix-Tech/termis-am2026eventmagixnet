
# Master Prompt Generator for Conference Website Template

## What I Found

After analyzing every component, page, layout, and data structure in the current TERMIS-AM 2026 project, here is a summary of the architecture:

**Homepage Flow (7 sections):**
1. Hero Section (full-width banner with animated SVG waves, glowing gold line, shimmer effects)
2. Info Cards (4 highlight cards linking to key pages)
3. Welcome Letter + Co-Chairs (split layout)
4. Key Dates (3 milestone cards)
5. Timeline (horizontal/vertical milestone history)
6. Venue & Location (image + highlights grid)
7. Newsletter Signup (compact CTA bar)

**Page Types Identified:**
- Full content pages (General Info, Visa Info, Welcome Letter, Contact Us, Explore City, Session Submission)
- Placeholder/Coming Soon pages (Committees, Hotel, Program at-a-Glance, Promotional Toolkit)
- Registration placeholder page
- Support/Sponsorship inquiry page
- 404 page

**Shared Patterns:**
- Every inner page uses: Header + gradient hero banner + white content area + Footer
- Consistent card styling with `bg-muted/50`, `shadow-card`, `border-accent/10`
- Framer Motion scroll animations on most sections
- Decorative motifs (fleur-de-lis in this case) used as visual accents
- Custom button variants (gold, purple, emerald, hero, gold-outline)

## The Deliverable

I will generate a single, comprehensive "Master Prompt" code block that abstracts all specific content into placeholders while preserving the exact structure, design system, navigation, component architecture, and animation patterns. This prompt can be pasted into Lovable (or any AI builder) to recreate the same conference website for any event.

## Technical Approach

The master prompt will cover:
1. **Sitemap and routing** -- all 18+ routes with their purpose
2. **Homepage layout** -- exact section order with component descriptions
3. **Inner page template** -- the shared layout pattern
4. **Design system** -- CSS variables, color tokens, typography, button variants
5. **Navigation structure** -- dropdown menus, mobile hamburger, social links
6. **Footer structure** -- dual logos, social links, legal links, powered-by credit
7. **Animation system** -- Framer Motion patterns, SVG wave dividers, shimmer effects
8. **Data architecture** -- mock data arrays for dates, contacts, speakers, timeline
9. **Tech stack** -- React, Vite, Tailwind, Shadcn UI, Framer Motion, React Router, Lucide icons
10. **Responsive design** -- mobile-first breakpoints, collapsible navigation

No code files will be modified -- this is a text deliverable only.
