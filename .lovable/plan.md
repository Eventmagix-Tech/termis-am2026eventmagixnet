

## Problem
Button text "Sponsorship & Exhibition Prospectus" is wrapping to multiple lines. User wants it on a single line.

## Fix
Revert the wrapping overrides and use `whitespace-nowrap` (the default button behavior). Reduce font size slightly with `text-sm` so it fits in one line within the card width.

### File Change
**`src/pages/SupportOpportunities.tsx`** line 36:
```tsx
<Button variant="gold" className="w-full text-sm" asChild>
```
Remove `h-auto py-3 !whitespace-normal text-center` — let the default button styles handle single-line layout with `whitespace-nowrap`.

