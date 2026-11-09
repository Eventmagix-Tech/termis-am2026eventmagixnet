# Hidden direct-link PDF: TERMIS-AM Abstract 2026

## What you get
- A private link: **https://am2026.termis.org/termis-am-abstracts-2026**
- Opening the link takes the visitor straight to the PDF (no page in between).
- The link does not appear in the menu, footer, homepage, sitemap or search engines.

## Steps
1. Upload the attached `TERMIS-AM-Abstract_2026.pdf` to the site's file storage (CDN), same way as the other PDFs.
2. Add a hidden page at `/termis-am-abstracts-2026` that immediately redirects the browser to the PDF.
3. Mark it "noindex" so search engines skip it; leave it out of the sitemap and the AI-crawler file.
4. Check that the link opens the exact uploaded PDF.

## Technical details
- `lovable-assets create --file /mnt/user-uploads/TERMIS-AM-Abstract_2026.pdf --filename TERMIS-AM-Abstract-2026.pdf` -> `src/assets/TERMIS-AM-Abstract-2026.pdf.asset.json`.
- New `src/pages/AbstractsPdfRedirect.tsx`: `useEffect(() => window.location.replace(pdf.url))`, Helmet `robots=noindex,nofollow`, small fallback "Open PDF" link.
- Route registered in `App.tsx` only; no Header/Footer/sitemap.xml/llms.txt entries.
- Note: anyone holding the link can open/share the PDF; it is unlisted, not password-protected.
