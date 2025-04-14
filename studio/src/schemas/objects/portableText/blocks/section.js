import { BlockElementIcon } from '@sanity/icons';

const LAYOUTVARIANTS = [{ title: 'Layout1', value: 'layout1' }];

export default {
  name: 'block.section',
  title: 'Section Block',
  type: 'object',
  icon: BlockElementIcon,
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
      validation: (rule) => rule.required(),
    },
    {
      name: 'showTitle',
      title: 'Show Title?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Optional',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'body.section',
      validation: (rule) => rule.required(),
    },
    {
      name: 'layoutType',
      title: 'Layout Type',
      type: 'string',
      description: 'Choose from layout options.',
      options: {
        list: LAYOUTVARIANTS,
      },
      initialValue: 'layout1',
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
        media: BlockElementIcon,
      };
    },
  },
};
