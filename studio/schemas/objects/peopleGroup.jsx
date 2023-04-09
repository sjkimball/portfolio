import React from 'react';

export default {
  name: 'peopleGroup',
  title: 'People Group',
  type: 'object',
  fields: [
    {
      name: 'disabled',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'person',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(6),
    },
  ],
  initialValue: {
    disabled: false,
  },
  preview: {
    select: {
      disabled: 'disabled',
      person0: 'people.0.name',
      person1: 'people.1.name',
      person2: 'people.2.name',
      person3: 'people.3.name',
    },
    prepare: ({ disabled, person0, person1, person2, person3 }) => {
      const people = [person0, person1, person2].filter(Boolean);
      const subtitle = people.length > 0 ? people.join(', ') : '';
      const hasMorePeople = Boolean(person3);
      return {
        title: 'People Group',
        subtitle: hasMorePeople ? `${subtitle}…` : subtitle,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {disabled || disabled == null ? '💀' : '✅'}
          </span>
        ),
      };
    },
  },
};
