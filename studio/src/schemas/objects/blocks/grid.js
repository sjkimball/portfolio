import { ThLargeIcon } from '@sanity/icons';

const GRIDVARIANTS = [
  { title: 'Grid', value: 'grid' },
  { title: 'Flex', value: 'flex' },
  { title: 'Unbalanced', value: 'unbalanced' },
];

export default {
  name: 'block.grid',
  title: 'Grid',
  type: 'object',
  icon: ThLargeIcon,
  fieldsets: [
    {
      name: 'layoutOptions',
      title: 'Layout Options',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional',
    },
    //TODO Should this be labeled 'description' in all blocks?
    {
      name: 'copy',
      title: 'Copy or Description',
      type: 'text',
      rows: 2,
      description: 'Optional',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block.figure' },
        { type: 'block.image' },
        {
          type: 'reference',
          name: 'project',
          title: 'Project',
          to: [{ type: 'project' }],
          weak: true,
          options: {
            disableNew: true,
          },
        },
        {
          type: 'reference',
          name: 'person',
          title: 'Person',
          to: [{ type: 'person' }],
          weak: true,
          options: {
            disableNew: true,
          },
        },
        {
          type: 'reference',
          name: 'post',
          title: 'Post',
          to: [{ type: 'post' }],
          weak: true,
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gridType',
      title: 'Grid Type',
      type: 'string',
      description: 'Choose from grid options.',
      options: {
        list: GRIDVARIANTS,
      },
      initialValue: 'grid',
      fieldset: 'layoutOptions',
    },
    {
      name: 'fullWidth',
      title: 'Full Width',
      type: 'boolean',
      initialValue: false,
      fieldset: 'layoutOptions',
    },
    {
      name: 'darkMode',
      title: 'Dark Mode',
      type: 'boolean',
      initialValue: false,
      fieldset: 'layoutOptions',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare: (selection) => {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: ThLargeIcon,
      };
    },
  },
};
