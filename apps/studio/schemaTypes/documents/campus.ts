import { defineField, defineType } from "sanity";

export const campus = defineType({
  name: "campus",
  title: "Campus",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Campus name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "address", title: "Address", type: "text" }),
    defineField({
      name: "serviceTimes",
      title: "Service times",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "mapUrl", title: "Map URL", type: "url" }),
  ],
});
