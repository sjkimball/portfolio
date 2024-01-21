import React from 'react';

export default {
  name: 'twoUpContainer',
  title: 'Two-Up Container',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'messageImage' }],
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Horizontal', value: 'horizontal' },
          { title: 'Vertical', value: 'vertical' },
        ],
      },
    },
    {
      name: 'disabled',
      title: 'Disable?',
      type: 'boolean',
    },
  ],
  initialValue: {
    disabled: false,
    layout: 'horizontal',
  },
  preview: {
    select: {
      title: 'title',
    },
  },
};
