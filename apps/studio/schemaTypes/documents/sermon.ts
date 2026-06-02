import { defineField, defineType } from "sanity";

export const sermon = defineType({
  name: "sermon",
  title: "Sermon",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "series",
      title: "Series",
      type: "reference",
      to: [{ type: "sermonSeries" }],
    }),
    defineField({ name: "speaker", title: "Speaker", type: "string" }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({
      name: "mediaUrl",
      title: "Media URL",
      type: "url",
      description: "Use approved sermon/media host.",
    }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string" }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
    }),
  ],
});
