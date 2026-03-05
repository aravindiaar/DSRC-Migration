# DSRC Website

## Overview

Corporate website for **DSRC** (Data Software Research Company), a faithful recreation of dsrc.com. Built as a React SPA with all content served from a JSON-based CMS via Express API.

## Pages

- **Home** (`/`) — Hero image slider, WHO WE ARE paragraphs, Services grid with images, Customer logos, Testimonials with photos, Careers CTA
- **Services** (`/services`) — Overview of all 4 service categories
- **Platform & Product Development** (`/services/platform-product-development`) — Capabilities, GenAI, engagement models, process steps, case studies
- **Application Services** (`/services/application-services`) — Expertise areas, engagement models, technology/industry experience
- **Digital Transformation** (`/services/digital-transformation`) — Capabilities, phased approach, governance, business impact
- **Cloud Management** (`/services/cloud-management`) — Cloud computing, IT ops, security services
- **Who We Are** (`/who-we-are`) — Intro, Vision, Mission, DSRC Difference stats, Company Overview, Values, Office Locations
- **Careers** (`/careers`) — Intro, highlights (People/Values/Opportunities/Rewards), Working at DSRC sections, CTA
- **Contact** (`/contact`) — Intro, contact form, 5 office listings

## Architecture

### CMS (JSON-based)
- Content stored as JSON files in `/content/` directory
- `content/global.json` — Navigation, footer, site-wide config
- `content/home.json` — Home page content
- `content/who-we-are.json` — About page content
- `content/careers.json` — Careers page content
- `content/contact.json` — Contact page content
- `content/services/*.json` — Individual service detail pages
- Express API serves content via:
  - `GET /api/content/global` — Global site config
  - `GET /api/content/pages/:page` — Page content
  - `GET /api/content/services/:slug` — Service detail content
  - `PUT /api/content/*` — Update content (CMS write)
  - `GET /api/content/list` — List all available content files

### Frontend
- React 18 + TypeScript, Vite bundler
- Routing: `wouter`
- Content fetching: `@tanstack/react-query` via `client/src/lib/content.ts` hooks
  - `useGlobalContent()` — Navbar/Footer data
  - `usePageContent(page)` — Page-specific data
  - `useServiceContent(slug)` — Service detail data
- Styling: Tailwind CSS + DSRC brand color `#0033a0`
- Components: shadcn/ui primitives for form elements
- Icons: `lucide-react`, `react-icons/si` (LinkedIn)
- SEO: Custom `useHead` hook for document title + meta tags
- Images: Hero slides, service photos, customer logos, testimonial photos in `/client/public/images/`

### Component Structure
- `client/src/components/layout/` — Navbar (sticky white, logo, dropdowns), Footer (4-column)
- `client/src/components/sections/` — HeroSlider, HeroSection, WhoWeAreSection, ServicesSection, TestimonialsSection, CareersSection, CTASection, ContactSection, CustomersSection
- `client/src/pages/` — Home, Services, ServiceDetail (reusable for all 4 services), WhoWeAre, Careers, Contact
- `client/src/hooks/use-head.ts` — SEO head management
- `client/src/lib/content.ts` — React Query hooks for CMS content

### Backend
- Express 5 (TypeScript), entry: `server/index.ts`
- CMS API routes in `server/routes.ts`
- Vite dev middleware in development

### Admin CMS Panel
- Visual content editor at `/admin` — no separate server needed, runs within the existing app
- Split-screen layout: editor form (left, 380px) + live site preview iframe (right)
- Dark navy sidebar lists all editable content: 6 pages + 4 service detail pages
- Features:
  - Click any page in sidebar → loads its JSON fields into the editor form
  - **Click-to-edit**: when preview is open, click any section in the live site preview → editor automatically jumps to and highlights that field
  - Edit text, images, lists, nested objects, list-of-objects (with add/remove)
  - Preview iframe updates to show the selected page
  - Save button → `PUT /api/content/*` endpoint → writes JSON file to disk
  - "Unsaved changes" indicator, save confirmation
  - Toggle button to enable/disable click-to-edit mode
- No external CMS account or API key required — fully self-hosted
- Component: `client/src/pages/admin/AdminCMS.tsx`
- TinaCMS schema reference: `tina/config.ts` (defines all 7 collections/fields)

### Visual Editing Integration
- Custom `useTina` hook in `client/src/lib/tina-react.ts` — drop-in replacement for `tinacms/dist/react`
  - Avoids duplicate React instance crash (tinacms pre-bundles React)
  - Annotates every JSON field with `_content_source: { queryId, path }` metadata
  - Listens for `updateData` postMessages from parent frame (live editing updates)
- All 6 pages use `useTina` + `tinaField()` to generate `data-tina-field` attributes on key elements
- When site is loaded inside the admin iframe, `SiteRouter` adds `tina-admin-preview` class to `<body>`
  - CSS rule shows blue outline on hover for all `data-tina-field` elements
  - Click interceptor detects clicks on `data-tina-field` elements and sends `tina-field-selected` postMessage to admin parent
- Admin receives the click message, parses the field path, auto-switches collection and scrolls/highlights the matching editor field
- IMPORTANT: `tinacms dev` CLI hangs in Replit (LevelDB indexing issue) — TinaCMS admin server intentionally not used; the custom AdminCMS provides equivalent UX

### Key Bug Fixed
- `client/src/lib/content.ts`: `useQuery` with `queryFn: undefined` explicitly set overrides the default query function in TanStack Query v5 → pages stuck on loading forever. Fixed by using spread operator: `...(IS_STATIC && { queryFn: ... })` so `queryFn` is only set when truly needed

### Design Matching dsrc.com
- White navbar with DSRC logo image and navy blue "Let's Connect!" button
- Hero: full-width image slider with left-aligned text, navigation arrows, dot indicators
- WHO WE ARE: plain paragraphs on white background, blue heading
- Services: light gray background, image cards above blue uppercase titles
- Customer logos: blue background bar
- Testimonials: cards with author photos, quotes, name/role
- Footer: white background with 4-column layout
