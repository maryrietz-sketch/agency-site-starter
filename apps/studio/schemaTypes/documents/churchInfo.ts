import { defineField, defineType } from "sanity";

export const churchInfo = defineType({
  name: "churchInfo",
  title: "Church Info",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Church name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "serviceTimes",
      title: "Service times",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "planAVisitUrl",
      title: "Plan a Visit URL",
      type: "url",
    }),
    defineField({
      name: "givingUrl",
      title: "Giving URL",
      type: "url",
      description: "Use the church approved giving platform.",
    }),
    defineField({
      name: "livestreamUrl",
      title: "Livestream URL",
      type: "url",
    }),
    defineField({ name: "appUrl", title: "Church app URL", type: "url" }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string" }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
    }),
  ],
});
