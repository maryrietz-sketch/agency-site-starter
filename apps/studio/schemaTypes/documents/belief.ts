import { defineField, defineType } from "sanity";

export const belief = defineType({
  name: "belief",
  title: "Belief",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "approvalStatus",
      title: "Approval status",
      type: "string",
      options: { list: ["draft", "needsClientApproval", "approved"] },
      initialValue: "needsClientApproval",
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
