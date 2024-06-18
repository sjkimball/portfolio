import { BlockContentIcon } from '@sanity/icons';

export default {
  name: 'module.section',
  title: 'Block Section Module',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'block.section',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: 'Block Section Module',
        media: BlockContentIcon,
      };
    },
  },
};
