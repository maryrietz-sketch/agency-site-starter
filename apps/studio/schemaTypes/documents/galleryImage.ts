import { defineField, defineType } from "sanity";
export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Images",
  type: "document",
  fields: [
    defineField({ name: "image", type: "image" }),
    defineField({
      name: "altText",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "caption", type: "string" }),
    defineField({
      name: "approvalStatus",
      type: "string",
      options: { list: ["do-not-use", "client-approved", "needs-review"] },
      initialValue: "needs-review",
    }),
  ],
});
