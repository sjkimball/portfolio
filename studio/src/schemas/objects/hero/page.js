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
    // Image
    {
      name: 'image',
      title: 'Image',
      type: 'baseImage',
    },
    // Links
    {
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{ type: 'link.internal' }, { type: 'link.external' }],
      validation: (rule) => rule.max(1),
    },
  ],
};
