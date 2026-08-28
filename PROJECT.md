# Mellor Dog School Website Project

## Status
- Architecture and design direction defined.
- Implementation has not started.
- This document is the single source of truth for product decisions, technical standards, and AI-team consistency.

## 1. Product Goal
Build a premium, modern replacement for the existing Mellor Dog School website with improved user experience, mobile responsiveness, accessibility, SEO, performance, and maintainability. The site should convert local dog owners into enquiries while clearly explaining services, credentials, and outcomes.

## 2. Primary Success Metrics
- Increase lead generation and enquiry conversion.
- Improve mobile usability and accessibility scores.
- Improve SEO visibility for local dog training services.
- Reduce content editing friction via CMS-managed pages.
- Provide a clean, maintainable codebase for future iteration.

## 3. Core Principles
- Accessibility first: WCAG 2.1 AA baseline, semantic HTML, keyboard support, reduced motion, strong contrast.
- Content clarity before visual complexity: every page should answer what, why, where, and how to book.
- Performance by default: fast-loading pages, optimized images, minimal client JS, server-first rendering.
- SEO as product: structured content, metadata, schema, local business details, crawl-friendly URL structure.
- Maintainability: predictable folder structure, reusable components, typed data, centralised standards.

## 4. Recommended Stack
- Next.js (App Router, latest stable LTS)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Sanity CMS
- ESLint + Prettier
- Vercel deployment

## 5. Standard Decision Rules
- Use App Router for all routes and route-level metadata.
- Prefer Server Components for static and content-heavy pages; use Client Components only where interaction is required.
- Avoid ad-hoc styling; use Tailwind tokens and a design system.
- Keep business logic and validation close to the form layer.
- Treat CMS as source of truth for marketing content, not hardcoded JSON blobs.
- Any new feature must be measurable through UX and performance impact, not just visual novelty.

## 6. Folder Structure
```text
/
├── .github/
│   └── agents/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── puppy-classes/
│   │   ├── doggy-day-care/
│   │   ├── obedience-training/
│   │   ├── gundog-training/
│   │   ├── protection-training/
│   │   ├── sheep-dog-training/
│   │   ├── one-to-one-training/
│   │   ├── success-stories/
│   │   ├── testimonials/
│   │   ├── gallery/
│   │   ├── faq/
│   │   ├── contact/
│   │   └── privacy-policy/
│   ├── api/
│   │   └── contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
├── components/
│   ├── marketing/
│   ├── forms/
│   ├── layout/
│   ├── content/
│   └── ui/
├── content/
│   ├── schemas/
│   ├── queries/
│   └── transforms/
├── lib/
│   ├── analytics/
│   ├── seo/
│   ├── utils.ts
│   └── validation/
├── public/
│   ├── images/
│   ├── icons/
│   └── files/
├── sanity/
│   ├── schema/
│   ├── structure/
│   └── lib/
├── styles/
│   └── tokens.css
├── types/
│   └── content.ts
├── tests/
│   ├── e2e/
│   ├── unit/
│   └── accessibility/
├── docs/
│   ├── architecture.md
│   ├── requirements.md
│   ├── decisions.md
│   └── security.md
├── PROJECT.md
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
├── README.md
└── vercel.json
```

## 7. Architecture Summary
This is a marketing-first, service-led website with clear conversion paths and a CMS-backed content model. Most pages are content-rich and static, so SEO and page speed are prioritised. A central page template system should enable consistent layout while still allowing service-specific sections.

## 8. Routing Plan
- / — Home
- /puppy-classes — Puppy classes overview and booking CTA
- /doggy-day-care — Day care details, schedule, FAQs, enquiry CTA
- /obedience-training — Obedience programme information and outcomes
- /gundog-training — Specialist gundog services and training standards
- /protection-training — Protection services with clear messaging and positioning
- /sheep-dog-training — Working dog training and handling services
- /one-to-one-training — Personalised training plans
- /success-stories — Case studies and before/after outcomes
- /testimonials — Social proof and reviews
- /gallery — Images and venue/activity galleries
- /faq — Support and common questions
- /contact — Enquiry form and business details
- /privacy-policy — Compliance and consent information

