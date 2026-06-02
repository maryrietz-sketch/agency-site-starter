import { defineField, defineType } from "sanity";
export const productCategory = defineType({
  name: "productCategory",
  title: "Product Categories",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "sortOrder", type: "number" }),
  ],
});
