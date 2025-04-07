export default {
  name: 'hero.page',
  title: 'Page hero',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    // Subtitle
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
    },
    // Links
    {
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{ type: 'link.internal' }, { type: 'link.external' }],
      validation: (rule) => rule.max(1),
    },
    // Content
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'module.image', initialValue: { variant: 'cover' } }],
      validation: (rule) => rule.max(1),
    },
  ],
};
