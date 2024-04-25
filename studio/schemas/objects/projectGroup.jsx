import React from 'react';

export default {
  name: 'projectGroup',
  title: 'Project Group',
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
      description: 'Describes group of projects',
      type: 'string',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
          options: {
            filter: 'visibility == $visibility',
            filterParams: {
              visibility: true,
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(12).unique(),
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
      subtitle: 'subtitle',
      disabled: 'disabled',
    },
    prepare: (selection) => {
      const { title, subtitle, disabled } = selection;
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
