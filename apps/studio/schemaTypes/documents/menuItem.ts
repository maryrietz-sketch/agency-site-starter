import { defineField, defineType } from "sanity";
export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Items",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "price", type: "string" }),
    defineField({
      name: "dietaryTags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "availability", type: "string" }),
    defineField({
      name: "section",
      type: "reference",
      to: [{ type: "menuSection" }],
    }),
    defineField({ name: "sortOrder", type: "number" }),
    defineField({
      name: "approvalStatus",
      type: "string",
      options: { list: ["draft", "client-approved", "needs-review"] },
      initialValue: "draft",
    }),
  ],
});
