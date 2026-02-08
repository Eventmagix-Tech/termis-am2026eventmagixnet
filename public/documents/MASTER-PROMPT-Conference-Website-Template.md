# Master Prompt — Conference Website Template

> **Usage:** Copy the entire prompt below (starting from the `---` divider) and paste it into Lovable (or any AI builder) to generate a complete, production-ready conference website. Replace every `[PLACEHOLDER]` with your event-specific content.

---

```
Create a professional conference website with the following specifications.
This is a multi-page, single-page-application (SPA) for an academic/scientific conference. 
Build it exactly as described — section by section, page by page, component by component.

═══════════════════════════════════════════════════════════════
1. EVENT CONFIGURATION (Replace all placeholders)
═══════════════════════════════════════════════════════════════

Event Name:            [EVENT_NAME] (e.g., "TERMIS-AM 2026")
Event Full Title:      [EVENT_FULL_TITLE] (e.g., "Annual Conference & Exhibition")
Event Theme/Slogan:    [EVENT_THEME] (e.g., "Bench. Chip. Clinic. Where Y'at in regeneration?")
Event Dates:           [EVENT_DATES] (e.g., "November 15-18, 2026")
Event City:            [EVENT_CITY] (e.g., "New Orleans, LA")
Event Venue:           [EVENT_VENUE_NAME] (e.g., "Hilton New Orleans Riverside")
Event Venue Address:   [EVENT_VENUE_ADDRESS] (e.g., "Two Poydras Street, New Orleans, Louisiana 70130")
Event Venue Phone:     [EVENT_VENUE_PHONE]
Event Venue URL:       [EVENT_VENUE_URL]
Event Hashtag:         [EVENT_HASHTAG] (e.g., "#TERMISAM2026")
Social Media X URL:    [SOCIAL_X_URL]
Social Media LinkedIn: [SOCIAL_LINKEDIN_URL]

Organization Name:     [ORG_NAME] (e.g., "TERMIS Americas")
Secretariat Name:      [SECRETARIAT_NAME] (e.g., "Kenes Group, Office: Kenes M+")
Copyright Line:        [COPYRIGHT] (e.g., "© 2026 TERMIS Americas. All rights reserved.")
Privacy Policy URL:    [PRIVACY_URL]
Cookie Policy URL:     [COOKIE_URL]
Code of Conduct URL:   [CODE_OF_CONDUCT_URL]

Hero Banner Image:     [HERO_IMAGE] — A single wide key visual (JPG/PNG, ~1600x600+) 
Organization Logo:     [ORG_LOGO] — Main organization logo (PNG)
Secretariat Logo:      [SECRETARIAT_LOGO] — Organizing secretariat logo (PNG)
Powered By Logo:       [POWERED_BY_LOGO] — Platform/company logo for footer (PNG)
Powered By URL:        [POWERED_BY_URL]
Venue Photo:           [VENUE_PHOTO] — Photo of the venue or city (JPG)

═══════════════════════════════════════════════════════════════
2. COLOR PALETTE & DESIGN SYSTEM
═══════════════════════════════════════════════════════════════

This site uses a THREE-COLOR PALETTE with a neutral base:

Primary Color:   [PRIMARY_HSL] (e.g., "280 60% 14%" — deep purple)
  → Used for: headers, nav text, section backgrounds, card titles
  → Foreground: [PRIMARY_FG_HSL] (e.g., "40 33% 93%" — parchment)

Secondary Color: [SECONDARY_HSL] (e.g., "153 100% 15%" — emerald green)
  → Used for: alternate section backgrounds, secondary buttons, badge accents
  → Foreground: [SECONDARY_FG_HSL] (e.g., "40 33% 93%")

Accent Color:    [ACCENT_HSL] (e.g., "43 64% 52%" — gold)
  → Used for: CTAs, icons, hover effects, decorative elements, wave dividers
  → Foreground: [ACCENT_FG_HSL] (e.g., "280 60% 14%")

Background:      [BG_HSL] (e.g., "40 33% 93%" — parchment/off-white)
Card:            "0 0% 100%" (white)
Muted:           [MUTED_HSL] (e.g., "40 20% 88%")
Muted Foreground:[MUTED_FG_HSL] (e.g., "280 30% 35%")
Border:          [BORDER_HSL] (e.g., "40 25% 82%")

Custom Named Colors (for gradient bars on cards):
  [COLOR_NAME_1]-deep: [HEX] (e.g., purple-deep: "#2E1236")
  [COLOR_NAME_1]-light: [HEX] (e.g., purple-light: "#4A2C5A")
  [COLOR_NAME_2]-deep: [HEX] (e.g., emerald-deep: "#004d2b")
  [COLOR_NAME_2]-light: [HEX] (e.g., emerald-light: "#006d3b")
  [COLOR_NAME_3]: [HEX] (e.g., gold: "#D4AF37")
  [COLOR_NAME_3]-light: [HEX]
  [COLOR_NAME_3]-dark: [HEX]

CSS Variables to define in index.css under :root:
  --background, --foreground, --card, --card-foreground, --popover, --popover-foreground,
  --primary, --primary-foreground, --secondary, --secondary-foreground, --accent, --accent-foreground,
  --muted, --muted-foreground, --destructive, --destructive-foreground, --border, --input, --ring, --radius

Custom CSS Variables:
  --gradient-hero: linear-gradient(135deg, hsl(primary) 0%, hsl(primary-light) 30%, hsl(secondary-light) 70%, hsl(secondary) 100%)
  --gradient-gold: linear-gradient(135deg, hsl(accent) 0%, hsl(accent-light) 50%, hsl(accent) 100%)
  --shadow-gold: 0 4px 20px -4px hsla(accent, 0.4)
  --shadow-card: 0 4px 24px -8px hsla(primary, 0.15)

Also include a .dark {} theme block with inverted values.

═══════════════════════════════════════════════════════════════
3. TYPOGRAPHY
═══════════════════════════════════════════════════════════════

Font Pairing:
  Display/Headings: [HEADING_FONT] (e.g., "Playfair Display", serif)
  Body Text:        [BODY_FONT] (e.g., "Inter", sans-serif)

Import via Google Fonts in index.css:
  @import url('https://fonts.googleapis.com/css2?family=[HEADING_FONT]:wght@400;500;600;700&family=[BODY_FONT]:wght@300;400;500;600;700&display=swap');

In tailwind.config.ts:
  fontFamily: {
    sans: ["[BODY_FONT]", "system-ui", "sans-serif"],
    serif: ["[HEADING_FONT]", "Georgia", "serif"],
  }

In index.css base layer:
  body { @apply font-sans; }
  h1, h2, h3, h4, h5, h6 { @apply font-serif; }

═══════════════════════════════════════════════════════════════
4. TECH STACK & DEPENDENCIES
═══════════════════════════════════════════════════════════════

Framework:     React 18 + TypeScript + Vite
Routing:       react-router-dom v7 (BrowserRouter, Routes, Route)
Styling:       Tailwind CSS + tailwindcss-animate
UI Library:    Shadcn UI (all components via @radix-ui primitives)
Animations:    framer-motion (scroll-triggered, entrance, hover)
Icons:         lucide-react
State:         React useState/useEffect (no global state needed)
Forms:         react-hook-form + zod (for newsletter, contact)
Toast:         Sonner + Shadcn toast
Queries:       @tanstack/react-query (for future API integration)

═══════════════════════════════════════════════════════════════
5. SITEMAP & ROUTING (App.tsx)
═══════════════════════════════════════════════════════════════

Route                              | Page Component            | Type
───────────────────────────────────┼───────────────────────────┼─────────────
/                                  | Index                     | Homepage
/welcome-letter                    | WelcomeLetter             | Content
/general-information               | GeneralInformation        | Content
/visa-information                  | VisaInformation           | Content
/explore-[city-slug]               | ExploreCityName           | Content
/key-dates                         | KeyDates                  | Content
/committees                        | Committees                | Placeholder
/session-workshop-submission       | SessionWorkshopSubmission  | Content
/program-at-a-glance               | ProgramAtAGlance          | Placeholder
/detailed-program                  | DetailedProgram           | Content (tabbed)
/pre-conference-workshops          | PreConferenceWorkshops    | Placeholder
/plenary-keynote-speakers          | PlenaryKeynoteSpeakers    | Placeholder
/registration-information          | RegistrationInformation   | Content
/hotel-accommodation               | HotelAccommodation        | Placeholder
/support-opportunities             | SupportOpportunities      | Content
/confirmed-sponsors                | ConfirmedSponsors         | Placeholder
/promotional-toolkit               | PromotionalToolkit        | Placeholder
/students-young-investigators      | ComingSoon                | Placeholder
/contact-us                        | ContactUs                 | Content
*                                  | NotFound                  | 404

App.tsx wraps everything in:
  <QueryClientProvider> → <TooltipProvider> → <Toaster /> → <Sonner /> → <BrowserRouter> → <Routes>

═══════════════════════════════════════════════════════════════
6. NAVIGATION HEADER (Header.tsx — Fixed, 255 lines)
═══════════════════════════════════════════════════════════════

Structure:
  - Fixed at top (z-50), white/95 backdrop-blur, border-b with accent/20, shadow-sm
  - Height: h-16 mobile, h-20 desktop
  - Three-column layout: Logo | Nav | Hashtag+Social

Logo (left):
  - Links to "/" 
  - Image: [ORG_LOGO], h-10 mobile, h-14 desktop

Desktop Navigation (center, hidden on lg:):
  - Uses custom hover-state dropdowns (NOT Radix NavigationMenuContent)
  - State: openDesktopMenu tracked via onMouseEnter/onMouseLeave
  - Multi-word nav labels are stacked vertically (split at midpoint)
  - Dropdown: absolute positioned, 220px wide, white bg, shadow-lg, rounded-md

Nav Structure (array of objects):
  [
    {
      label: "[DROPDOWN_1_LABEL]",    // e.g., "Attendee Planning"
      children: [
        { label: "[CHILD_LABEL]", href: "/[route]" },
        // ... 4-6 children
      ]
    },
    {
      label: "[DROPDOWN_2_LABEL]",    // e.g., "Scientific Program"
      children: [
        { label: "[CHILD_LABEL]", href: "/[route]" },
        // Some children can be commented out with "// Hidden temporarily"
      ]
    },
    {
      label: "[DROPDOWN_3_LABEL]",    // e.g., "Registration & Hotel Info"
      children: [...]
    },
    {
      label: "[DROPDOWN_4_LABEL]",    // e.g., "Sponsors & Exhibitors"
      children: [...]
    },
    { label: "[TOP_LEVEL_1]", href: "/[route]" },  // No dropdown
    { label: "[TOP_LEVEL_2]", href: "/[route]" },
    { label: "Contact Us", href: "/contact-us" },
  ]

Hashtag + Social (right, hidden sm:):
  - [EVENT_HASHTAG] in accent color, font-semibold, text-sm
  - Below it: X (Twitter) SVG icon + LinkedIn icon (from lucide-react)
  - Both link to their respective social URLs

Mobile Navigation:
  - Hamburger toggle (Menu/X icons from lucide-react)
  - Full-width slide-down nav with accordion-style submenus
  - Each dropdown uses ChevronDown with rotate-180 animation
  - Social icons + hashtag repeated at bottom of mobile nav

═══════════════════════════════════════════════════════════════
7. HOMEPAGE LAYOUT (Index.tsx — 7 Sections)
═══════════════════════════════════════════════════════════════

<Header />
<main>
  <HeroSection />          — Section 1
  <InfoCards />             — Section 2
  <WelcomeLetterSection />  — Section 3
  <KeyDatesSection />       — Section 4
  <TimelineSection />       — Section 5
  <VenueSection />          — Section 6
  <NewsletterSection />     — Section 7
</main>
<Footer />

──── SECTION 1: HeroSection ────
Full-width banner with the key visual image.
Background effect: The key visual is duplicated behind itself, scaled 150%, blurred 40px, 
  saturated 1.2x to create a "mirrored expansion" effect.
Gradient overlays: 
  - from-background/30 via-transparent to-background/30 (vertical)
  - from-background/20 via-transparent to-background/20 (horizontal)
Floating shimmer: A repeating white/10 gradient that fades in/out every 3s with 5s delay.
Main image: Framer Motion entrance (opacity 0→1, y 40→0, scale 0.95→1), brightness 0.8→1.

SVG Gold Line Animation (over the key visual):
  - SVG overlay with viewBox="0 0 1000 400", preserveAspectRatio="xMidYMid slice"
  - A bezier curve path tracing left-to-right across the image
  - Static faint outline (strokeOpacity 0.15)
  - Animated glowing line using:
    - linearGradient (transparent → accent → accent → transparent)
    - Gaussian blur filter for glow effect
    - pathLength + pathOffset animation: line segment travels along path over 8s, loops with 2s delay
  - Secondary trailing glow (wider stroke, lower opacity, slight offset)

Animated SVG Wave Divider at bottom:
  - 3-layer wave SVG (viewBox="0 0 1440 120")
  - Back layer: fill-accent/20, morphing wave path (8s loop)
  - Middle layer: fill-accent/40, morphing wave path (6s loop)
  - Front layer: fill-background, morphing wave path (5s loop)
  - Creates smooth transition to next section

Subtle border glow: Pulsing inset box-shadow in accent color (4s loop)
Hover: scale 1.01 with radial gradient glow behind image

──── SECTION 2: InfoCards ────
Section heading: "[DECORATIVE_MOTIF] Get Involved [DECORATIVE_MOTIF]" + "Conference Highlights"
4-column grid (md:2, lg:4) of clickable cards.

Each card has:
  - Top gradient bar (h-2, bg-gradient-to-r using custom color pairs)
  - Icon (from lucide-react, 7x7, accent color) in accent/10 bg circle
  - Title (font-serif, xl), description (text-muted-foreground, sm)
  - Decorative motif in bottom-right corner (accent/10 → accent/30 on hover)
  - Framer Motion: staggered entrance (delay: index * 0.1)
  - Hover: -translate-y-2, shadow-card → shadow-card-hover

Card data (mock):
  [
    { title: "[CARD_1_TITLE]", description: "[CARD_1_DESC]", icon: FileText, href: "/[route]", color: "from-[color1]-deep to-[color1]-light" },
    { title: "[CARD_2_TITLE]", description: "[CARD_2_DESC]", icon: Info, href: "/[route]", color: "from-[color2]-deep to-[color2]-light" },
    { title: "[CARD_3_TITLE]", description: "[CARD_3_DESC]", icon: Calendar, href: "/[route]", color: "from-[color1]-deep to-[color2]-deep" },
    { title: "[CARD_4_TITLE]", description: "[CARD_4_DESC]", icon: Handshake, href: "/[route]", color: "from-[color3]-dark to-[color3]" },
  ]

──── SECTION 3: WelcomeLetterSection ────
Dark section: bg-gradient-to-br from-primary via-primary/95 to-secondary
2-column grid (lg):

Left column — Welcome Letter excerpt:
  - White card with shadow-card, border-accent/20
  - Greeting paragraph, 2-3 body paragraphs with italic theme quote
  - "Read More →" button linking to /welcome-letter
  - Decorative divider: horizontal lines + motif symbol

Right column — Conference Co-Chairs:
  - White card matching left column style
  - Title: "Conference Co-Chairs"
  - Array of co-chair objects: { name, title, photo, photoPosition }
  - Each rendered as: circular photo (w-20 h-20) + name + title
  - Staggered Framer Motion entrance
  - Decorative divider at bottom

──── SECTION 4: KeyDatesSection ────
Light gradient background: from-primary/5 via-secondary/5 to-primary/5
Section heading with decorative motifs.
3-column grid of date cards.

Each card:
  - Top accent bar (h-1.5, gradient from accent to [color3])
  - Icon in accent circle, title, description, bold date
  - Decorative motif bottom-right
  - Hover: -translate-y-2

"View all key dates →" link below grid.

Mock data:
  [
    { icon: FileText, title: "[DEADLINE_1_TITLE]", description: "[DESC]", date: "[DATE_1]" },
    { icon: Calendar, title: "[DEADLINE_2_TITLE]", description: "[DESC]", date: "[DATE_2]" },
    { icon: UserPlus, title: "[DEADLINE_3_TITLE]", description: "[DESC]", date: "[DATE_3]" },
  ]

──── SECTION 5: TimelineSection ────
Dark section: bg-hero-gradient (the 4-stop primary→secondary gradient)
Section heading: "[MOTIF] Our Journey [MOTIF]" + subtitle

Zigzag timeline layout:
  - Desktop: 5-column grid with alternating top/bottom positioning (index % 2)
  - Horizontal gold gradient line connecting nodes (hidden on mobile)
  - Mobile: vertical layout with gold gradient line on left

Each milestone node:
  - Circle (w-16 h-16, bg-white/10, border-4 accent, shadow-gold)
  - Emoji icon inside
  - Year badge below node (bg-accent, text-xs, rounded-full)
  - Title + description in primary-foreground color

Decorative SVG bridge illustration below timeline (cables + deck + pillars using gold gradient).

Mock data:
  [
    { year: "[YEAR_1]", title: "[MILESTONE_1]", description: "[DESC]", icon: "[EMOJI]" },
    { year: "[YEAR_2]", title: "[MILESTONE_2]", description: "[DESC]", icon: "[EMOJI]" },
    // ... 5 milestones total
  ]

──── SECTION 6: VenueSection ────
Light muted background: bg-muted/50
2-column layout (lg): Content left, Image right.

Left:
  - Section heading with motifs
  - Paragraph about the venue/city
  - 2x2 grid of highlight items (icon + title + description)
  - CTA button (variant="gold")

Right:
  - Rounded image with gradient overlay (from-primary/60)
  - Location badge overlay (MapPin icon + city name + motif)
  - Floating decorative motifs at corners

Highlight data (mock):
  [
    { icon: Music, title: "[HIGHLIGHT_1]", description: "[DESC]" },
    { icon: Utensils, title: "[HIGHLIGHT_2]", description: "[DESC]" },
    { icon: MapPin, title: "[HIGHLIGHT_3]", description: "[DESC]" },
    { icon: Calendar, title: "[HIGHLIGHT_4]", description: "[DESC]" },
  ]

──── SECTION 7: NewsletterSection ────
Compact CTA bar: py-8, bg-gradient-to-r from-primary via-primary/95 to-secondary
Horizontal layout (md:flex-row):
  - Left: Mail icon in accent circle + heading + subtitle
  - Right: Email input + Subscribe button (variant="gold", size="sm")
  - Post-submit: checkmark + "Thank you for subscribing!"
  - Toast notification on success/error

═══════════════════════════════════════════════════════════════
8. FOOTER (Footer.tsx)
═══════════════════════════════════════════════════════════════

White/95 backdrop-blur, border-t accent/20, shadow-sm.

Decorative SVG illustration in bottom-right corner (opacity-10):
  - [DECORATIVE_SVG_DESCRIPTION] (e.g., jazz band silhouette using basic SVG shapes)
  - Use simple geometric SVG shapes (ellipses, rects, circles, paths)

Layout (3 columns on md:):
  Left:   [SECRETARIAT_LOGO] (h-24) + "Conference Organizing Secretariat" + [SECRETARIAT_NAME]
  Center: Social media icon buttons (w-10 h-10 rounded-full, bg-accent/10)
  Right:  [ORG_LOGO] (h-20)

Bottom divider section:
  - Copyright line
  - Legal links: Privacy Policy, Cookie Policy, Code of Conduct, Contact
  - "Powered by" + [POWERED_BY_LOGO] (h-5)

═══════════════════════════════════════════════════════════════
9. INNER PAGE TEMPLATE (Shared Pattern)
═══════════════════════════════════════════════════════════════

Every inner page follows this exact layout:

```tsx
<div className="min-h-screen flex flex-col">           // or bg-background
  <Header />
  <main className="flex-1 pt-16 md:pt-20">             // offset for fixed header
    
    {/* Hero Banner */}
    <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          [PAGE_TITLE]
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          [PAGE_SUBTITLE]
        </p>
      </div>
    </section>

    {/* Content sections alternate between: */}
    {/* bg-white */}
    {/* bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 */}
    
    {/* Cards use: bg-card rounded-xl shadow-card border border-accent/10 */}
    {/* Info cards use: bg-muted/50 rounded-2xl shadow-lg */}
    {/* Icon circles: w-12 h-12 rounded-full bg-primary/10 */}

  </main>
  <Footer />
