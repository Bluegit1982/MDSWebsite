# Build Implementation Blueprint

## 1. Objective
This document translates the approved UX and architecture direction into an implementation-ready plan for the Next.js website. It is intended to guide the first production build while staying modular, maintainable, and aligned with the project standards in [PROJECT.md](../PROJECT.md).

## 2. Delivery Strategy
The website will be built in small, reviewable increments. Each stage will ship a coherent subset of the experience and be validated before moving onward.

### Build principles
- Prefer server-first rendering for content-heavy pages.
- Use client components only for interactive behavior.
- Reuse marketing section patterns across multiple pages.
- Keep content editing in CMS while preserving a strong component system.
- Treat accessibility, semantic HTML, and mobile usability as core requirements, not optional polish.

## 3. Stack and Tooling
- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Sanity CMS
- ESLint + Prettier
- Vercel

## 4. App Structure
```text
app/
  (marketing)/
    layout.tsx
    page.tsx
    puppy-classes/page.tsx
    doggy-day-care/page.tsx
    obedience-training/page.tsx
    gundog-training/page.tsx
    protection-training/page.tsx
    sheep-dog-training/page.tsx
    one-to-one-training/page.tsx
    success-stories/page.tsx
    testimonials/page.tsx
    gallery/page.tsx
    faq/page.tsx
    contact/page.tsx
    privacy-policy/page.tsx
  api/
    contact/route.ts
  globals.css
  layout.tsx
  not-found.tsx
components/
  marketing/
    HeroSection.tsx
    ServiceOverview.tsx
    FeatureBand.tsx
    StatsStrip.tsx
    TestimonialCard.tsx
    StoryCard.tsx
    FAQAccordion.tsx
    CTASection.tsx
    GalleryGrid.tsx
  layout/
    Header.tsx
    MobileMenu.tsx
    Footer.tsx
    SiteShell.tsx
  forms/
    ContactForm.tsx
    FormField.tsx
  ui/
    Button.tsx
    Badge.tsx
    SectionHeading.tsx
    Card.tsx
    Container.tsx
    Accordion.tsx
    Modal.tsx
  content/
    RichTextBlock.tsx
    ServicePageTemplate.tsx
    TestimonialList.tsx
    FAQList.tsx
lib/
  seo/
    metadata.ts
    schema.ts
  validation/
    contactSchema.ts
  utils.ts
sanity/
  lib/
    client.ts
    queries.ts
  schema/
    siteSettings.ts
    page.ts
    service.ts
    testimonial.ts
    galleryItem.ts
    faq.ts
    successStory.ts
    staffMember.ts
public/
  images/
  icons/
  files/
styles/
  tokens.css
```

## 5. Route Architecture
### Shared site shell
All marketing pages will share the same layout shell:
- header with global navigation
- sticky CTA button on mobile
- page container
- consistent footer
- optional top announcement bar if needed

### Routes and page purpose
- / — homepage, overview, trust signals, service discovery
- /puppy-classes — socialisation and early training route
- /doggy-day-care — dog care and enrichment route
- /obedience-training — everyday obedience and reliability
- /gundog-training — advanced field-based service route
- /protection-training — specialist protection route with professional tone and strong safety messaging
- /sheep-dog-training — working dog route
- /one-to-one-training — bespoke behavioural support route
- /success-stories — case study index
- /testimonials — social proof archive
- /gallery — image gallery index
- /faq — searchable answer base
- /contact — enquiry form and business details
- /privacy-policy — compliant legal page

## 6. Page Template Strategy
Each route will use one of three shared templates:

### A. Service page template
Sections:
1. Hero
2. Intro and positioning block
3. Why this programme matters
4. Key benefits list
5. Timeline or journey section
6. Pricing/plan summary
7. FAQ block
8. Testimonial slice
9. Final CTA

### B. Content archive template
For pages such as testimonials, success stories, and gallery:
- intro hero
- filter or category controls where useful
- card/grid listing
- detail or CTA zone at the end

### C. Utility page template
For FAQ, privacy policy, and contact:
- content-rich hero
- structured body copy
- compact CTA or contact panel
- legal or support details

## 7. Reusable Component Inventory
### Layout components
- Header
- MobileMenu
- Footer
- SiteShell
- Container
- SectionSpacing

### Marketing components
- HeroSection
- ServiceOverview
- FeatureBand
- StatsStrip
- CTASection
- FAQAccordion
- TestimonialCard
- StoryCard
- GalleryGrid

