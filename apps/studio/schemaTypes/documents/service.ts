import { defineField, defineType } from "sanity";
export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "priceOrStartingAt", type: "string" }),
    defineField({
      name: "approvalStatus",
      type: "string",
      options: { list: ["draft", "client-approved", "needs-review"] },
      initialValue: "draft",
    }),
  ],
});
