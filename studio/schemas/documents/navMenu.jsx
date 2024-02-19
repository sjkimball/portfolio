export default {
  type: 'document',
  name: 'navigationMenu',
  title: 'Navigation Menu',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [{ type: 'cta' }],
    },
  ],
};