### Form components
- ContactForm
- FormField
- SuccessState

### UI primitives
- Button
- Card
- Badge
- SectionHeading
- Accordion
- Modal

## 8. Design System Implementation
### Core tokens
- colors: brand, accent, background, text, border, success, muted
- spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
- radius scale: sm, md, lg, xl
- shadow scale: subtle, medium, elevated

### Typography scale
- h1: 48–64 desktop / 36–42 mobile
- h2: 32–40 desktop / 28–32 mobile
- h3: 24–28 desktop / 20–24 mobile
- body: 16–18
- small/bio: 14

### Buttons
- Primary: green fill with warm hover accent
- Secondary: outlined white/green
- Link button: text-only with underline hover

### Cards and surfaces
- Light surface backgrounds
- Soft borders
- Minimal shadow for cleanliness
- Consistent alignment and generous spacing

## 9. Data and CMS Model
### Sanity document types
- siteSettings
- page
- service
- testimonial
- galleryItem
- faq
- successStory
- staffMember

### Content responsibilities
- `siteSettings`: business details, phone, email, social, SEO defaults, legal links
- `page`: hero text, slug, metadata, reusable section blocks
- `service`: title, overview, benefits, pricing details, FAQs, CTA, related content
- `testimonial`: quote, owner name, dog details, overall outcome
- `galleryItem`: media, category, alt text, caption
- `faq`: question/answer and category
- `successStory`: challenge, approach, result, outcome stats

### Content authoring strategy
- CMS is the source of truth for service content and marketing copy.
- Next.js components should consume typed content models rather than hardcoded content blocks.
- Content blocks should remain structured and reusable instead of freeform dumping entire pages into one field.

## 10. Form and Validation Plan
### Contact form
Fields should be minimal but useful:
- name
- email
- phone
- dog name and breed (optional)
- service interest
- location (optional)
- message

### Validation
Use React Hook Form + Zod in a server-aware pattern:
- client-side validation for immediate feedback
- server-side validation in API route before sending or storing data
- sanitization and spam controls
- success state with clear next-step message

### API route
- app/api/contact/route.ts
- accepts validated input
- sends via configured email service or a secure endpoint
- returns structured success or error responses

## 11. SEO and Accessibility Implementation Plan
### SEO
- route-level metadata per page
- Open Graph tags
- canonical URLs
- local business schema
- FAQ schema where relevant
- sitemap generation
- clear headings and service-specific keyword targeting

### Accessibility
- semantic landmarks and heading hierarchy
- visible focus states
- proper color contrast
- keyboard support for nav, accordions, and forms
- reduced motion support for Framer Motion
- descriptive alt text and decorative image handling

## 12. Performance Strategy
- Prefer static generation or ISR for content pages
- use next/image for optimized media delivery
- limit large client-side libraries
- lazy-load non-critical gallery assets
- keep animation subtle and purposeful
- audit with Lighthouse and Core Web Vitals during each milestone

## 13. Build Phases
### Phase 1 — scaffold and shell
- set up Next.js project and base configuration
- install Tailwind, Framer Motion, RHF, Zod, Sanity client tooling
- build core app shell and responsive navigation
- create global design tokens and typography

### Phase 2 — page skeletons and marketing sections
- home page
- service overview cards
- common feature and CTA blocks
- testimonials and success stories sections

### Phase 3 — service page templates
- implement reusable service layout
- tailor content blocks for each service
- add final CTA patterns and FAQ expansion

### Phase 4 — CMS integration
- configure Sanity schema and client config
- map content to service and page components
- ensure image and document queries are typed and efficient

### Phase 5 — forms and conversion
- build contact form
- validate server submission
- confirm success and error messaging
- add privacy text and accessible flow

### Phase 6 — QA, SEO, and launch
- metadata and schema checks
- accessibility review
- performance tuning
- Vercel deployment and smoke tests

## 14. Quality Gates Before Moving to Production
- All critical pages render correctly on mobile and desktop
- CTA flow works from home and each major service page
- Contact form validation is tested
- Accessibility pass includes keyboard navigation and contrast checks
- SEO metadata exists for each page
- Lighthouse and manual QA show acceptable performance

## 15. Approval Gate
This build blueprint is the final planning gate before implementation begins. Once approved, I will move into the actual code scaffolding and first page build increments.
