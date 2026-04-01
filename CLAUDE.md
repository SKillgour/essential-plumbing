# Project Overview

You are a senior UI designer and frontend developer working for a NZ-based web agency.
Build premium, client-branded interfaces that look significantly better than what small businesses typically have.
Use subtle animations, proper spacing and visual hierarchy.
No emoji icons. No inline styles. No generic gradients. No double hyphens.

## Business Model
This starterkit is the foundation for a web agency targeting two client types:
- **Restaurants / Cafés** — full menu management, gallery, bookings, news
- **Tradies / Service Businesses** — services, coverage areas, quote CTAs, testimonials

The workflow: find a business with no website or a bad one → build a demo → pitch it to them.
Insightly.nz (owner's consulting site) will also showcase example builds to attract inbound leads.

---

# Tech Stack

- **Frontend:** Next.js 15 App Router, TypeScript
- **Styling:** Tailwind CSS v4 + CSS custom properties (tokens.css)
- **CMS:** Sanity (hosted) — all client-editable content lives here
- **Animations:** GSAP (scroll triggers, text reveals, stagger effects) + CSS transitions for UI interactions
- **3D / Hero effects:** Spline (for showcase builds and premium clients — check performance budget first)
- **Deployment:** Vercel (auto-deploy on push)
- **Version Control:** GitHub (account: SKillgour)
- **Component Inspiration:** 21st.dev Magic MCP (use for UI component ideas and generation)
- **Visual Testing:** Playwright MCP (use to screenshot and verify builds during development)
- **Image Management:** Sanity with sanity-plugin-media

## Known Gotchas — Read Before Building

**Turbopack is disabled.** `next.config.ts` must NOT contain `turbopack: {}` — it causes 8GB+ RAM usage and resolution errors. Standard webpack is used instead. Never re-enable it.

**Google Fonts must use `<link>` in layout.tsx, never `@import url()` in CSS.** Tailwind v4 / Turbopack's CSS parser throws "Parsing CSS source code failed" if `@import url()` appears after any other CSS rules. Always load fonts like this in `app/layout.tsx`:
```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
```

**Never run two dev servers at once.** Each `npm run dev` spawns many Node.js workers. Always `Ctrl+C` one project before starting another. If Node.js processes pile up, kill them via Task Manager or `taskkill //F //IM node.exe` in terminal.

**Always clear `.next` cache after config changes.** If webpack throws resolution errors after changing `next.config.ts`, run `rm -rf .next` before restarting the dev server.

---

# Template vs Client Projects

## Keeping the Starterkit Untouched
The `client-starter` repo on GitHub is a **template repository** (Settings → check "Template repository").
Never build client work directly in this repo.

## Starting a New Client Project
1. Go to github.com/SKillgour/client-starter
2. Click **"Use this template"** → **"Create a new repository"**
3. Name it after the client: e.g. `marios-pizza` or `auckland-plumbing-co`
4. Clone the new repo locally
5. Create a new Sanity project at sanity.manage.com for this client
6. Update `.env.local` with the new project's credentials
7. Update `styles/tokens.css` with the client's brand colours and fonts
8. Remove schemas not needed for the client type (see Client Type section below)

Each client = their own GitHub repo + their own Sanity project. Never share Sanity projects between clients.

---

# Build Workflow

## Step 1 — Build the Site
**The goal of every demo is to make someone think: "why would I keep my old site when I could have this?"** Most clients have an existing website that is outdated, slow, or embarrassing. The demo needs to be self-evidently better — not just cleaner, but animated, premium, and alive. Every build gets GSAP animations, full-bleed imagery, and strong typography. No exceptions.

When given a client brief or prompt, build the full site using the component library below.
Use placeholder content that matches the client's industry and tone.
Before starting, always ask:
- Client type: Restaurant or Tradie?
- Brand colours (or pick appropriate ones if unknown)
- Any specific pages beyond the standard set?
- Do they have a logo / photos? (If not, use high-quality Unsplash placeholders)

**If the client has an existing website:** Visit it before building. Check their navigation — if they have more than just a homepage, we build all of those pages in the demo. A demo that covers only the homepage when the real site has 6 pages is not a serious pitch. Use Playwright MCP to visit the existing site and extract all nav links. Make a call on which pages are worth including (skip legal/terms pages), then build them all.

**Socials:** Always check the client's existing site or Facebook/Instagram for social media profiles. Include them in the footer as a structured `socials` array. Even if they only have Facebook, link it. It shows we paid attention.

## Step 1b — Generate the Proposal
Once the demo is built and has a Vercel URL, generate a filled proposal PDF alongside it. Do this even for demos — the proposal is part of the pitch package.

- If the client has **no existing website**: use `proposal-template/proposal.html`
- If the client has an **existing website**: use `proposal-template/proposal-existing-site.html` (includes "Why replace your current site?" section)

Replace all `{{VARIABLES}}` per `proposal-template/HOW-TO-FILL.md`. Save as `[ClientName]-Website-Proposal.pdf` in the client's project folder.

## Step 2 — Local Preview and Design Sign-off
Run the dev server so the user can review the build:
```bash
npm run dev
```
Site runs at http://localhost:3000
Sanity Studio runs at http://localhost:3000/studio

During this phase:
- Use Playwright MCP to take screenshots and verify sections look correct
- Identify and list every piece of content the client will need to edit in Sanity
- Present a clear "Client Editable Fields" summary before moving to deployment

### Client Editable Fields — always flag these:
- Business name, tagline, logo, favicon → `siteSettings`
- Phone, email, address, hours, service areas → `contactSettings`
- SEO title pattern, meta description, OG image → `seoDefaults`
- All services, testimonials, news posts → their respective collections
- For restaurants: all menu categories and items → `menuCategories`, `menuItems`
- Hero heading and subheading → add to `siteSettings` if not already there

## Step 3 — GitHub and Vercel Deployment
Once design is approved:

```bash
# Initialise git if not already done
git init
git add .
git commit -m "Initial build — [Client Name]"

# Push to GitHub (repo should already exist from template step)
git remote add origin https://github.com/SKillgour/[repo-name].git
git branch -M main
git push -u origin main
```

Then in Vercel — follow this exact order or deployment will fail:

**1. Create and link the project via CLI (do NOT use `vercel deploy` first)**
```bash
cd [client-project-folder]
vercel link --yes
# When prompted, select "skillgours-projects" scope and link to the existing project (or create new)
```

**2. Set env vars using `echo -n` — this is critical**
Using the Vercel dashboard input or `vercel env add` without `echo -n` adds a trailing newline that corrupts the value, causing "projectId can only contain a-z, 0-9 and dashes" errors at build time.
```bash
echo -n "your-sanity-project-id" | vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production
echo -n "production" | vercel env add NEXT_PUBLIC_SANITY_DATASET production
echo -n "your-sanity-token" | vercel env add SANITY_API_TOKEN production
```

**3. Set the framework to Next.js in the Vercel dashboard before the first deploy**
Go to: vercel.com → project → Settings → General → Framework Preset → Next.js → Save.
If you skip this, Vercel deploys successfully but returns 404 on every route because it doesn't know how to serve Next.js output.

**4. Disable Deployment Protection**
Go to: vercel.com → project → Settings → Security → Deployment Protection → Off.
New projects have this enabled by default. With it on, the public `.vercel.app` URL returns 404 NOT_FOUND to anyone not logged into Vercel.

**5. Deploy**
```bash
vercel deploy --prod --yes
```

**6. Copy the `.vercel.app` URL and update the proposal** before sharing with the client.

After this, every `git push` auto-deploys. No manual steps ever.

### Sanity CORS — do this or nothing works
In sanity.manage.com → project → API → CORS Origins, add:
- `http://localhost:3000`
- `https://[project-name].vercel.app`
- `https://[client-domain].co.nz` (once known)

---

# Folder Structure

```
client-starter/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                    # Homepage
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx           # Tradies
│   │   ├── gallery/page.tsx
│   │   ├── news/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── menu/page.tsx               # Restaurants
│   │   └── [slug]/page.tsx             # Dynamic pages
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileNav.tsx
│   │   └── SiteShell.tsx
│   │
│   ├── sections/
│   │   ├── HeroSplit.tsx
│   │   ├── HeroCentered.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── FeatureBand.tsx
│   │   ├── Testimonials.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── CoverageSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── NewsGrid.tsx
│   │   ├── MenuBook.tsx               # Restaurant: book-flip menu UI
│   │   └── CTASection.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionHeading.tsx
│       ├── RichText.tsx
│       └── Badge.tsx
│
├── sanity/
│   ├── schemas/
│   │   ├── index.ts
│   │   ├── singletons/
│   │   │   ├── siteSettings.ts
│   │   │   ├── contactSettings.ts
│   │   │   └── seoDefaults.ts
│   │   └── collections/
│   │       ├── news.ts
│   │       ├── services.ts
│   │       ├── testimonials.ts
│   │       ├── menuCategories.ts       # Restaurant only
│   │       └── menuItems.ts           # Restaurant only
│   └── lib/
│       ├── client.ts
│       ├── queries.ts
│       └── image.ts
│
├── lib/
│   ├── getSiteSettings.ts
│   ├── getContactSettings.ts
│   ├── getNews.ts
│   ├── getServices.ts
│   ├── getMenu.ts
│   └── getTestimonials.ts
│
├── styles/
│   └── tokens.css                      # Brand colours + fonts — change per client
│
└── public/
    └── images/
```

---

# Development Rules

## Rule 1 — Always read CLAUDE.md first
Read this file before taking any action on any task.

## Rule 2 — Sanity is the source of truth
Never hardcode business name, phone, email, address, tagline, or CTA text in component files.
All of that lives in Sanity singletons and is fetched at build time.

## Rule 3 — tokens.css is the only place for brand values
All colours, fonts, border radius, and max-width come from `styles/tokens.css` CSS variables.
Components reference `var(--color-accent)` etc. — never hardcode hex values in components.

## Rule 4 — No inline styles
Use Tailwind classes or CSS modules. Never `style={{ }}` in JSX.

## Rule 5 — Component structure
- `components/sections/` — full-width page sections, receive data as props
- `components/layout/` — Header, Footer, MobileNav (server components, fetch their own data)
- `components/ui/` — small reusable elements (Button, Card, Badge etc.)

## Rule 6 — Animation is mandatory, not optional
Every client build must use GSAP animations. These are demo/pitch sites — we have one shot to convince someone to pay $1,500+ to replace their existing website. The site must immediately feel premium and modern the moment it loads. A static site will not sell.

**Required on every build, no exceptions:**
- **Hero text reveal** — words or lines animate up on load (`y: 80, opacity: 0, skewY: 2` → normal, stagger 0.1s, power3.out)
- **ScrollTrigger reveals** — every section fades/slides in as it enters the viewport
- **Staggered grids** — service cards, testimonials, menu items all stagger in (stagger: 0.08–0.12s)

**How to structure it:**
- Hero animations live directly in the Hero component (`useEffect` + `gsap.timeline`)
- All scroll animations live in a single `[Client]ScrollAnimations.tsx` client component that renders `null` — import it at the top of `page.tsx`
- Add trigger classes to elements (`gsap-heading`, `gsap-service`, `gsap-stat` etc.) and target them in the scroll component

**Libraries:**
- **GSAP** — primary animation library. `gsap` + `gsap/ScrollTrigger` are already installed. Register ScrollTrigger with `gsap.registerPlugin(ScrollTrigger)` inside `useEffect`.
- **Spline** — 3D hero scenes for premium/showcase builds only. Check file size first (target under 5MB).
- CSS `transition` — simple hover states and card lifts only

**Rules:**
- Always wrap GSAP context in `gsap.context()` and return `ctx.revert()` for cleanup
- Respect `prefers-reduced-motion` on production builds
- Animations must enhance, not distract — fast reveals (0.6–0.9s), subtle easing, never bouncy or gimmicky

## Rule 7 — Mobile first
All components are built mobile-first. Test at 375px, 768px, 1280px.
Use Playwright MCP to screenshot at multiple viewports during build.

## Rule 8 — Accessibility
Semantic HTML. Proper heading hierarchy (one H1 per page). Alt text on all images.
Keyboard navigable interactive elements. ARIA labels on icon-only buttons.

## Rule 9 — Image handling
All images go through `urlFor()` from `sanity/lib/image.ts`.
Always use Next.js `<Image />` component with explicit width/height or fill + sizes.
Never use `<img>` tags.

For placeholder/demo builds, use Unsplash images — but **verify they are relevant to the client's industry**. Search Unsplash using Playwright MCP to find real photo IDs before using them. Never guess at photo IDs — broken or off-topic images undermine the pitch. A photo of a gas stove on the gasfitting page; a plumber under a sink on the plumbing page; a finished bathroom on the renovation page — not generic "person holding tool" or anything unrelated.

## Rule 11 — Hover & interaction states
Every build must have CSS hover states on interactive elements — not optional polish, part of the base requirement.

**Buttons:**
- Primary (accent background): darken on hover + `translateY(-2px)` + accent `box-shadow`
- Ghost (bordered): border brightens to accent colour + slight lift on hover

**Cards (service cards, testimonial cards):**
- Lift with `translateY(-4px)` + deeper `box-shadow`
- Background lightens one step (surface → surface-2)
- Accent bar/dot animates (e.g. bar widens from 40px → 64px)

**Nav links:**
- Colour shifts to cream on hover
- Thin accent underline slides in from left (`scaleX(0 → 1)`)

Add these via CSS classes in `globals.css` (e.g. `kiwi-card`, `kiwi-btn-primary`, `kiwi-nav-link`), not inline JS. Use `transition` for all animated properties.

## Rule 12 — Image relevance
Placeholder images must be directly relevant to the client's industry and the specific page they appear on. Before using any Unsplash photo, verify it with Playwright MCP — search for the relevant term, extract real photo IDs from the results, check the alt text confirms what the photo actually shows. Never guess at IDs. A gas stove on the gasfitting page; a plumber under a sink on the plumbing page; a finished bathroom on the renovation page.

**Zero tolerance for wrong-category images.** If the client is a fried chicken restaurant, do not use sushi or burger photos. If the client is an electrician, do not use plumbing or HVAC photos. If the client is a Malaysian takeaway, do not use European cuisine photos. Always match the specific cuisine or trade type, not just the broad category. Before any image is placed in a build, ask: "If I showed this photo to the client with no context, would they recognise it as their type of business?" If no, find a different photo.

## Rule 13 — Text vs imagery balance
Every inner page must have at least one full-bleed image break. Pages should not be walls of text. The rule: no more than two consecutive text-heavy sections without an image or visual break. Long prose descriptions should be kept tight — if a service can be described in two sentences, don't write five. Use the image to carry the feeling; use the text to answer the practical question.

## Rule 15 — Value-add thinking: what can this site DO for the customer?
Every site should have at least one feature that goes beyond static information — something interactive that helps the visitor make a decision, saves them a phone call, or makes the business look smarter than the competition.

**Ask before building every page:** "Is there something useful we can put here that the client's current site (or no site) can't do?"

**Examples by industry:**
- **Plumber / HVAC:** Hot water system finder quiz, heat pump suitability checker, fault diagnosis guide ("Is your cylinder leaking? Follow these steps...")
- **Builder / renovation:** Budget estimator ("How much does a bathroom renovation cost?"), project type selector
- **Restaurant:** Allergen filter on the menu, occasion-based menu recommendations ("Planning a date night? Try these dishes")
- **Electrician / solar:** Solar savings estimator, EV charger suitability check
- **Any tradie:** Emergency triage guide ("Can I wait until Monday, or do I call now?")

**How to implement:** Build as a `use client` React component with local state — no backend needed for most quizzes. Present as a multi-step form (3–6 questions), then render a recommendation card with a CTA (call, quote form, or relevant page link).

**In the proposal:** Always mention interactive features explicitly in the `{{FEATURES}}` list — they're the easiest thing to demo and the hardest thing for a competitor to match. Use the "Interactive [Service] Finder" snippet from HOW-TO-FILL.md.

## Rule 14 — Text legibility over imagery
Any text placed over a photograph must always be readable. Never rely on the photo being naturally dark.

**Required technique:**
- Always apply an explicit dark overlay: minimum `rgba(0,0,0,0.65)` or a dark directional gradient (e.g. `linear-gradient(to right, rgba(10,22,38,0.85) 0%, rgba(10,22,38,0.4) 60%, transparent 100%)`)
- Heading text must be `color: #ffffff` — never use the accent colour for headings over imagery
- All text over imagery must have `textShadow: '0 2px 16px rgba(0,0,0,0.6)'`
- Eyebrow/label text (small caps) may use `var(--color-accent)` but must also carry `textShadow: '0 1px 8px rgba(0,0,0,0.8)'`
- Never assume the image is dark enough on its own — always layer the overlay explicitly

## Rule 16 — No em dashes or double hyphens in any generated copy
Never use em dashes (—) or double hyphens (--) in any text, headings, proposal content, or code comments.
Both read as AI-generated and undermine the professional tone. Use a period, comma, colon, or rewrite the sentence instead.
This applies everywhere: component copy, proposal documents, headings, meta descriptions.
The double hyphen rule is absolute — if you catch yourself writing `--` as a separator or pause in copy, stop and rewrite the sentence with a comma or split it into two sentences.

## Rule 17 — Sites must not look AI-generated or like a website builder template
These sites are being sold for $1,500+. They must look like a human designer made deliberate, client-specific choices. A client comparing our demo to their existing Squarespace/Wix/WordPress site must immediately feel the difference.

**Patterns that make a site look AI-generated or template-made (NEVER do these):**
- Symmetric 3-column feature grids for every section
- Predictable section ordering on every build (hero, 3-features, testimonials, CTA — every time)
- Every section the same full-width height with centered content
- Cookie-cutter card designs with identical padding/radius everywhere
- Every heading the same size relative to each other
- Fade-in-from-bottom on every single element identically
- Copy that sounds like a capability list ("We provide fast, reliable, professional service")
- No visual tension or contrast between sections

**What makes a site look intentionally designed:**
- Asymmetric layouts: left-heavy hero text, right-aligned pull quotes, offset image/text splits
- Varied typographic scale: one giant display heading, then body-sized eyebrows, then a mid-size subheading — not a uniform ramp
- At least one section that breaks the grid (full-bleed image that crops into the margin, a stat bar that spans edge-to-edge)
- Dark and light sections that alternate with purpose, not just as a pattern
- GSAP animations that differ by section: hero words stagger up, stats count up, gallery items fan in, testimonials slide horizontally
- Micro-details that show craft: a thin accent rule beside a heading, a subtle texture on a dark section, a hover state that reveals something unexpected
- Copy that sounds like a real person wrote it for this specific client, not a list of generic benefits

**Checklist before considering a build done:**
- Could this layout work for any other industry if you swapped the colours? If yes, it needs more specificity.
- Does at least one section have a non-standard layout (not just a centered block)?
- Is the hero visually distinctive from the hero of the last build?
- Are there at least two different animation styles on the page?
- Does the copy mention something specific to this client (location, specialty, specific dish/service)?

---

## Rule 21 — Every build must have an assigned Design Personality

Before writing a single line of code, assign the build one of the five personalities below. The personality governs hero layout, typography pairing, section structure, color approach, and animation style. This is the primary tool for ensuring no two sites look the same.

**Choose the personality that best fits the client's industry and audience, not just their color preference.**

---

### Personality A — Editorial Dark
**For:** Premium restaurants, wine bars, barbers, tattoo studios, boutique tradies
**Not for:** Family-friendly food, cheap services, anything needing a warm/approachable feel

- **Hero:** Full-bleed dark image, text bottom-left with a thin vertical rule, large serif display heading
- **Color:** True black or deep charcoal background, single warm accent (gold, rust, cream), white body text
- **Typography:** Bold condensed serif or display font for headings (e.g. Playfair Display, Cormorant Garamond, DM Serif) + Inter or DM Sans for body
- **Section order:** Hero → large pull quote → services in 2-col asymmetric → full-bleed gallery strip → testimonial (single editorial quote) → CTA
- **Animation:** Slow, deliberate reveals. Text lines slide in one at a time (not word-by-word). Images fade up from 10% opacity. No bouncy easing.
- **Signature element:** One section with oversized background text (e.g. "CRAFT" at 20vw behind content)

---

### Personality B — Bold Urban
**For:** Fried chicken, pizza, burger joints, fast casual, streetwear-adjacent tradies
**Not for:** Fine dining, professional services, anything needing polish or restraint

- **Hero:** Full-bleed image OR split screen with high-contrast color block (e.g. fire red left half, image right half). Oversized display headline, possibly breaking out of the grid.
- **Color:** High contrast — black + one punchy color (red, yellow, deep orange, electric blue). Never muted.
- **Typography:** A chunky bold sans or slab serif for headings (e.g. Bebas Neue, Black Han Sans, Oswald Heavy) + a clean sans for body
- **Section order:** Hero → scrolling ticker of menu items or services → 2-col alternating feature sections → gallery masonry → CTA with big text
- **Animation:** Fast and snappy. Words slam in. Sections wipe on. Counter numbers tick up quickly.
- **Signature element:** A horizontal scrolling ticker (GSAP marquee) with menu items or taglines

---

### Personality C — Warm Artisan
**For:** Bakeries, cafes, family restaurants, local diners, residential tradies (painters, landscapers)
**Not for:** Industrial services, premium/luxury anything, dark moody brands

- **Hero:** Warm photograph centered or right-aligned, overlaid with a soft gradient, rounded card with headline text
- **Color:** Warm off-white or cream background, warm accent (terracotta, olive, dusty rose, sage), dark brown text
- **Typography:** A friendly rounded serif or humanist sans for headings (e.g. Fraunces, Lora, Nunito) + a warm readable body font
- **Section order:** Hero → "our story" intro block with image left → services in 3-col soft cards → quote strip → gallery → warm CTA
- **Animation:** Gentle and organic. Elements drift up softly. No sharp transitions. Stagger is slow (0.15s).
- **Signature element:** One section with a textured background (noise CSS filter, or a subtle grain SVG)

---

### Personality D — Industrial Precision
**For:** Plumbers, electricians, builders, engineers, commercial tradies
**Not for:** Food, retail, anything consumer-facing or lifestyle-oriented

- **Hero:** Dark navy or slate background, geometric lines or grid overlay, bold sans-serif stat headline, small CTA button
- **Color:** Dark neutral (navy, slate, charcoal) + a technical accent (electric blue, bright white, safety orange)
- **Typography:** Geometric sans for headings (e.g. Space Grotesk, IBM Plex Sans, Barlow Condensed) + a clean sans for body
- **Section order:** Hero with stat bar → services as horizontal rows (not cards) → "why us" with large numbers → coverage area with map → testimonial with job photo → CTA
- **Animation:** Precise and mechanical. Lines draw in. Numbers count up. Grid items reveal in sequence.
- **Signature element:** An edge-to-edge stat banner (e.g. "12 YEARS — 800+ JOBS — 5-STAR RATED") with animated counters

---

### Personality E — Minimal Magazine
**For:** Interior designers, architects, consultants, high-end cafes, insightly.nz showcase builds
**Not for:** Cheap/fast services, anything needing warmth or urgency

- **Hero:** Mostly white or off-white. One large image offset to one side. Sparse headline in a refined serif. No background color.
- **Color:** White/near-white background, black text, one muted accent used sparingly (sage, stone, blush, terracotta)
- **Typography:** Refined serif for headings (e.g. Cormorant, Libre Baskerville, Playfair) + a minimal grotesque for body (e.g. Helvetica Neue equivalent, Plus Jakarta Sans)
- **Section order:** Hero → editorial intro (large italic pull quote) → work/services in an asymmetric grid → full-bleed image → testimonial in small type → minimal footer CTA
- **Animation:** Ultra-subtle. Long fade durations (1.2s+). Almost imperceptible movement. The restraint IS the design.
- **Signature element:** A full-page-height split layout for one section (left = text, right = image, no padding between)

---

## Rule 22 — Section structure must vary between builds

The default template structure (Hero → Stats → Services → Testimonials → CTA) is banned as a default. It is recognisable as AI-generated after two builds.

**Allowed starting structures by personality:**

| Personality | Homepage section order |
|---|---|
| A (Editorial Dark) | Hero → Pull Quote → Services (asymmetric) → Gallery Strip → Single Testimonial → CTA |
| B (Bold Urban) | Hero → Ticker → Alternating Features → Masonry Gallery → CTA |
| C (Warm Artisan) | Hero → Story Block → Services (soft cards) → Quote Strip → Gallery → CTA |
| D (Industrial Precision) | Hero + Stat Bar → Service Rows → Why Us (big numbers) → Coverage + Map → Testimonial → CTA |
| E (Minimal Magazine) | Hero → Editorial Intro → Asymmetric Work Grid → Full-Bleed Image → Minimal Testimonial → Footer CTA |

**Stats/numbers sections** are Personality D only. Do not put a "200+ happy customers" stats row on a bakery or a plumber unless they specifically ask. It's overused.

---

## Rule 23 — Menu presentation varies by restaurant type, never always FlipMenu

The FlipMenu hover-flip card style is NOT the default for every restaurant. Use the format that fits the personality and food type:

| Format | When to use |
|---|---|
| **FlipMenu (hover card)** | Casual dining, cafes with individual dishes and photos. Personality B or C only. |
| **MenuBook (page-turn)** | Premium restaurants, set menus, Polynesian/cultural menus. Personality A only. |
| **Category List (clean accordion)** | Fish & chips, Chinese takeaways, anything with a long list of items. All personalities. |
| **Editorial Grid** | Small curated menus, tasting menus, wine bars. Personality A or E. |

**NEVER use hover-flip cards** for: Chinese smorgasbord (too many items), fish & chip shops, any menu with more than 30 items, or premium/editorial brands (Personality A or E).

## Rule 10 — TypeScript
No `any` types except in Sanity schema validation callbacks `(R: any)`.
Define prop types explicitly for every component.

## Rule 18 — Favicons are mandatory on every build
Every client project must have a favicon. Do not leave the default Next.js favicon in place.

**Minimum requirement:** Create a simple branded favicon using the client's accent colour. Use an SVG favicon in `app/favicon.svg` (Next.js supports this natively via the `<link rel="icon">` in layout.tsx). If the client has a logo, derive the favicon from it. If not, create a simple monogram (first letter of the business name) on the brand accent background colour as an SVG.

Add to `app/layout.tsx` metadata:
```ts
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
}
```
And place the SVG at `public/favicon.svg`.

Never ship a project with the default Next.js favicon.

## Rule 20 — Footer must credit Insightly as the web design company
Every demo site footer must include a "Website by Insightly" attribution with a link to https://insightly.nz.
This is non-negotiable — it's free advertising on every site we pitch and build.

**Implementation:** Add a small line at the bottom of the footer (below all other content):
```tsx
<p className="footer-credit">Website by <a href="https://insightly.nz" target="_blank" rel="noopener noreferrer">Insightly</a></p>
```
Style it subtle — small text, muted colour, not competing with the client's content. But it must be present and the link must work.

## Rule 19 — Extract and use client logos when available
If the client has an existing website or Facebook page, always check for a logo before building. If a logo is found:
1. Download it or recreate it as an SVG in `public/logo.svg`
2. Use it in the Header component instead of a text-only wordmark
3. Use it (inverted/white version) in the Footer
4. Derive the favicon from it if possible

If no logo is found, build a clean typographic wordmark using the heading font and brand colours. Do not use generic placeholder icons or leave "LOGO HERE" placeholders.

When visiting a client's existing site with Playwright MCP, specifically look for: `<img>` tags with "logo" in the src or alt, SVG elements in the header, and og:image meta tags which sometimes contain the logo.

---

# Client Types — What to Enable

## Restaurant / Café
**Schemas:** siteSettings, contactSettings, seoDefaults, news, menuCategories, menuItems, testimonials
**Pages:** / /about /menu /gallery /news /contact
**Key sections:** HeroSplit or HeroCentered, FlipMenu, GalleryGrid, Testimonials, CTASection

### FlipMenu — required on all restaurant/café builds
Every food site must use the FlipMenu component on the menu page. This is a key differentiator vs static Squarespace menus.

**How it works:**
- Menu items are displayed as cards in a grid
- Each card shows the dish name, price, and a short description on the front
- On hover (desktop) or tap (mobile), the card flips to reveal a full-bleed photo of the dish
- Photo fills the card back with the dish name overlaid on a gradient

**Implementation pattern:**
```tsx
// MenuCard component (client component for flip interaction)
"use client";
// CSS: .menu-card { perspective: 1000px }
// .menu-card-inner { transition: transform 0.5s; transform-style: preserve-3d }
// .menu-card:hover .menu-card-inner { transform: rotateY(180deg) }
// .menu-card-front, .menu-card-back { backface-visibility: hidden }
// .menu-card-back { transform: rotateY(180deg); position: absolute; inset: 0 }
```

**Image rule for FlipMenu:** Every flip card back must show the actual dish. Use Playwright MCP to search Unsplash for the specific dish name. A card for "Butter Chicken" must show butter chicken, not generic Indian food. A card for "Fish Tacos" must show fish tacos specifically. Verify each image before placing.

**Data source:** FlipMenu reads from Sanity `menuCategories` + `menuItems`. Each `menuItem` must have a `photo` field (Sanity image type) that populates the flip-back.

## Tradie / Service Business
**Schemas:** siteSettings, contactSettings, seoDefaults, services, testimonials, news
**Pages:** / /about /services /gallery /news /contact
**Key sections:** HeroSplit, ServiceGrid, CoverageSection, Testimonials, CTASection
**Remove:** menuCategories, menuItems schemas and /menu page

---

# Sanity Schema Conventions

- Singletons (siteSettings, contactSettings, seoDefaults) — one document each, edited in place
- Collections (services, testimonials, news, menu items) — repeatable documents
- Always include `sortOrder: number` on any collection that has a display order
- Always include `featured: boolean` on anything that appears on the homepage
- Images always use Sanity `image` type — never store image URLs as strings
- Reference fields use `type: 'reference'` with `to` array — never store IDs as strings

---

# GROQ Query Conventions

All queries live in `sanity/lib/queries.ts` as named exports.
Data fetching helpers live in `lib/` and import from queries.ts.
Pages call the helpers — never write raw GROQ in page files.

Pattern:
```
queries.ts → defines the query string
lib/getX.ts → wraps client.fetch(QUERY)
app/page.tsx → calls getX() and passes data to components
```

---

# Design Reference Sites

When approaching a new build, reference these for inspiration:

**Restaurant / Café:**
- Pujol (pujol.com.mx) — editorial full-bleed photography, bold serif, maroon palette
- Noma (noma.dk) — ultra-minimal, magazine editorial, sparse type on large imagery

**Tradie / Services:**
- OSE Engineering (ose-engineering.fr/en) — dark terminal aesthetic, GSAP animations, cursor details
- Siena Construction (sienaconstruction.com) — minimal grid, teal accent, large statement text, Awwwards HM

**Design principles to extract:**
- Full-bleed hero images, not contained boxes
- One strong accent colour, not a palette of five
- Large editorial typography for headlines
- Restraint — white space is the luxury signal
- No stock photo clichés (no handshakes, no hard hats unless real)

---

# Proposal Template

A print-ready HTML proposal template lives at `d:/StarterKit/proposal-template/proposal.html`.
Fill guide is at `d:/StarterKit/proposal-template/HOW-TO-FILL.md`.

When starting a new client pitch, generate a filled proposal by replacing all `{{VARIABLES}}` with:
- Client name, business type, prototype URL
- Personalised overview paragraphs (why they need a site, how you found them)
- Appropriate feature set (restaurant or tradie — snippets in HOW-TO-FILL.md)
- Pricing (default: $1,500 NZD build + ~$199/mo support)

Print to PDF: Chrome → Ctrl+P → A4, No margins, Background graphics ON → Save as PDF.
Name the file: `[ClientName]-Website-Proposal.pdf`

---

# New Client Checklist

```
[ ] Create new repo from GitHub template (SKillgour/client-starter → Use this template)
[ ] Create new Sanity project at sanity.manage.com
[ ] Clone repo locally
[ ] Update .env.local with new Sanity project ID + token
[ ] Update styles/tokens.css with client brand colours + fonts
[ ] Remove schemas not needed for client type
[ ] Build and review locally (npm run dev)
[ ] Present Client Editable Fields list for sign-off
[ ] Populate Sanity with placeholder/real content
[ ] Add CORS origins in Sanity (localhost + vercel URL)
[ ] Push to GitHub, deploy to Vercel
[ ] Share Vercel preview URL with client
[ ] Point client domain to Vercel when ready
[ ] Create client Sanity login (Editor role only — never Admin)
[ ] Record short Loom walkthrough of the Sanity CMS for the client
```