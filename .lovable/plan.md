

## Promotional Toolkit Page — Add 13 New Branding Materials

### Summary
Expand the Promotional Toolkit page with all 13 uploaded files, organized into categories with thumbnails and download buttons. The existing Congress Posters section stays unchanged.

### Files to Add

**Web Banners (10 files from first upload):**
- 300x100, 300x250, 600x100, 640x150, 650x650, 728x90, 900x90, 1170x200, 1200x445, 1600x900

**Additional Banners (2 files from second upload):**
- 1920x450, 2000x445

**PowerPoint Template (1 file):**
- TERMIS-AM_2026_PPT.pptx

### Implementation Steps

1. **Copy all 13 files to `public/downloads/`** so they can be downloaded directly. Use original filenames.

2. **Copy the 12 banner images to `src/assets/`** as thumbnails (they'll be imported for display). The PPTX file only goes to `public/downloads/`.

3. **Update `src/pages/PromotionalToolkit.tsx`:**
   - Keep the existing "Congress Posters" section as-is
   - Add a new **"Web Banners"** section below it with all 12 banner images displayed in a responsive grid, each showing a thumbnail preview, dimensions label, and download button
   - Add a new **"Presentation Template"** section with a card for the PowerPoint file (using a Lucide `FileDown` or `Presentation` icon as placeholder since we can't preview PPTX), with a download button
   - Import all 12 banner images from `src/assets/`
   - Group banners logically: small banners (300-728px wide) and large banners (900px+ wide) displayed in the grid with appropriate column counts

4. **No changes** to routing, navigation, Header, Footer, or any other page.

### Layout Design
- **Web Banners section**: Use a 3-column grid on desktop (md:grid-cols-3) for smaller banners, with wider banners spanning full width or 2 columns as appropriate. Each card shows the banner thumbnail with dimensions overlay, title, and download button.
- **Presentation Template section**: Single card with icon, title, description, and download button.
- All sections use the same card styling pattern as the existing Congress Posters section.

