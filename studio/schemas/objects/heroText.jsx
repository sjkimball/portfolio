import React from 'react';

export default {
  title: 'Hero Text',
  name: 'heroText',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'text',
    },
    {
      title: 'Disable?',
      name: 'disabled',
      type: 'boolean',
    },
  ],
  initialValue: {
    disabled: false,
  },
  preview: {
    select: {
      disabled: 'disabled',
    },
    prepare(selection) {
      const { disabled } = selection;
      return {
        title: `Hero Text`,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {disabled || disabled == null ? '🚫' : '✅'}
          </span>
        ),
      };
    },
  },
};
