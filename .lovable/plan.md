## Problem

The embedded PDF on `/program-at-a-glance` is being blocked by Opera (and likely other ad blockers) with `ERR_BLOCKED_BY_CLIENT`. This happens because the `<iframe>` element is heuristically flagged by ad blockers (iframes loading anything are common ad surfaces, and the path/filename can also trigger filters).

## Fix

Replace the `<iframe>` with a more resilient embed strategy and add a graceful fallback so users always have a way to access the PDF.

### Changes to `src/pages/ProgramAtAGlance.tsx`

1. Swap the `<iframe>` for an `<object>` element pointing to the same PDF (`type="application/pdf"`). `<object>` is far less likely to be blocked by ad/tracker filter lists than `<iframe>`.
2. Inside the `<object>`, include built-in fallback content that renders if the browser/extension cannot display the PDF inline:
   - A short message: "Your browser or an extension is preventing the PDF from displaying inline."
   - Two action buttons: "Open PDF in new tab" (target `_blank`) and "Download PDF".
3. Keep the existing top "TERMIS-AM 2026 Program at a Glance" download button unchanged so the PDF is always one click away even if the embed fails entirely.
4. Preserve current container styling (rounded, border, shadow, responsive height `h-[800px] md:h-[1000px]`).
5. Add a small helper note under the viewer: "If the document does not load, please disable your ad blocker for this page or use the buttons above to open/download it."

### Why not Google Docs viewer / PDF.js

- Google Docs viewer (`https://docs.google.com/gview`) is itself frequently blocked by privacy filters and adds an external dependency.
- A full PDF.js integration (e.g. `react-pdf`) would solve blocking definitively but adds a heavy dependency for a single page. The `<object>` + fallback approach resolves the reported issue with minimal change and no new dependencies.

### Out of scope

- No changes to the PDF asset, routing, or other pages.
- No styling/theme changes beyond what's required for the fallback block.