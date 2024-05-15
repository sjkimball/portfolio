export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  initialValue: {
    featured: false,
  },
  groups: [
    {
      name: 'personalInfo',
      title: 'Personal Info',
    },
    {
      name: 'admin',
      title: 'Admin',
    },
  ],
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'personalInfo',
    },
    {
      name: 'preferredName',
      title: 'Preferred Name',
      type: 'string',
      description: 'Optional, e.g. Sam instead of Samuel',
      group: 'personalInfo',
    },
    {
      name: 'middleName',
      title: 'Middle Name or Initial',
      type: 'string',
      description: 'Optional',
      group: 'personalInfo',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'personalInfo',
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
      group: 'admin',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'mainImage',
      group: 'personalInfo',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'company' }],
      group: 'admin',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'admin',
    },
    {
      name: 'biography',
      title: 'Bio',
      type: 'blockContent',
      group: 'personalInfo',
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'contact.basic',
      validation: (rule) => rule.required(),
      group: 'personalInfo',
    },
    {
      name: 'links',
      title: 'Additional Links',
      type: 'array',
      of: [{ type: 'link.internal' }, { type: 'link.external' }],
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      preferredName: 'preferredName',
      lastName: 'lastName',
      company: 'company.name',
      media: 'profileImg.asset',
    },
    prepare({ firstName, preferredName, lastName, company, media }) {
      return {
        title: `${preferredName ? preferredName : firstName} ${lastName}`,
        subtitle: company,
        media: media,
      };
    },
  },
};
