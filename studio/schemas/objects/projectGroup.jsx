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
      disabled: 'disabled',
      projects: 'projects',
    },
    prepare: ({ disabled, projects }) => {
      const numberOfProjects = projects.length;
      const subtitle = `${numberOfProjects} projects`;
      return {
        title: `Project Group`,
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
