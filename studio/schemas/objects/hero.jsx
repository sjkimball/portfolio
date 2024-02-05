import React from 'react';

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'media',
      title: 'Media',
      type: 'mainImage',
    },
    {
      name: 'disabled',
      title: 'Disable?',
      type: 'boolean',
    },
  ],
  initialValue: {
    disabled: false,
  },
  preview: {
    select: {
      title: 'heading',
      media: 'media',
    },
  },
};
