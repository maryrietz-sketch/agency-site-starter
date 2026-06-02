export const site = {
  name: "Agency Site Starter",
  description:
    "A reusable Astro, Sanity, and Cloudflare Pages starter for local business, church, nonprofit, restaurant, and service-business websites.",
  url: import.meta.env.PUBLIC_SITE_URL || "https://example.com",
  phone: "(555) 000-0000",
  email: "hello@example.com",
  address: {
    street: "123 Example Street",
    city: "Example City",
    region: "ST",
    postalCode: "00000",
    country: "US",
  },
  socialLinks: [] as string[],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Contact", href: "/contact/" },
];
