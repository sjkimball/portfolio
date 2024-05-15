import { FaBuilding } from 'react-icons/fa';

export default {
  name: 'company',
  title: 'Company',
  icon: FaBuilding,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
      rows: 5,
    },
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [{ type: 'person' }],
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'contact.complete',
    },
  ],

  preview: {
    select: {
      title: 'name',
    },
  },
};
