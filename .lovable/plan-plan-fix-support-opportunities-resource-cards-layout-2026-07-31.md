# Plan: Fix Support Opportunities Resource Cards Layout

## Goal
On the `/support-opportunities` page, the two resource cards ("Sponsorship & Exhibition Prospectus" and "Live Exhibition Floorplan") are currently rendered as a single merged/stacked element. Make them distinct, side-by-side cards with proper spacing.

## Current issue
In `src/pages/SupportOpportunities.tsx`, the first resource card's outer `<div>` is not closed before the second card starts. As a result, the second card is nested inside the first, collapsing the grid gap and making them appear as one tall card.

## Proposed change
1. Add the missing closing `</div>` for the first resource card immediately after its inner `p-5` content block ends.
2. Keep the existing `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` container so cards remain responsive and maintain their 8-unit gap.
3. Verify the visual result in the preview: two separate cards on desktop, stacked on mobile, with consistent spacing.

## Files to edit
- `src/pages/SupportOpportunities.tsx`

## Validation
- Run a production build to ensure no JSX syntax errors.
- Check the `/support-opportunities` preview to confirm the cards are visually separated.