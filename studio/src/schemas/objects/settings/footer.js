export default {
  name: 'footer',
  title: 'Footer',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    // Links
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link.internal' }, { type: 'link.external' }],
    },
    // Text
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 3,
    },
  ],
};
