# UX and Page Blueprint

## 1. Design Goal
The redesign must feel premium, reassuring, and credible while being practical and conversion-focused. The brand should communicate expert dog training without feeling intimidating or overly corporate. Design decisions should help a dog owner instantly understand: what service is offered, why it matters, and how to book.

## 2. User Experience Principles
- Clear service discovery on first visit.
- Fast mobile-first experience with readable content blocks.
- Visible calls to action without aggressive popups or distraction.
- Trust-building via outcomes, credentials, reviews, and real examples.
- Emotional reassurance: owners want a safer, calmer, better-behaved dog.

## 3. Primary User Journeys
### A. New dog owner exploring services
Goal: understand options and choose the right programme.
Primary path:
- Homepage -> service overview -> relevant training route -> CTA -> contact form

### B. Owner looking for a quick answer
Goal: find answers and reassurance.
Primary path:
- Search or FAQ -> service page -> testimonials -> contact

### C. Owner seeking a specific programme
Goal: review training details, outcomes, and next steps.
Primary path:
- Service page -> benefits -> timetable -> pricing -> CTA

### D. Owner seeking reassurance via proof
Goal: see social proof and current outcomes.
Primary path:
- Success stories / testimonials -> service page -> enquiry form

## 4. Core Site Narrative
The site should tell a clear story:
1. Dogs deserve expert, humane support.
2. Mellor Dog School offers structured, practical training.
3. Each service matches a different dog need or owner goal.
4. Results are proven through outcomes and client stories.
5. Enquiry is simple and low-friction.

## 5. Global UX Layout
### Header
- Brand mark left aligned
- Primary navigation for major service categories
- CTA button: "Book a Consultation" or "Enquire Today"
- Mobile drawer menu with grouped categories
- Sticky header with subtle shadow on scroll

### Footer
- Service navigation
- Fast contact details
- Social links
- Privacy and policy links
- Business location and operating hours

### Page shell
- Consistent large spacing for premium feel
- Section padding tuned for mobile readability
- Strong contrast and generous whitespace
- Repeated CTA placements after key content blocks

## 6. Homepage Blueprint
### Hero section
- Statement: "Professional dog training for confident, happy dogs"
- Supporting paragraph: simple overview of training philosophy and local expertise
- Primary CTA: Book a consultation
- Secondary CTA: Explore services
- Visual: premium dog photography with layered text overlay and trust indicators

### Social proof strip
- Client satisfaction metrics
- Years of experience
- Local service summary
- Quick trust badges

### Services overview
- Six to eight cards for main services
- Each card includes icon, one-sentence summary, and CTA
- Use consistent card sizing and hover motion

### Why choose Mellor Dog School
- Experienced trainers
- Reward-based, humane methods
- Flexible programmes
- Clear progression and outcomes

### Success stories preview
- 3 feature case studies
- Outcome-focused layout with text and image

### FAQ preview
- 4–6 common questions
- Expandable accordion

### Final CTA section
- Clear next action: contact the school
- location and call button if applicable

## 7. Service Page Blueprint
Every service page should follow a consistent template.

### Standard structure
1. Hero with service-specific heading and CTA
2. Problem/need summary
3. Why this programme matters
4. Programme overview and outcomes
5. Key benefits or training approach
6. Typical journey timeline
7. Frequently asked questions
8. Testimonials and proof
9. CTA to enquire / book

### Service-specific fields
Each service should define:
- target audience
- dog life stage / need
- training type
- suitable for beginners or experienced handlers
- outcomes and timeline
- typical fees or programme structure
- contact CTA wording

### Example service-page module stack
- Intro block
- Feature list
- Outcome statistics
- Process/timeline
- Before and after style narrative
- Pricing summary
- FAQ
- Final CTA

## 8. Page-by-Page Content Strategy
### Home
- Introduce the school and overall value proposition
- Help visitors understand service categories quickly
- Direct to the right page via cards and CTAs

### Puppy classes
- Focus on early socialisation, handling, confidence, and calm manners
- Include age guidance and expected outcomes

### Doggy day care
- Emphasise safe socialisation, enrichment, and routine
- Include daily structure and dog welfare messaging

