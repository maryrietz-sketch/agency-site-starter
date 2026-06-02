# Troubleshooting

## Cloudflare build failures

Check Node version, install logs, root directory, build command, output directory, environment variables, TypeScript errors, Astro errors, Sanity config, and missing dependencies. Reproduce locally with `npm install` and `npm run build:web`.

## Secrets

If a secret is exposed, treat it as compromised, rotate it, remove it from git history if needed, and document the incident privately.

## Sanity

Use placeholder project IDs in starter code. Configure real project IDs in `.env` and Cloudflare Pages environment variables for each client.

## Dependency audit note

`npm audit fix` currently reports moderate transitive advisories through Sanity/Astro language tooling dependencies (`js-yaml`, `uuid`, and `yaml`). The non-forced fix cannot resolve them. `npm audit fix --force` proposes breaking downgrades, so do not apply it automatically. Re-check after upstream Sanity/Astro releases update the affected transitive packages.
