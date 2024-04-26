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
      name: 'offices',
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
    {
      name: 'disabled',
      title: 'Disable?',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      disabled: 'disabled',
      offices: 'offices',
    },
    prepare: ({ disabled, offices }) => {
      const numberOfOffices = offices.length;
      const subtitle = `${numberOfOffices} ${numberOfOffices > 1 ? 'offices' : 'office'}`;
      return {
        title: 'Office Group',
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
