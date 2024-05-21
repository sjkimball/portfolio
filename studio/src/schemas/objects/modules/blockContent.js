import { BlockContentIcon } from '@sanity/icons';

export default {
  name: 'module.blockContent',
  title: 'Block Content Module',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'block.simple',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {},
    prepare(selection) {
      const {} = selection;
      return {
        title: 'Block Content Module',
        media: BlockContentIcon,
      };
    },
  },
};
