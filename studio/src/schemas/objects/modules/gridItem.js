import { ThLargeIcon } from '@sanity/icons';

export default {
  name: 'gridItem',
  title: 'Grid Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'module.image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      body: 'body',
      image: 'image',
    },
    prepare: (selection) => {
      const { title, body } = selection;
      return {
        title: title,
        subtitle: body,
      };
    },
  },
};
