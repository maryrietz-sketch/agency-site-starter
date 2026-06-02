import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || "yourprojectid";
const dataset = process.env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.PUBLIC_SANITY_API_VERSION || "2025-01-01";
const useCdn = (process.env.PUBLIC_SANITY_USE_CDN ?? "true") === "true";
const site = process.env.PUBLIC_SITE_URL || "https://example.com";

export default defineConfig({
  site,
  integrations: [
    sitemap(),
    sanity({
      projectId,
      dataset,
      apiVersion,
      useCdn,
    }),
  ],
});
