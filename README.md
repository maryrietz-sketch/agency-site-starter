# Agency Site Starter

Reusable website production starter for Mary’s agency workflow.

Foundation: Hermes + GitHub + HERMES.md + Cloudflare + Sanity.

This repository is not a real client site. It is a starter system for future local business, church, nonprofit, restaurant, ministry, clinic, contractor, salon, retailer, and professional service websites.

## Stack

- Astro website: `apps/web`
- Sanity Studio: `apps/studio`
- GitHub source control
- Cloudflare Pages hosting
- Cloudflare DNS when authorized
- Sanity CMS for safe client-editable content

## Quick start

```bash
npm install
npm run dev:web
npm run dev:studio
npm run build:web
```

## Cloudflare Pages settings

- Root directory: `/`
- Build command: `npm run build:web`
- Build output directory: `apps/web/dist`
- Production branch: `main`

## Safety rules

- Do not commit real `.env` files or credentials.
- Do not add real client content to this starter.
- Do not invent claims, reviews, prices, certifications, ministries, services, staff, or legal/compliance statements.
- Keep client operational platforms as the source of truth for ordering, booking, giving, registrations, livestream, sermons, apps, ecommerce, and payments.
