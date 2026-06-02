# HERMES_CLIENT_KICKOFF_PROMPT.md

Copy this into Hermes when starting a new client project. Replace the bracketed fields.

```text
Use HERMES.md and any AGENTS.md file in this repository.

This is a client website project. Inspect the repository first, then create or update the project documentation and implementation.

CLIENT WEBSITE TO AUDIT:
[PASTE CURRENT WEBSITE URL]

CLIENT BUSINESS NAME:
[PASTE NAME]

BUSINESS TYPE:
[church / restaurant / salon / contractor / clinic / retail / professional service / nonprofit / other]

CITY AND REGION:
[PASTE CITY, STATE]

PRIMARY GOAL:
[phone calls / quote requests / Plan a Visit / online orders / bookings / e-commerce sales / giving / livestream views / event registrations / local SEO traffic / credibility]

SECONDARY GOALS:
[PASTE ANY]

KNOWN REQUIRED FEATURES:
[menu editing / online ordering / shopping / booking / contact form / gallery / reviews / service pages / blog / sermons / events / giving / livestream / church app links / Planning Center / Church Center / Subsplash / Tithely / Pushpay / Breeze / Rock RMS / Realm / other]

KNOWN EXISTING PLATFORMS:
[Cloudflare / GitHub / Sanity / Shopify / Square / Toast / ChowNow / Calendly / Acuity / Planning Center / Subsplash / Pushpay / Tithely / Breeze / YouTube / Vimeo / Facebook / Resi / BoxCast / unknown]

CONTENT PERMISSION STATUS:
Private mockup for the current business owner. Public visible assets may be used provisionally for a private non-indexed mockup only. Require client approval before production launch.

PREFERRED STACK:
Default custom stack unless there is a strong reason not to use it.

HOSTING:
Cloudflare Pages unless another platform is clearly better.

CMS:
Sanity unless another CMS is clearly better.

YOUR TASKS:
1. Audit the current public website and relevant public business profiles.
2. Detect third-party tools, scripts, embeds, forms, ordering, booking, giving, livestream, events, app links, analytics, and CMS clues.
3. Create or update all required documentation in `docs/`.
4. Build or update the site using the starter system.
5. Preserve the client’s real message, brand recognition, facts, and useful assets while improving clarity, SEO, mobile usability, accessibility, and conversion.
6. Make common edits manageable through Sanity or the selected CMS.
7. Preserve existing operational platforms as the source of truth unless there is a clear approved reason to replace them.
8. Run available build, lint, typecheck, accessibility, SEO, link, and integration checks.
9. Document commands run, files changed, QA findings, launch steps, and all items needing client approval.
10. Do not expose secrets or commit private credentials.
```
