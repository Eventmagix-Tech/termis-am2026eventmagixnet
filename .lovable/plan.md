

## Problem

The download button text "Sponsorship & Exhibition Prospectus" is visually overflowing and not sitting properly within its button container, as visible in the screenshot. The `asChild` pattern with `<a>` tag and the flex layout from `inline-flex items-center` in the button base styles is preventing proper text wrapping — the icon and text are on a single flex row that doesn't wrap.

## Fix

In `src/pages/SupportOpportunities.tsx` (line 36), update the Button to use `flex-wrap` or switch the icon/text layout so wrapping works correctly. Also ensure the `<a>` tag inherits the wrapping styles:

- Add `[&>a]:flex [&>a]:flex-wrap [&>a]:justify-center [&>a]:items-center` or simpler: make the icon use `shrink-0` and ensure the anchor itself allows wrapping.
- The root cause is likely that the `<a>` tag (via `asChild` / `Slot`) gets `inline-flex items-center gap-2 whitespace-nowrap` from `buttonVariants` base — the `whitespace-nowrap` in the base CVA clashes with the `whitespace-normal` override because of specificity or the text node inside `<a>`.

**Solution**: Override with `!whitespace-normal` and add `flex-wrap` to allow the content to wrap. Also ensure the Download icon has `shrink-0` (already set via `[&_svg]:shrink-0` in base).

### File Change

**`src/pages/SupportOpportunities.tsx`** line 36:
```tsx
<Button variant="gold" className="w-full h-auto py-3 !whitespace-normal text-center [&>*]:justify-center" asChild>
```

This single change forces `whitespace-normal` with `!important` to override the base `whitespace-nowrap` from the button CVA, allowing the text to wrap properly within the button.

