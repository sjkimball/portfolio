export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  initialValue: {
    featured: false,
  },
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    },
    {
      name: 'preferredName',
      title: 'Preferred Name',
      type: 'string',
      description: 'Optional, e.g. Sam instead of Samuel',
      group: 'editorial',
    },
    {
      name: 'middleName',
      title: 'Middle Name or Initial',
      type: 'string',
      description: 'Optional',
      group: 'editorial',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: `Click the 'Generate' button to create a slug based on the person's name.`,
      type: 'slug',
      options: {
        // source: 'name',
        source: (doc, context) =>
          `${doc.preferredName ? doc.preferredName : doc.firstName}-${doc.lastName}`,
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error(
          'Looks like you may have forgotten to generate a slug.:(',
        ),
      group: 'editorial',
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'mainImage',
      group: 'editorial',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'body',
      group: 'editorial',
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'contact.basic',
      validation: (rule) => rule.required(),
      group: 'editorial',
    },
    {
      name: 'links',
      title: 'Additional Links',
      type: 'array',
      of: [{ type: 'link.internal' }, { type: 'link.external' }],
      group: 'editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      preferredName: 'preferredName',
      lastName: 'lastName',
      media: 'image.asset',
    },
    prepare({ firstName, preferredName, lastName, media }) {
      return {
        title: `${preferredName ? preferredName : firstName} ${lastName}`,
        media: media,
      };
    },
  },
};
