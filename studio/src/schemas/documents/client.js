import { FaBuilding } from 'react-icons/fa';

export default {
  name: 'client',
  title: 'Client',
  icon: FaBuilding,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
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
    //TODO Add references to projects done for this client.
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [{ type: 'clientEmployee' }],
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'contact.complete',
      options: {
        collapsed: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'name',
    },
  },
};
