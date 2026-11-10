# New private PDF link: /2026-abstract.pdf

Goal: the attached PDF opens directly at **https://am2026.termis.org/2026-abstract.pdf**, hidden from menus and search engines, reachable only by people who have the link.

## What will happen
- The attached PDF (about 8.7 MB) is uploaded to the site's file storage.
- Visiting `/2026-abstract.pdf` sends the visitor straight to the PDF (same approach as the existing `/termis-am-abstracts-2026` link, which stays untouched).
- The link does not appear in the menu, footer, or sitemap.
- Search engines are told not to index it (noindex, plus a robots.txt disallow line).

## Limitation
- This is a hidden link, not password protection: anyone who receives the URL can open and share it.

## Technical details
- `lovable-assets create --file /mnt/user-uploads/2026-abstract-2.pdf --filename 2026-abstract.pdf` → `src/assets/2026-abstract.pdf.asset.json`.
- New page `src/pages/Abstract2026PdfRedirect.tsx` (copy of AbstractsPdfRedirect using the new pointer, `window.location.replace`, noindex meta).
- Route `/2026-abstract.pdf` in `src/App.tsx`; add `Disallow: /2026-abstract.pdf` to `public/robots.txt`. Not added to sitemap or nav.
- Verify: build OK, served CDN file byte-identical to the upload, route redirects in Playwright.
