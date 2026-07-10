## Late Breaking Abstract Pages

### 1. Public "Coming Soon" pages (added to navbar)

Create two thin pages that reuse the existing `ComingSoon` template with `SEOHead`:

- `src/pages/LateBreakingAbstractTopics.tsx` → title "Late Breaking Abstract Topics"
- `src/pages/LateBreakingAbstractSubmission.tsx` → title "Late Breaking Abstract Submission"

Both render only the standard Coming Soon block (same pattern as `PlenaryKeynoteSpeakers.tsx`).

### 2. Hidden preview pages (NOT in navbar, `noindex`)

- `src/pages/PreviewLateBreakingAbstractTopics.tsx`
  - `SEOHead` with `noindex`, `PageHeader` "Late Breaking Abstract Topics"
  - Container `max-w-4xl mx-auto py-8 px-4`
  - `<ul className="list-disc ml-6 space-y-2 text-lg text-foreground">` containing the 19 provided topic strings verbatim

- `src/pages/PreviewLateBreakingAbstractSubmission.tsx`
  - `SEOHead` with `noindex`, `PageHeader` "LATE BREAKING ABSTRACT SUBMISSION"
  - Structure mirrors existing `CallForAbstracts.tsx` styling (cards, alert box, section headings `h2 text-2xl font-bold text-primary mt-8 mb-4 border-b pb-2`)
  - Sections:
    - Intro paragraph
    - Abstract Consideration (paragraph + accent alert box with LBA deadline **August 17, 2026, 11:59 PM Central Time**)
    - Centered gold CTA `Button` "Click Here for ABSTRACT SUBMISSION" (href `#` placeholder — no submission URL was provided)
    - Abstract Guidelines list (8 bullets verbatim)
    - Submission Instructions → Abstract Preparation with all bolded titles + descriptions (Title, Topic & Optional Topics with **HERE** linking to `/late-breaking-abstract-topics`, Presentation Preference, Authors, Abstract Body, Figure, Demographics, Disclosure Information, Preview & Submit)
    - Abstract Withdrawals, Registration Requirements, For More Information (3-column card grid like CallForAbstracts, `mrodic@kenes.com`)

### 3. Routing (`src/App.tsx`)

Add four routes above the catch-all:
- `/late-breaking-abstract-topics` → `LateBreakingAbstractTopics`
- `/late-breaking-abstract-submission` → `LateBreakingAbstractSubmission`
- `/preview-late-breaking-abstract-topics` → `PreviewLateBreakingAbstractTopics`
- `/preview-late-breaking-abstract-submission` → `PreviewLateBreakingAbstractSubmission`

### 4. Navbar (`src/components/Header.tsx`)

Under the existing **Abstract Submission** menu, append two children (public routes only):
- "Late Breaking Abstract Topics" → `/late-breaking-abstract-topics`
- "Late Breaking Abstract Submission" → `/late-breaking-abstract-submission`

Preview routes are NOT linked anywhere.

### Notes / assumptions

- Content is copied verbatim from your message (including "August 17, 2026, 2025" in the alert — kept as-is unless you want it corrected to just "August 17, 2026").
- The CTA button has no target URL yet, so it will link to `#`. Share the submission portal URL and I'll wire it in.
