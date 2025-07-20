import { ThLargeIcon } from '@sanity/icons';

const GRIDVARIANTS = [
  { title: 'Unbalanced Right', value: 'unbalancedRight' },
  { title: 'Unbalanced Left', value: 'unbalancedLeft' },
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
      description:
        'This is used only for clarity in content editor. It will not appear in the site.',
      validation: (Rule) => Rule.required(),
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
      name: 'layout',
      title: 'Layout',
      type: 'string',
      description: 'Choose from grid layout options.',
      options: {
        list: GRIDVARIANTS,
      },
      initialValue: 'grid',
      fieldset: 'layoutOptions',
    },
    // {
    //   name: 'fullWidth',
    //   title: 'Full Width',
    //   type: 'boolean',
    //   initialValue: false,
    //   fieldset: 'layoutOptions',
    // },
    // {
    //   name: 'darkMode',
    //   title: 'Dark Mode',
    //   type: 'boolean',
    //   initialValue: false,
    //   fieldset: 'layoutOptions',
    // },
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