</div>
```

──── Placeholder/Coming Soon Page (ComingSoon.tsx) ────
Reusable component accepting `title` prop.
Uses the inner page template with a centered card:
  - Clock icon (w-16, h-16, text-accent)
  - "Coming soon, please check back shortly."
  - Subtitle paragraph

──── 404 Page (NotFound.tsx) ────
Full-screen bg-hero-gradient with centered content:
  - Decorative motif (text-6xl)
  - "404" in font-serif (text-6xl)
  - "Oops! This page doesn't exist"
  - Button (variant="gold") → Return to Home

═══════════════════════════════════════════════════════════════
10. CONTENT PAGE: General Information
═══════════════════════════════════════════════════════════════

After the hero banner:

Quick Info Cards (3 columns):
  - Conference Dates card (Calendar icon + bold date)
  - Destination card (MapPin icon + city name + "Explore [City] →" link)
  - Venue card (Building icon + venue name)

Venue Details:
  - Split card: left = venue photo, right = venue info (name, address, phone, website link)

Information Sections (stacked cards with left icon):
  - Language, Clothing, Invitation Letter, Liability & Insurance, Safety & Security
  - Each card: icon circle (bg-primary/10) + heading + paragraph(s)

═══════════════════════════════════════════════════════════════
11. CONTENT PAGE: Session & Workshop Submission
═══════════════════════════════════════════════════════════════

After the hero banner:

Introduction card:
  - Description paragraph
  - Deadline callout (accent/10 bg, Calendar icon, bold date)

Submission Type Cards (stacked, each with left colored border):
  - Card 1: border-l-primary, Users icon, "[TYPE_1_TITLE]", description, Download button
  - Card 2: border-l-secondary, FileText icon, "[TYPE_2_TITLE]", description, Download button
  - Card 3: border-l-accent, Wrench icon, "[TYPE_3_TITLE]", description, Download button

Submit button (centered, links to external submission system)
Contact section (bg-primary/5, Mail icon, email link)

═══════════════════════════════════════════════════════════════
12. CONTENT PAGE: Detailed Program (Tabbed Schedule)
═══════════════════════════════════════════════════════════════

Session types with semantic colors:
  plenary:    bg-primary text-primary-foreground
  syis:       bg-secondary text-secondary-foreground
  society:    bg-primary/80 text-primary-foreground
  scientific: bg-accent text-accent-foreground
  workshop:   bg-secondary/80 text-secondary-foreground
  social:     bg-gradient-to-r from-primary/60 to-secondary/60 text-white

Legend bar showing all session type colors.

Tab navigation (Shadcn Tabs):
  - One tab per day (e.g., "Sunday, November 15, 2026")
  - Sub-buttons for halls within each day
  - Changing day resets to default hall

Schedule items:
  - Colored cards matching session type
  - Time (font-semibold, min-w-[160px]) | Title (bold, lg) + Description + Hall location
  - Halls without content show "To be announced soon..." placeholder

Mock data structure:
  interface DaySchedule {
    date: string;
    dateLabel: string;
    halls: string[];
    items: ProgramItem[];
  }
  interface ProgramItem {
    time: string;
    title: string;
    description?: string;
    type: SessionType;
    hall?: string;
  }

═══════════════════════════════════════════════════════════════
13. BUTTON VARIANTS (button.tsx)
═══════════════════════════════════════════════════════════════

Extend Shadcn Button with custom variants using class-variance-authority:

  default:      bg-primary text-primary-foreground
  destructive:  bg-destructive text-destructive-foreground
  outline:      border border-input bg-background
  secondary:    bg-secondary text-secondary-foreground
  ghost:        hover:bg-accent hover:text-accent-foreground
  link:         text-primary underline-offset-4

  // Custom conference variants:
  gold:         bg-accent text-accent-foreground font-semibold shadow-gold hover:scale-105
  gold-outline: border-2 border-accent text-accent bg-transparent hover:bg-accent
  hero:         bg-accent text-primary font-bold shadow-gold-lg hover:scale-105
  purple:       bg-primary text-primary-foreground font-semibold shadow-purple hover:scale-105
  emerald:      bg-secondary text-secondary-foreground font-semibold hover:scale-105

Sizes: default(h-10), sm(h-9), lg(h-11), xl(h-14 text-lg), icon(h-10 w-10)

═══════════════════════════════════════════════════════════════
14. ANIMATION SYSTEM
═══════════════════════════════════════════════════════════════

A. Framer Motion (component-level):
  - Scroll-triggered entrances: whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
  - Staggered cards: delay: index * 0.1 (or 0.15)
  - Slide-in from sides: x: -30 → 0 (left), x: 30 → 0 (right)
  - Hover effects: whileHover={{ scale: 1.01 }}
  - Looping morphing SVG paths for waves

B. CSS Keyframes (index.css):
  float:       translateY 0→-10px→0 (3s infinite)
  pulse-glow:  box-shadow accent 20px→40px (2s infinite)
  flow-right:  translateX -20→0 (0.8s)
  fade-up:     translateY 20→0, opacity 0→1 (0.6s)
  shimmer:     background-position -200%→200% (2s infinite)
  dna-twist:   rotateY 0→360 (for decorative DNA elements)

C. Tailwind Keyframes (tailwind.config.ts):
  accordion-down/up, fade-in, slide-in-left/right, scale-in, flow-particle

D. Stagger classes: .stagger-1 through .stagger-5 (0.1s increments)

E. Utility classes:
  .text-gradient-gold  — gold gradient text
  .text-gradient-hero  — primary→secondary gradient text
  .bg-hero-gradient    — full hero gradient background
  .bg-gold-gradient    — gold shimmer background
  .shadow-gold         — gold glow shadow
  .shadow-card         — subtle card shadow
  .fleur-de-lis::before — decorative pseudo-element

═══════════════════════════════════════════════════════════════
15. DECORATIVE MOTIFS
═══════════════════════════════════════════════════════════════

Throughout the site, use a recurring decorative motif character:
  [MOTIF_CHARACTER] (e.g., "⚜" fleur-de-lis for New Orleans)

Used in:
  - Section headings: "[MOTIF] Section Title [MOTIF]"
  - Card corners: absolute bottom-4 right-4, accent/10 → accent/30 on hover
  - Dividers: horizontal lines flanking the motif symbol
  - 404 page: large motif above "404"
  - Floating decoration on venue image

Also include a thematic SVG illustration in the footer (opacity-10):
  [FOOTER_SVG_DESCRIPTION] (e.g., jazz band silhouette, city skyline, scientific equipment)

═══════════════════════════════════════════════════════════════
16. RESPONSIVE DESIGN
═══════════════════════════════════════════════════════════════

Breakpoints (Tailwind defaults):
  sm: 640px   — Show hashtag/social in header
  md: 768px   — 2-column grids, larger padding
  lg: 1024px  — Desktop nav visible, mobile nav hidden, 2-col layouts
  xl: 1280px  — Max container width
  2xl: 1400px — Container max-width with 2rem padding

Mobile-first approach:
  - Header collapses to hamburger menu below lg
  - All grids stack to single column on mobile
  - Timeline switches from horizontal to vertical
  - Font sizes scale: text-3xl → text-4xl → text-5xl
  - Cards maintain readable spacing at all sizes

═══════════════════════════════════════════════════════════════
17. DATA ARCHITECTURE (Mock Data for Easy Replacement)
═══════════════════════════════════════════════════════════════

All data is defined as typed arrays at the top of each component file.
This makes it trivial to replace with API calls or a CMS later.

Key data structures:

// Navigation items
const navItems = [{ label, href?, children?: [{ label, href }] }]

// Info cards  
const cards = [{ title, description, icon: LucideIcon, href, color }]

// Co-chairs / Speakers
const coChairs = [{ name, title, photo, photoPosition }]

// Key dates
const keyDates = [{ icon: LucideIcon, title, description, date }]

// Timeline milestones
const milestones = [{ year, title, description, icon: string(emoji) }]

// Venue highlights
const highlights = [{ icon: LucideIcon, title, description }]

// Program schedule
const programData: DaySchedule[] = [{ date, dateLabel, halls, items }]

// Contact departments
const contacts = [{ department, name, email }]

// Social links
const socialLinks = [{ icon: Component, href, label }]

To replace with Supabase later:
  1. Create matching tables in Supabase
  2. Replace const arrays with useQuery() hooks
  3. Add loading skeletons where data is fetched

═══════════════════════════════════════════════════════════════
18. CUSTOM SCROLLBAR
═══════════════════════════════════════════════════════════════

In index.css:
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: hsl(var(--muted)); }
  ::-webkit-scrollbar-thumb { background: hsl(var(--accent)); border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: hsl(var(--accent) darker); }

═══════════════════════════════════════════════════════════════
19. ADDITIONAL PAGES TO SCAFFOLD
═══════════════════════════════════════════════════════════════

These pages use the inner page template. Create them with appropriate content:

A. Welcome Letter — Full letter text with co-chair signatures
B. Visa Information — Requirements, embassy links, invitation letter process
C. Explore [City] — Photo grid with attractions, restaurants, transport tips
D. Key Dates — Full timeline of all deadlines (not just 3)
E. Registration Information — Fee tables, categories, policies
F. Hotel Accommodation — Room rates, booking link, map
G. Support Opportunities — Sponsorship tiers/packages table
H. Contact Us — Department contact cards with email links

All placeholder pages should use the ComingSoon component.

═══════════════════════════════════════════════════════════════
20. FILE STRUCTURE
═══════════════════════════════════════════════════════════════

src/
├── assets/              # Images: hero banner, logos, venue, co-chairs, city photos
├── components/
│   ├── Header.tsx       # Fixed nav with dropdowns
│   ├── Footer.tsx       # Dual-logo footer
│   ├── HeroSection.tsx  # Hero with SVG animations
│   ├── InfoCards.tsx     # 4-card highlight grid
│   ├── WelcomeLetterSection.tsx
│   ├── KeyDatesSection.tsx
│   ├── TimelineSection.tsx
│   ├── VenueSection.tsx
│   ├── NewsletterSection.tsx
│   ├── NavLink.tsx      # React Router NavLink wrapper
│   └── ui/              # All Shadcn UI components
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts         # cn() helper (clsx + tailwind-merge)
├── pages/
│   ├── Index.tsx         # Homepage compositor
│   ├── ComingSoon.tsx    # Reusable placeholder
│   ├── NotFound.tsx      # 404 page
│   ├── [ContentPage].tsx # Each content page
│   └── ...
├── App.tsx              # Router
├── main.tsx             # Entry point
├── index.css            # Design tokens + custom animations
└── vite-env.d.ts

public/
├── documents/           # Downloadable PDFs
├── templates/           # CSV templates
├── favicon.ico
├── robots.txt
└── placeholder.svg

═══════════════════════════════════════════════════════════════
END OF MASTER PROMPT
═══════════════════════════════════════════════════════════════

IMPORTANT IMPLEMENTATION NOTES:
1. Install all Shadcn UI components needed: button, card, tabs, input, toast, navigation-menu, accordion, dialog, etc.
2. Use semantic color tokens EVERYWHERE — never hardcode colors in components.
3. All section headings follow the pattern: small uppercase label with motifs → large serif heading.
4. Every Framer Motion animation uses viewport={{ once: true }} to prevent re-triggering.
5. The Header uses custom state-managed dropdowns, NOT the default Radix NavigationMenu popover behavior.
6. Wave divider SVGs use morphing path animations — ensure paths have matching control point counts.
7. Mock data arrays are typed with TypeScript interfaces for easy migration to API/database.
8. The newsletter form currently simulates submission — ready to connect to a real API endpoint.
```
