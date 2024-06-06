import { ThLargeIcon } from '@sanity/icons';

export default {
  name: 'module.grid',
  title: 'Grid',
  type: 'object',
  icon: ThLargeIcon,
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
      type: 'array',
      of: [{ type: 'gridItem' }, { type: 'module.externalAsset' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: (selection) => {
      return {
        title: selection.title,
        subtitle: 'Grid',
        media: ThLargeIcon,
      };
    },
  },
};
