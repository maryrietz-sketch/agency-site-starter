# Troubleshooting guide

## Cloudflare build fails

Check:

- Build command is `npm run build:web`
- Output directory is `apps/web/dist`
- Root directory is blank
- Node version is 20.19.0 or newer
- Dependencies installed successfully
- Required public environment variables are present
- Astro typecheck errors are fixed

Reproduce locally:

```sh
npm install
npm run build:web
```

## Sanity project not loading

Check:

- `PUBLIC_SANITY_PROJECT_ID` and `SANITY_STUDIO_PROJECT_ID` are set to the approved project ID
- Dataset exists, usually `production`
- API version is valid
- Studio account has access to the project
- No private token was committed

## Placeholder integration link not showing

Check the relevant Sanity field or public environment variable:

- Booking: `PUBLIC_DEFAULT_BOOKING_URL`
- Ordering: `PUBLIC_DEFAULT_ORDER_URL`
- Ecommerce: `PUBLIC_DEFAULT_ECOMMERCE_URL`
- Giving: `PUBLIC_DEFAULT_GIVING_URL`
- Livestream: `PUBLIC_DEFAULT_LIVESTREAM_URL`

Use approved providers as the source of truth. Do not custom-build payment, ordering, booking, giving, inventory, shipping, tax, refund, donor, member, or registration systems unless explicitly scoped.

## SEO issue

Check:

- Page title and description are unique and client-approved
- Canonical URL uses the production domain
- `PUBLIC_SITE_URL` is set correctly
- LocalBusiness schema has real approved address, phone, and business type
- Sitemap uses production URLs
- Robots.txt points to the production sitemap

## Sensitive data risk

If a secret was committed, rotate it immediately in the provider dashboard, remove it from Git history if needed, and document the incident. Never rely only on deleting the line in a later commit.
