import { LinkedInUrl } from '../../components/LinkedInUrl';
import { MyCustomStringInput } from '../../components/MyCustomStringInput';

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
      name: 'name',
      title: 'Name',
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
        source: 'name',
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
      type: 'markdown',
      group: 'personalInfo',
    },
    {
      name: 'socialMediaAccounts',
      title: 'Social Media Accounts',
      type: 'socialMediaAccounts',
      group: 'personalInfo',
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'contact',
      group: 'personalInfo',
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
      title: 'name',
      subtitle: 'jobTitle.name',
      media: 'profileImg.asset',
    },
  },
};
