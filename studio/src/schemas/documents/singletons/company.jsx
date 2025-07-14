import { EarthAmericasIcon } from '@sanity/icons';

const TITLE = 'Company';

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  icon: EarthAmericasIcon,
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
    },
    // TODO Add company image resources
    {
      name: 'about',
      title: 'About',
      type: 'text',
    },
    {
      name: 'primaryLocation',
      title: 'Corporate Headquarters',
      type: 'reference',
      to: [{ type: 'office' }],
      options: {
        disableNew: true,
      },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
