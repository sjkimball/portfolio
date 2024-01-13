import React from 'react';

export default {
  name: 'messageImage',
  title: 'Message Image',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'image',
      type: 'mainImage',
    },
    {
      name: 'messageOverlay',
      title: 'Message Overlay',
      type: 'string',
      validation: (Rule) =>
        Rule.max(10).error(
          `A message overlay should be no longer than 10 characters.`
        ),
    },
    {
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
      message: 'messageOverlay',
      media: 'image.image',
    },
    prepare(selection) {
      const { disabled, message, media } = selection;
      return {
        title: `Message Image - ${message}`,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {disabled || disabled == null ? '🚫' : '✅'}
          </span>
        ),
      };
    },
  },
};
