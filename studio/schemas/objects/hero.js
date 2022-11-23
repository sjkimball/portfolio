import React from 'react';

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'heroImage',
      type: 'mainImage',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'disabled',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      disabled: 'disabled',
      heading: 'heading',
      tagline: 'tagline',
      media: 'heroImage.image',
    },
    prepare(selection) {
      const { disabled, heading, tagline, media } = selection;
      return {
        title: `Hero - ${heading}`,
        subtitle: tagline,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {disabled || disabled == null ? '🚫' : '✅'}
          </span>
        ),
      };
    },
  },
};
