export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  initialValue: {
    featured: false,
  },
  groups: [
    {
      name: 'admin',
      title: 'Admin',
    },
    {
      name: 'personalInfo',
      title: 'Personal Info',
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
      name: 'biography',
      title: 'Bio',
      type: 'blockContent',
      group: 'personalInfo',
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'contact',
      validation: (Rule) => Rule.required(),
      group: 'personalInfo',
    },
    {
      name: 'socialMediaAccounts',
      title: 'Social Media Accounts',
      type: 'socialMediaAccounts',
      group: 'personalInfo',
    },
    {
      name: 'links',
      title: 'Additional Links',
      type: 'array',
      of: [{ type: 'link' }],
    },
    {
      name: 'office',
      title: 'Office',
      type: 'reference',
      to: [
        {
          type: 'office',
        },
      ],
      group: 'admin',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'reference',
      to: [
        {
          type: 'jobTitle',
        },
      ],
      validation: (Rule) => Rule.required(),
      group: 'admin',
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      preferredName: 'preferredName',
      lastName: 'lastName',
      jobtitle: 'jobTitle.name',
      media: 'profileImg.asset',
    },
    prepare({ firstName, preferredName, lastName, jobTitle, media }) {
      return {
        title: `${preferredName ? preferredName : firstName} ${lastName}`,
        subtitle: jobTitle,
        media: media,
      };
    },
  },
};
