import React from 'react';

export default {
  name: 'officeGroup',
  title: 'Office Group',
  type: 'object',
  initialValue: {
    disabled: false,
  },
  fields: [
    {
      name: 'disabled',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Offices',
      description: 'Choose from our offices.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'office' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      disabled: 'disabled',
    },
  },
};
