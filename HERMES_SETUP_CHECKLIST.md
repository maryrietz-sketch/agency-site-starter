# HERMES_SETUP_CHECKLIST.md

## Goal

Set up Hermes as the website-building agent for your agency workflow. Hermes replaces Codex as the tool that reads the repo instructions, edits files, builds sites, documents QA, and helps manage recurring website workflows.

## Core accounts

Required:

- Cloudflare account for Pages, DNS, SSL, redirects, and optional R2.
- GitHub account and GitHub organization for code repositories.
- Sanity account for client-editable content.
- Hermes Agent account/install.
- Google account for Search Console and Analytics.
- Password manager such as 1Password or Bitwarden.

Optional later:

- Resend for production form notifications.
- Cloudflare R2 for large file storage.
- Plausible or Fathom for privacy-friendly analytics.
- MCP/GitHub tools once you are comfortable with basic repo handling.

## Hermes setup order

1. Install Hermes or open the Hermes platform you are using.
2. Configure one model/provider and confirm a normal chat works before adding anything else.
3. Create a dedicated Hermes profile for website work if your Hermes setup supports profiles. Suggested name: `website-agency`.
4. Add the `SOUL.md` content from this kit to the Hermes global personality file or equivalent platform personality area.
5. Add `HERMES.md` to the root of your `agency-site-starter` repository. Keep `AGENTS.md` too if you want compatibility with other agents.
6. Open Hermes inside the local workspace or connected repository.
7. Ask Hermes to inspect the repo and summarize the project structure before it edits anything.
8. Let Hermes scaffold or repair the starter site.
9. Connect the repo to Cloudflare Pages.
10. If Cloudflare fails, paste the build error back into Hermes and ask it to fix the repo.
11. Once the starter works, make the GitHub repo a template.
12. Create one demo client repo from the template before using a real prospect.

## Recommended Hermes profile command pattern

If you are using the command-line version of Hermes, this is the pattern:

```bash
hermes profile create website-agency --description "Builds, audits, documents, launches, and maintains SEO-focused client websites for local businesses and churches."
website-agency setup
website-agency chat
```

If your Hermes platform is browser-based or desktop-based, create the equivalent separate workspace/profile/project named:

```text
website-agency
```

## First Hermes test prompt

Paste this into Hermes inside your `agency-site-starter` repository:

```text
Use HERMES.md and AGENTS.md.

This is the reusable agency starter repository, not a client project yet.

First, inspect the repository and summarize the current structure. Do not make changes until you identify what exists and what is missing.

Then complete anything missing so the repo includes:

1. Astro website in apps/web
2. Sanity Studio in apps/studio
3. Shared docs folder
4. Package scripts for dev, build, preview, build:web, dev:web, and dev:studio
5. .env.example
6. SEO starter components
7. LocalBusiness schema component
8. Church integration placeholder components
9. Restaurant/order/booking/ecommerce placeholder components
10. Client editor guide
11. Cloudflare deployment instructions
12. Troubleshooting guide

Use Cloudflare Pages as the hosting target.
Use Sanity as the CMS target.
Do not add secrets.
Do not add real client content.
Run available checks and tell me what passes or fails.
Create a clear final summary with files changed and next steps.
```

## Cloudflare Pages settings

Use these settings for the starter and most client sites:

```text
Build command: npm run build:web
Build output directory: apps/web/dist
Root directory: /
Production branch: main
```

## Sanity environment variables

Add these to Cloudflare Pages environment variables when the site is ready for CMS content:

```text
PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=production
PUBLIC_SITE_URL=
```

Do not commit `.env` files or secret tokens.

## Minimum first demo

Before using a real prospect, prove this workflow with:

```text
client-demo-church
```

or

```text
client-demo-local-business
```

The demo should prove:

- Hermes can read the repo instructions.
- Hermes can create or repair the Astro/Sanity starter.
- GitHub stores the code.
- Cloudflare builds the site.
- Sanity can hold editable content.
- The client kickoff prompt produces useful docs and a mockup.
