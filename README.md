# H&H Landing Page

A conversion-focused landing page for H&H (Hospitality & Healthcare) technology solutions, targeting four customer segments with adaptive theming.

## Features

- **Adaptive Theming**: Four distinct design themes (Hotels, Hospitals, F&B, Property Developers)
- **Segment-Specific Pages**: Dedicated landing pages for each customer segment
- **Product Showcase**: Dynamic product displays based on selected segment
- **Lead Capture Forms**: Form validation with React Hook Form + Zod
- **Integration Highlights**: Oracle/Opera PMS integration showcase
- **Testimonials**: Segment-filtered customer testimonials
- **Pricing Section**: Flexible pricing display
- **Responsive Design**: Mobile-first, fully responsive layout

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS** with CSS variables for theming
- **React Hook Form** + **Zod** for form validation
- **Framer Motion** (ready for animations)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/app
  /api/leads          # Lead capture API endpoint
  /hotels             # Hotels segment page
  /hospitals          # Hospitals segment page
  /f-and-b            # F&B segment page
  /property-developers # Property Developers segment page
  page.tsx            # Home page
  layout.tsx          # Root layout with theme provider
  globals.css         # Global styles with theme variables

/components
  /common             # Shared components (Navigation, Forms, etc.)
  /segments           # Segment-specific hero components
  /providers          # Theme provider
  /ui                 # Base UI components (Button, etc.)

/content              # JSON content files (products, testimonials, segments)
/lib                  # Utilities and schemas
```

## Design Themes

Each segment has its own design theme with:
- Unique color palettes
- Custom typography (heading and body fonts)
- Segment-specific styling (border radius, shadows, spacing)

Themes automatically switch based on the active route.

## Lead Capture

Form submissions are stored in `/data/leads.json` (for development). In production, integrate with:
- Email service (SendGrid, Mailchimp)
- CRM (HubSpot, Salesforce)
- Database (PostgreSQL, MongoDB)

## Deployment

The project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any platform supporting Next.js

## License

Private project - All rights reserved

