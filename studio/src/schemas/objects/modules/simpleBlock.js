import { BlockContentIcon } from '@sanity/icons';

export default {
  name: 'module.simpleBlockContent',
  title: 'Simple Block',
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
      name: 'body',
      title: 'Body',
      type: 'block.simple',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: (selection) => {
      const { title } = selection;
      return {
        title: title,
        media: BlockContentIcon,
      };
    },
  },
};
