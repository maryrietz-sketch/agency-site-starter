import { defineField, defineType } from "sanity";
export const product = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "price", type: "string" }),
    defineField({ name: "externalCheckoutUrl", type: "url" }),
    defineField({ name: "availability", type: "string" }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "productCategory" }],
    }),
    defineField({
      name: "approvalStatus",
      type: "string",
      options: { list: ["draft", "client-approved", "needs-review"] },
      initialValue: "draft",
    }),
  ],
});
