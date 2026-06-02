import { defineField, defineType } from "sanity";
export const teamMember = defineType({
  name: "teamMember",
  title: "Team Members",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "bio", type: "text" }),
    defineField({ name: "email", type: "email" }),
    defineField({
      name: "approvalStatus",
      type: "string",
      options: { list: ["draft", "client-approved", "needs-review"] },
      initialValue: "draft",
    }),
  ],
});
