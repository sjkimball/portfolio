export default {
  name: 'module.people',
  title: 'People Module',
  type: 'object',
  initialValue: {
    disabled: false,
  },
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
      type: 'string',
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
    {
      name: 'disabled',
      title: 'Disable?',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'title',
      people: 'content',
      disabled: 'disabled',
    },
    prepare: ({ title, disabled, people }) => {
      const numberOfPeople = people.length;
      const subtitle = `${numberOfPeople} ${numberOfPeople > 1 ? 'people' : 'person'}`;
      return {
        title: title,
        subtitle: subtitle,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {disabled || disabled == null ? '💀' : '✅'}
          </span>
        ),
      };
    },
  },
};
