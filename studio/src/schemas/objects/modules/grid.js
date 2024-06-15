import { ThLargeIcon } from '@sanity/icons';

const VARIANTS = [
  { title: 'Simple Blocks', value: undefined },
  { title: 'Figures', value: 'figure' },
  { title: 'External Assets', value: 'externalAsset' },
];

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
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: VARIANTS,
      },
      initialValue: undefined,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'module.simpleBlockContent' },
        { type: 'module.figure' },
        { type: 'module.externalAsset' },
      ],
    },
    {
      name: 'fullWidth',
      title: 'Full Width',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'darkMode',
      title: 'Dark Mode',
      type: 'boolean',
      initialValue: false,
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
