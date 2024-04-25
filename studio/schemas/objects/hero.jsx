import React from 'react';

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      description: 'This is a description.',
      type: 'cta',
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
      title: 'headline',
      media: 'media',
    },
  },
};