### Obedience training
- Target everyday control, responsiveness, and reliability
- Explain training process and expected progress

### Gundog training
- Stronger specialist positioning, clear use-case, advanced handling
- Use imagery and outcomes to convey quality and expertise

### Protection training
- Position carefully and professionally with strong safety language and specialist framing
- Avoid sensational or aggressive tone; professional and controlled is essential

### Sheep dog training
- Emphasise working-dog handling, discipline, and responsive stock work
- Use practical language and specific outcomes

### One-to-one training
- Highlight personal attention, tailored coaching, and problem-solving
- Strong value proposition for complex behavioural issues

### Success stories
- Use case-study format with outcomes, process, and recommendation
- Include rich images or before/after references where appropriate

### Testimonials
- Review cards with concise quotes, ratings, and dog-specific context
- Add trust and authenticity

### Gallery
- Organised by category: training, day care, gundog, working dogs, daily life
- Use lightbox-style browsing with accessible captions

### FAQ
- Organise by category: training, day care, pricing, booking, policies
- Provide direct answers and links to relevant service pages

### Contact
- Short form with name, email, phone, dog details, service interest, message
- Include business location, map, and preferred contact method
- Clear privacy wording

### Privacy policy
- Straightforward legal content, concise and readable

## 9. Conversion Flow Design
### Lead generation strategy
- Each service page has a primary CTA near the top and again near the end
- Contact form should collect enough information to qualify the enquiry without feeling long
- Primary enquiry intent mapped to service type and urgency

### Recommended form fields
- Full name
- Email address
- Phone number
- Dog name and breed (optional but helpful)
- Service required
- Location or postcode (optional)
- Message

### Form logic
- Validation through Zod and React Hook Form
- Inline errors and accessible messaging
- Clear success confirmation and next-step instructions

## 10. Design System Blueprint
### Typography
- H1: large, confident, premium
- H2/H3: structured with strong spacing
- Body: relaxed but highly readable
- Use a maximum of two font families for clarity

### Color palette
Use the palette already defined in the project standards:
- Forest green #173A2A
- Ochre #C88D42
- Clay #D77A5B
- Ivory #F7F2EA
- White
- Slate
- Sand border
- Sage success

### Buttons
- Primary: green with warm accent hover
- Secondary: white with border
- Tertiary: text link with underline on hover
- Rounded corners, modest but modern, accessible contrast

### Cards
- Soft shadow or subtle border
- Consistent height for service cards
- Strong title hierarchy and short summary lines

### Motion
- Subtle entrance animations for sections
- Gentle card hover transitions
- Reduced motion support for accessibility compliance

## 11. Accessibility and SEO Blueprint
- Use semantic HTML with heading hierarchy
- Ensure every image has alt text or decorative treatment
- Provide keyboard navigation for nav, accordions, and forms
- maximum contrast and focus rings
- metadata per page, including local business schema
- FAQ pages should use explicit FAQ schema when appropriate
- service pages should have local keywords and structured descriptions

## 12. Mobile Experience Priorities
- Mobile menu should be quick and clear
- CTA buttons must be visible without excessive scrolling
- Contact form must be single-column and easy to complete
- Service cards should stack cleanly and maintain readability
- Avoid long paragraphs without visual breaks

## 13. Content and Media Rules
- Use authentic dog photography where possible
- Add short captions to support trust and relevance
- Do not overuse stock imagery or generic training graphics
- Keep headings user-first and outcome-oriented
- Use plain English over jargon where possible

## 14. Recommended Implementation Order
### Phase 1 — design system and shell
- app shell
- responsive navigation
- typography and color tokens
- common button/card patterns

### Phase 2 — core marketing pages
- homepage
- service overview pages
- testimonials and success stories
- FAQ

### Phase 3 — conversion layer
- contact form
- enquiry handling
- validation and success states

### Phase 4 — CMS and content migration
- Sanity integration
- page and service content models
- media management

### Phase 5 — hardening and launch
- SEO metadata
- accessibility review
- performance tuning
- Vercel production deployment

## 15. Approval Gate for Production Build
This page blueprint should be reviewed before production implementation begins. Once approved, the next stage is the actual component build and route implementation in Next.js.
