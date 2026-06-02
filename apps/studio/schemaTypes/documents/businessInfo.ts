import { defineField, defineType } from "sanity";

export const businessInfo = defineType({
  name: "businessInfo",
  title: "Business Info",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Business name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 3 }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "serviceArea",
      title: "Service area",
      type: "array",
      of: [{ type: "string" }],
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
