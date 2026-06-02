import { defineField, defineType } from "sanity";
export const event = defineType({
  name: "event",
  title: "Events and Church Integrations",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "startDate", type: "datetime" }),
    defineField({ name: "endDate", type: "datetime" }),
    defineField({ name: "externalEventUrl", type: "url" }),
    defineField({ name: "registrationUrl", type: "url" }),
    defineField({
      name: "sourceOfTruth",
      type: "string",
      description:
        "Existing church, registration, or event platform that owns this data.",
    }),
    defineField({
      name: "approvalStatus",
      type: "string",
      options: { list: ["draft", "client-approved", "needs-review"] },
      initialValue: "draft",
    }),
  ],
});
