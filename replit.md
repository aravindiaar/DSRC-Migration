# DSRC Website

## Overview

Corporate website for **DSRC** (Data Software Research Company), a faithful recreation of dsrc.com. Built as a React SPA with all content driven from a centralized data file.

## Pages

- **Home** (`/`) — Hero image slider, WHO WE ARE paragraphs, Services grid with images, Customer logos, Testimonials with photos, Careers CTA
- **Services** (`/services`) — Detailed service offerings with alternating image/text layout
- **Who We Are** (`/who-we-are`) — Vision, Mission, Values, Company Overview, Global Locations
- **Careers** (`/careers`) — Benefits, Core Values, Career CTA
- **Contact** (`/contact`) — Contact form + 5 office listings

## Architecture

### Frontend
- React 18 + TypeScript, Vite bundler
- Routing: `wouter`
- Styling: Tailwind CSS + DSRC brand color `#0033a0`
- Components: shadcn/ui primitives for form elements
- Icons: `lucide-react`, `react-icons/si` (LinkedIn)
- SEO: Custom `useHead` hook for document title + meta tags
- Images: Hero slides, service photos, customer logos, testimonial photos in `/public/images/`

### Content Strategy
All site text in `client/src/data/siteContent.ts`. Page components pass data as props to reusable section components.

### Component Structure
- `client/src/components/layout/` — Navbar (sticky white, logo, dropdowns), Footer (4-column)
- `client/src/components/sections/` — HeroSlider, HeroSection, WhoWeAreSection, ServicesSection, TestimonialsSection, CareersSection, CTASection, ContactSection, CustomersSection
- `client/src/hooks/use-head.ts` — SEO head management

### Backend
- Express 5 (TypeScript), entry: `server/index.ts`
- Vite dev middleware in development
- Routes skeleton in `server/routes.ts`

### Design Matching dsrc.com
- White navbar with DSRC logo image and navy blue "Let's Connect!" button
- Hero: full-width image slider with left-aligned text, navigation arrows, dot indicators
- WHO WE ARE: plain paragraphs on white background, blue heading
- Services: light gray background, image cards above blue uppercase titles
- Customer logos: blue background bar
- Testimonials: cards with author photos, quotes, name/role
- Footer: white background with 4-column layout
