# DSRC Website

## Overview

Corporate website for **DSRC** (Data Software Research Company), migrated from dsrc.com into a modern React SPA. All page content is centralized in `client/src/data/siteContent.ts` — no text is hardcoded in components.

## Pages

- **Home** (`/`) — Hero, Stats, Who We Are, Services, Testimonials, Careers, CTA
- **Services** (`/services`) — Detailed service offerings with feature lists
- **Who We Are** (`/who-we-are`) — Vision, Mission, Values, Company Overview, Global Locations
- **Careers** (`/careers`) — Benefits, Core Values, Career CTA
- **Contact** (`/contact`) — Contact form + office listings

## Architecture

### Frontend
- React 18 + TypeScript, Vite bundler
- Routing: `wouter`
- Styling: Tailwind CSS with corporate blue theme (HSL tokens in `index.css`)
- Components: shadcn/ui (Radix primitives)
- Icons: `lucide-react`, `react-icons/si`
- SEO: Custom `useHead` hook for document title + meta tags

### Content Strategy
All site text in `client/src/data/siteContent.ts`. Page components pass data as props to reusable section components.

### Component Structure
- `client/src/components/layout/` — Navbar, Footer
- `client/src/components/sections/` — HeroSection, StatsSection, WhoWeAreSection, ServicesSection, TestimonialsSection, CareersSection, CTASection, ContactSection
- `client/src/hooks/use-head.ts` — SEO head management

### Backend
- Express 5 (TypeScript), entry: `server/index.ts`
- Vite dev middleware in development
- Routes skeleton in `server/routes.ts`
- Storage interface in `server/storage.ts` (in-memory)

### Database
- Drizzle ORM + PostgreSQL schema in `shared/schema.ts`
- Currently using in-memory storage

## Key Patterns
1. Content-driven: siteContent.ts → page → section component
2. All nav links resolve to real routes (no 404s)
3. Dark mode ready via Tailwind `class` strategy
