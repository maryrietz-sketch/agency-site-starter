# CLIENT_KICKOFF_PROMPT.md

Paste this into Codex when starting a new client project. Keep `AGENTS.md` in the repository root first.

```text
Use the instructions in AGENTS.md.

Client website to audit and rebuild:
[PASTE CLIENT WEBSITE]

Client business or organization name:
[PASTE NAME]

Business type:
[restaurant / church / salon / contractor / clinic / retail / professional service / nonprofit / other]

Location:
[PASTE CITY, STATE]

Primary goal:
[phone calls / quote requests / online orders / bookings / e-commerce sales / giving / Plan a Visit / livestream views / event registrations / local SEO / credibility]

Secondary goals:
[PASTE]

Known required features:
[menu editing / online ordering / shopping / booking / contact form / gallery / reviews / service pages / blog / giving / livestream / church app links / events / sermons / groups / ministries]

Known existing platforms:
[Planning Center / Church Center / Subsplash / Pushpay / ChurchStaq / Tithely / Breeze / Rock RMS / Realm / MinistryPlatform / TouchPoint / FellowshipOne / Ministry Brands / MinistryOne / ShareFaith / ChurchSpring / One Church / YouTube / Vimeo / Facebook / Church Online Platform / Resi / BoxCast / Shopify / Square / Toast / ChowNow / Calendly / Acuity / other]

Access status:
[public only / embed codes provided / admin access provided / API credentials provided / unknown]

Content permission status:
[unknown / client-approved / client-owned / do-not-reuse-current-copy]

Preferred stack:
Default custom stack unless there is a strong reason not to use it.

Hosting:
Use Cloudflare Pages unless another platform is clearly better.

CMS:
Use Sanity unless another CMS is clearly better.

Your tasks:
1. Audit the current public website.
2. Detect all third-party platforms, links, embeds, scripts, widgets, and integrations.
3. Preserve existing business facts, brand recognition, core message, and operational systems.
4. Create discovery, content inventory, asset-rights, platform, feature, SEO, redirect, integration, CMS, QA, launch, editor, maintenance, and troubleshooting docs.
5. Recommend the right stack for this client.
6. Build or scaffold a modern, mobile-first website with CMS editing for public content.
7. Integrate forms, booking, ordering, shopping, giving, livestream, app links, sermons, events, groups, registrations, maps, and other features through official links, embeds, feeds, or APIs.
8. Do not expose private customer, member, child, donor, payment, pastoral, health, or staff data.
9. Run build, QA, SEO, accessibility, mobile, link, and integration checks.
10. Prepare Cloudflare Pages deployment instructions.
11. Clearly list anything that needs client approval before launch.
```

## Church-specific kickoff version

```text
Use the instructions in AGENTS.md, especially the Church Website Vertical Module and Master SEO Module.

Church website:
[PASTE WEBSITE]

Church name:
[PASTE NAME]

City and region:
[PASTE CITY, STATE]

Denomination or network:
[PASTE IF KNOWN]

Known platforms:
[Planning Center / Church Center / Subsplash / Pushpay / ChurchStaq / Tithely / Breeze / Rock RMS / Realm / MinistryPlatform / TouchPoint / FellowshipOne / Ministry Brands / MinistryOne / ShareFaith / ChurchSpring / One Church / YouTube / Vimeo / Facebook / Church Online Platform / Resi / BoxCast / other]

Primary goal:
[Plan a Visit / livestream views / event registrations / giving / sermon views / new families / Google traffic / volunteer signups / small groups / general modernization]

Required features:
[service times / Plan a Visit / livestream / sermons / giving / events / groups / kids ministry / youth ministry / staff / prayer form / app links / location pages / multi-campus / SEO]

Access status:
[public only / embed codes provided / admin access provided / API credentials provided / unknown]

Content permission status:
[unknown / church-approved / church-owned / do-not-reuse-current-copy]

Your tasks:
1. Audit the current public website.
2. Detect all church platforms, links, embeds, scripts, and third-party tools.
3. Preserve existing church systems as the source of truth unless there is a strong reason to change.
4. Create church-specific integration docs.
5. Create a full SEO keyword map, page intent map, schema plan, local SEO plan, and launch SEO checklist.
6. Build or scaffold a modern website with CMS editing for public content.
7. Integrate giving, events, livestream, app links, sermons, groups, registrations, prayer forms, and ministry pages through official links, embeds, feeds, or APIs.
8. Do not expose private church, member, child, donor, payment, pastoral care, or staff data.
9. Run QA, SEO, accessibility, mobile, link, integration, and build checks.
10. Document all open items that require church staff approval before launch.
```