## 9. Component Hierarchy
- App shell
  - Header
  - Navigation
  - Mobile menu
  - Footer
- Page template
  - Hero section
  - Intro/content blocks
  - Service highlights
  - Testimonials
  - FAQ
  - CTA banner
  - Contact details
- Reusable UI
  - Button
  - Card
  - Badge
  - Section heading
  - Statistic block
  - Feature list
  - Accordion
  - Form field
  - Testimonial quote
  - Gallery grid
- Service-specific content blocks
  - Programme overview
  - Training journey timeline
  - Pricing overview
  - Venue and logistics
  - Enrolment CTA

## 10. Design System
### Design principles
- Premium, trustworthy, modern, and approachable.
- Strong hierarchy for conversion and readability.
- Warm, natural palette reflecting dog training and outdoor lifestyles.
- Minimal friction on mobile and clear form actions.

### Color palette
- Primary: Deep forest green #173A2A
- Secondary: Warm ochre #C88D42
- Accent: Soft clay #D77A5B
- Background: Stone ivory #F7F2EA
- Surface: White #FFFFFF
- Muted text: Slate #4B5B5B
- Border: Sand #E5DCCB
- Success: Sage green #7EA28D
- Danger: Plum/brick #B14E4E

### Typography
- Headings: Manrope or Plus Jakarta Sans
- Body text: Inter or Open Sans
- Scale: 12/14/16/18/24/32/44/64 depending on context
- Line height: 1.4–1.7 for body, 1.1–1.3 for headings
- Weight: 400 regular, 500 medium, 600 semibold, 700/800 heading emphasis

### Icon strategy
- Use Lucide icons for functional UI and training categories.
- Prefer consistent stroke weight and subtle accent colors.
- Limit custom illustration use; favour professional photography and simple iconography to keep performance high.

## 11. CMS Model
Sanity should power all marketing content and structured records.

### Schemas
- `siteSettings`: brand, contact, social, SEO defaults, legal info
- `page`: slug, title, seo, sections, hero, body blocks
- `service`: title, slug, summary, pricing, overview, benefits, FAQs
- `testimonial`: author, dog name, outcome, quote, rating, image
- `galleryItem`: title, category, image, alt text, caption
- `faq`: question, answer, category
- `successStory`: title, summary, result, before/after, tags
- `staffMember`: name, role, bio, image, credentials

### Content approach
- Use structured content blocks rather than freeform text dumps.
- Keep editable marketing content in Sanity.
- Reserve code for layout, logic, and presentation.

## 12. Accessibility and SEO Requirements
- Semantic headings, landmark regions, descriptive alt text.
- Requires keyboard navigation, visible focus rings, reduced motion support.
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile.
- Add JSON-LD for organisation, local business, and FAQs where relevant.
- Use route-level metadata, canonical URLs, Open Graph, and sitemap generation.

## 13. Security and Privacy Considerations
- Use server-side form handling and validation for contact submissions.
- Sanity access controlled via environment-based tokens.
- Protect against spam, abuse, and untrusted form payloads with Zod validation.
- Ensure privacy policy and consent messaging are present on all enquiry flows.

## 14. Build Roadmap
### Phase 1 — Foundation
- Finalise architecture and design system.
- Create app shell, layout, navigation, and responsive templates.
- Define all pages and route structure.

### Phase 2 — Core Marketing Pages
- Build home, service pages, about, success stories, testimonials, and FAQ.
- Add structured content components and CTA patterns.

### Phase 3 — CMS and Forms
- Connect Sanity content models.
- Implement contact form validation and submission.
- Add gallery and FAQ content management.

### Phase 4 — SEO and Accessibility Hardening
- Metadata, schema, accessibility checks, performance tuning.
- Mobile testing and browser QA.

### Phase 5 — Launch Optimization
- Production deployment on Vercel.
- Analytics, monitoring, launch smoke tests, and post-launch refinement.

## 15. Non-Goals
- No complex booking engine in the first version unless explicitly required.
- No unnecessary custom CMS infrastructure beyond Sanity-led content management.
- No feature bloat before conversion-critical pages and flows are stable.

## 16. Approval Gate
Implementation must not start until this architecture and the related project standards have been reviewed and approved.
