# ACCOUNT_SETUP_CHECKLIST.md

## Recommended agency account stack

This is the lowest-cost, easiest-to-manage setup for the agency model described in `AGENTS.md`.

### Required accounts

1. Cloudflare
   - Use for DNS, SSL, Cloudflare Pages hosting, redirects, security basics, and optional Cloudflare R2 storage.
   - Recommended structure: one agency Cloudflare account, one zone per client domain when the client authorizes DNS management.

2. GitHub Organization
   - Use for one private repository per client site.
   - Recommended structure:
     - `agency-starter-site`
     - `client-clientname-site`
     - `client-clientname-sanity`
     - optional `shared-components`

3. Sanity
   - Use as the CMS for client-editable public content.
   - Recommended structure: one Sanity project per client for simpler separation, or one agency project with separate datasets only if you are disciplined about access control.

4. Google account owned by the agency
   - Use for Google Analytics, Google Search Console, Google Tag Manager if needed, and shared reporting.
   - Do not use a personal Gmail account as the agency owner account.

5. Domain registrar access
   - Best option: client keeps domain ownership, agency gets delegated DNS access through Cloudflare.
   - Acceptable option: agency manages domain registration only if the contract makes ownership clear.

6. Password manager
   - Use 1Password, Bitwarden, or similar.
   - Store client platform credentials, recovery codes, API tokens, DNS notes, and launch checklists.

### Usually needed accounts

7. Resend or another transactional email provider
   - Use for contact form notifications if forms are handled by your site.
   - Alternative: Formspree, Basin, Formspark, HubSpot forms, or the client's existing CRM/platform.

8. Payment, ordering, booking, giving, or church platform accounts
   - Usually owned by the client.
   - Your agency should request admin or developer access, not ownership, unless the contract says otherwise.

9. Cloudflare R2
   - Use only when the site needs separate storage for large files, downloadable PDFs, archives, large galleries, sermon audio archives, or media files that should not live in Sanity.
   - Do not put private member, donor, payment, health, child, or pastoral care data here.

### Optional accounts

10. Plausible or Fathom
    - Use when a client wants privacy-friendly analytics instead of Google Analytics.

11. Uptime monitoring
    - Use Better Stack, UptimeRobot, or a similar tool once you have paid maintenance clients.

12. Screaming Frog or another crawler
    - Useful for redirect maps, SEO audits, broken links, and prelaunch checks.

13. Canva or Adobe account
    - Use for light design work, social preview graphics, and image formatting.
    - Keep original brand files organized by client.

## Recommended ownership model

Use this by default:

- Client owns domain.
- Client owns third-party business platforms, including ordering, booking, giving, church apps, ChMS, livestream, email marketing, and commerce.
- Agency manages DNS, hosting, website repo, CMS setup, deployment, and maintenance under contract.
- Agency has admin or developer access where needed.
- Agency does not own client donor data, customer data, member data, payment data, or private operational records.

## Recommended per-client folder or record

For each client, maintain:

- Client name
- Domain registrar
- DNS provider
- Cloudflare zone
- Cloudflare Pages project
- GitHub repository
- Sanity project ID
- Sanity dataset
- Production URL
- Preview URL
- CMS Studio URL
- Analytics property
- Search Console property
- Form provider
- Email notification recipient
- Booking provider
- Ordering provider
- Commerce provider
- Church platform provider, if relevant
- Giving provider, if relevant
- Livestream provider, if relevant
- Key launch dates
- Renewal dates
- Maintenance plan
- Approval status for content and assets

## Default launch setup per client

1. Create or confirm GitHub repo.
2. Create or confirm Sanity project.
3. Create Cloudflare Pages project connected to repo.
4. Add environment variables in Cloudflare Pages.
5. Add custom domain in Cloudflare Pages.
6. Configure DNS in Cloudflare.
7. Verify SSL.
8. Configure redirects.
9. Configure forms and test notification email.
10. Configure analytics.
11. Verify Search Console.
12. Submit sitemap.
13. Test integrations.
14. Document login and editor instructions.
15. Save all non-secret operational notes in repo docs.
16. Save secrets and recovery codes in password manager only.
