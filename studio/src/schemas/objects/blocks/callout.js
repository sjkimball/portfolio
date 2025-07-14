import { BulbOutlineIcon } from '@sanity/icons';

export default {
  name: 'block.callout',
  title: 'Callout',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 2,
      validation: (rule) => [
        rule.required(),
        rule
          .max(70)
          .warning(`Callout length shouldn't be more than 70 characters.`),
      ],
    },
    {
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{ type: 'link.internal' }, { type: 'link.external' }],
      validation: (rule) => rule.max(1),
    },
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare(selection) {
      const { text } = selection;
      return {
        title: text,
        subtitle: 'Callout',
        media: BulbOutlineIcon,
      };
    },
  },
};
