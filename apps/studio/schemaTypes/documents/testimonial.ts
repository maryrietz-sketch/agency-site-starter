import { defineField, defineType } from "sanity";
export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "name", type: "string" }),
    defineField({ name: "source", type: "string" }),
    defineField({
      name: "approvalStatus",
      type: "string",
      options: { list: ["do-not-use", "client-approved", "needs-review"] },
      initialValue: "needs-review",
    }),
  ],
});
