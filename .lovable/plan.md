# AM Chapter Awards – 2026 Awardees

Replace the current content of /am-chapter-awards (the "click here" link and June 29 deadline text) with a "Meet the 2026 TERMIS-AM Awardees" section.

## Content (verbatim from the document, in document order)
1. Senior Scientist Award — Helen H. Lu
2. Innovation/Commercialization Award — Robert Guldberg
3. Educational, Training and Outreach Award — Tomás González-Fernández
4. Outstanding Postdoc Award — Vasiliki "Aliki" Kolliopoulos
5. Young Investigator Award — Ritu Raman
6. Mary Ann Liebert, Inc. Outstanding Student Award — Dana Wilkins

Each bio is copied word for word from the document (Ritu Raman's paragraph joined across the page break).

## Design (modelled on the termis.org recipients page)
- Centered H2 "Meet the 2026 TERMIS-AM Awardees".
- One card per awardee, stacked vertically: award name as a gold uppercase label, round/portrait photo on the left, name (bold, primary color) and bio on the right; on mobile the photo stacks above the text.
- Photo framing tuned per person (object-position) so heads aren't cropped.

## Technical details
- Upload the 6 uploaded photos via lovable-assets to `src/assets/am-chapter-awards/*.asset.json`.
- Keep the awardee data in a separate array (`src/data/amChapterAwardees.ts`) apart from the page markup.
- Rewrite `src/pages/AmChapterAwards.tsx`; update SEO description.
- Verify with Playwright (desktop + mobile), routing CDN images to local files.
- Save a memory note for the page.
