# Cloudflare deployment instructions

Hosting target: Cloudflare Pages.
CMS target: Sanity.

## Cloudflare Pages settings

Use these default settings for this starter:

- Production branch: `main`
- Framework preset: Astro, or None with manual settings
- Root directory: leave blank
- Build command: `npm run build:web`
- Output directory: `apps/web/dist`
- Node version: `20.19.0` or newer

## Required environment variables

Add only public build-time values unless a future scoped integration requires otherwise:

- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`
- `PUBLIC_SANITY_API_VERSION`
- `PUBLIC_SANITY_USE_CDN`
- `PUBLIC_SITE_URL`

Optional public values:

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_PLAUSIBLE_DOMAIN`
- `PUBLIC_DEFAULT_BOOKING_URL`
- `PUBLIC_DEFAULT_ORDER_URL`
- `PUBLIC_DEFAULT_ECOMMERCE_URL`
- `PUBLIC_DEFAULT_GIVING_URL`
- `PUBLIC_DEFAULT_LIVESTREAM_URL`

Do not add Sanity write tokens, payment keys, OAuth secrets, webhook secrets, or private credentials to this repository.

## Deploy steps

1. Push the repository to GitHub.
2. In Cloudflare Pages, create a new project connected to the GitHub repository.
3. Configure the build command and output directory above.
4. Add environment variables from `.env.example` using approved values.
5. Deploy a preview branch first if available.
6. Verify the preview URL on desktop and mobile.
7. Confirm robots, sitemap, canonical URLs, metadata, schema, integrations, and redirects.
8. Connect the production domain in Cloudflare.
9. Verify SSL, DNS, redirects, and Search Console setup.

## Sanity Studio deployment note

This starter includes a local Sanity Studio in `apps/studio`. Host the Studio with Sanity's standard deployment flow or another approved internal hosting target. Keep Studio access limited to authorized editors.
