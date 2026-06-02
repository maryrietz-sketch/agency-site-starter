# QA plan

Run available local checks before deployment:

```sh
npm install
npm run check
npm run build:web
npm run build
npm run preview
```

Manual QA targets:

- Mobile navigation and responsive layout
- Keyboard access and visible focus states
- Color contrast
- Meaningful headings
- Metadata and schema
- Sitemap and robots
- Booking/order/ecommerce/giving/livestream/event links
- Forms and analytics when added
- No secrets in source code
