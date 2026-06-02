# Cloudflare Deployment

Cloudflare Pages target settings:

- Production branch: `main`
- Root directory: `/`
- Build command: `npm run build:web`
- Build output directory: `apps/web/dist`

Set public environment variables in Cloudflare Pages. Store secrets only in Cloudflare environment variables or the approved provider secret manager; never commit secrets.
