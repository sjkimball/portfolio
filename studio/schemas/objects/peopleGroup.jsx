import React from 'react';

export default {
  name: 'peopleGroup',
  title: 'People Group',
  type: 'object',
  initialValue: {
    disabled: false,
  },
  fields: [
    {
      name: 'people',
      title: 'People',
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
      disabled: 'disabled',
      people: 'people',
    },
    prepare: ({ disabled, people }) => {
      const numberOfPeople = people.length;
      const subtitle = `${numberOfPeople} ${numberOfPeople > 1 ? 'people' : 'person'}`;
      return {
        title: 'People Group',
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
