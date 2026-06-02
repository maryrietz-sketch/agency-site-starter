import { defineField, defineType } from "sanity";
export const location = defineType({
  name: "location",
  title: "Locations",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "address", type: "text" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "hours", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "mapUrl", type: "url" }),
    defineField({ name: "localSeoDescription", type: "text" }),
  ],
});
