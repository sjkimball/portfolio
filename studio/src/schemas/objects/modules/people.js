import { UsersIcon } from '@sanity/icons';

export default {
  name: 'module.people',
  title: 'People Module',
  type: 'object',
  icon: UsersIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Describes group of people',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
      validation: (Rule) => Rule.max(6).min(1).unique(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare(selection) {
      const { title, content } = selection;
      const numberOfItems = content.length;
      return {
        title: `${title} - ${numberOfItems} ${numberOfItems > 1 ? 'people' : numberOfItems == 1 ? 'person' : 'No people.'}`,
        subtitle: 'People',
        media: UsersIcon,
      };
    },
  },
};
