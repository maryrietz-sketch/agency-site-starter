import { defineField, defineType } from "sanity";
export const menuSection = defineType({
  name: "menuSection",
  title: "Menu Sections",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "sortOrder", type: "number" }),
  ],
});
