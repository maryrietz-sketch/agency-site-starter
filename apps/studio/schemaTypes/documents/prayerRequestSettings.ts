import { defineField, defineType } from "sanity";

export const prayerRequestSettings = defineType({
  name: "prayerRequestSettings",
  title: "Prayer Request Settings",
  type: "document",
  fields: [
    defineField({
      name: "publicInstructions",
      title: "Public instructions",
      type: "text",
      description:
        "Do not collect private pastoral care details in the website CMS.",
    }),
    defineField({
      name: "externalPrayerFormUrl",
      title: "External prayer form URL",
      type: "url",
      description:
        "Use an approved secure church platform when prayer requests may contain private information.",
    }),
    defineField({
      name: "privacyWarning",
      title: "Privacy warning",
      type: "text",
      initialValue:
        "Do not store private prayer requests, child data, donor data, or pastoral care notes in Sanity.",
    }),
  ],
});
