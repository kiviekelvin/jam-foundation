# JAM Foundation Website

Official public website for JAM Foundation, built with Next.js App Router and TypeScript.

## Overview

This repository powers the JAM Foundation digital platform: a multi-page nonprofit website focused on education, economic empowerment, climate resilience, food security, and emergency nutrition.

The site includes campaign pages, transparency pages, media resources, volunteer and contact flows, and a project catalog with dynamic detail pages.

## What This Project Includes

- Full App Router website with dedicated routes for about, projects, impact, stories, media, governance, legal, and policy pages.
- Dynamic project detail pages at `/projects/[slug]`, statically generated from `data/projects.ts`.
- Donation experience with one-time and monthly options, including project-context support via query string.
- Contact and volunteer forms integrated with Web3Forms.
- Per-page SEO metadata and generated sitemap (`app/sitemap.ts`).
- Responsive navigation, animated sections, and JAM brand design tokens.

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript (strict mode)
- UI: React 19
- Styling: Tailwind CSS v4 + custom design tokens in `app/globals.css`
- Components: shadcn/ui primitives + Lucide icons + Framer Motion
- Data/State: Local content modules + TanStack React Query provider

## Project Structure

```text
app/                  Route definitions, metadata, sitemap
components/           Page sections, shared layout, UI building blocks
data/                 Structured project/program content
public/               Static assets (images, logos)
lib/                  Utilities
hooks/                Reusable hooks
```

## Routes

Primary public routes include:

- `/`
- `/about`
- `/our-approach`
- `/founders-message`
- `/projects`
- `/projects/[slug]`
- `/impact`
- `/stories`
- `/gallery`
- `/donate`
- `/jam-circle`
- `/why-donate`
- `/volunteer`
- `/partners`
- `/media`
- `/contact`
- `/financial-transparency`
- `/faqs`
- `/governance`
- `/legal-status`
- `/non-discrimination`
- `/privacy-policy`
- `/terms-of-use`

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+ (repo includes `package-lock.json`)

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## External Service Configuration

### 1) Paystack (Donations)

Donation logic lives in `components/Donate.tsx`.

Before production:

- Replace `PAYSTACK_PUBLIC_KEY` with your real public key.
- Replace all placeholder plan codes in `PAYSTACK_MONTHLY_PLANS`.
- Confirm donation receipt email values.
- Ensure the Paystack inline script is loaded on the client before checkout is triggered.

### 2) Web3Forms (Contact + Volunteer)

Form integrations live in:

- `components/Contact.tsx`
- `components/Volunteer.tsx`

Before production:

- Replace current Web3Forms access keys.
- Validate success/error handling and notification copy.

## Content Model

Program and project content is centralized in `data/projects.ts`.

This includes:

- Category definitions
- Program metadata (slug, title, location, status)
- Impact metrics
- Long-form descriptions
- Objectives and implementation steps

Updating this file updates both the projects index and dynamic project detail pages.

## SEO and Discoverability

- Global metadata is defined in `app/layout.tsx`.
- Route-level metadata is defined per page in `app/**/page.tsx`.
- Sitemap is generated in `app/sitemap.ts` and includes dynamic project routes.

If your production domain changes, update absolute URLs in `app/sitemap.ts`.

## Deployment

Standard Next.js deployment flow:

```bash
npm run build
npm run start
```

This project is also compatible with Vercel deployment.

## Notes

- The repository currently has linting configured, but no automated test suite yet.
- Content and UI are tuned for JAM Foundation's current communications and program structure.
