import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "agency-starter-studio",
  title: process.env.SANITY_STUDIO_PROJECT_TITLE || "Agency Starter Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "yourprojectid",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
