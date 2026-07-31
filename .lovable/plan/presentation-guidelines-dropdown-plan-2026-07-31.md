# Presentation Guidelines Dropdown Plan

## Goal
Convert the static "Oral Presentation Guidelines" and "Poster Presentation Guidelines" headings on `/presentation-guidelines` into interactive dropdown/accordion panels. Users will see the two headings first and click to expand the relevant content below.

## Design Direction
Follow the existing Mardi Gras-meets-MedTech visual identity and the Accordion pattern already used on `/registration-information` and `/abstract-topics`:

- Use the project's `shadcn/ui` `Accordion` component.
- Wrap each major section in a rounded card (`rounded-xl`, `border`, `shadow-sm`, `bg-card`) with comfortable padding.
- Style each trigger with the conference primary purple (`text-primary`, `font-serif`, `text-2xl`) and a gold chevron indicator that rotates on open.
- Add a subtle gold top border or accent to reinforce the brand.
- Keep the inner typography and lists unchanged so the existing content fidelity is preserved.
- Use `type="single" collapsible` so only one section is open at a time and either can be closed.

## Implementation Steps

1. **Import Accordion primitives** in `src/pages/PresentationGuidelines.tsx`.
2. **Restructure content** into two `AccordionItem` blocks:
   - `oral-presentation-guidelines`
   - `poster-presentation-guidelines`
3. **Move existing headings** (`ORAL PRESENTATION GUIDELINES`, `POSTER PRESENTATION GUIDELINES`) into `AccordionTrigger` elements.
4. **Move existing body content** (intro paragraphs, Format Requirements, Speaker Ready Room, Poster Sessions, etc.) into `AccordionContent` elements without editing the text.
5. **Apply styling**:
   - Container: `max-w-4xl mx-auto` (kept).
   - Accordion wrapper: `space-y-4`.
   - Items: `border border-border rounded-xl overflow-hidden bg-card shadow-sm`.
   - Trigger: `px-6 py-5 text-left text-2xl font-bold font-serif text-primary hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]]:bg-muted/20`.
   - Content: `px-6 pb-8 pt-0 text-foreground`.
6. **Verify** the page renders correctly, both sections expand/collapse, and the build passes.

## Files to Change
- `src/pages/PresentationGuidelines.tsx`

## Out of Scope
- No changes to page header, SEO, navigation, or route structure.
- No edits to the actual guideline text.
