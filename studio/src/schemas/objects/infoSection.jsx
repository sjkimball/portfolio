export default {
  name: 'infoSection',
  title: 'Information Section',
  type: 'object',
  initialValue: {
    title: 'Information Section',
  },
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Optional',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'infoBlock' }],
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
      disabled: 'disabled',
    },
    prepare(selection) {
      const { title, disabled } = selection;
      return {
        title: `${title ? title : 'Information Section - No title'}`,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {disabled || disabled == null ? '💀' : '✅'}
          </span>
        ),
      };
    },
  },
};
