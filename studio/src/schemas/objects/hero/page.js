export default {
  name: 'hero.page',
  title: 'Page hero',
  type: 'object',
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
    },
    // Content
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'mainImage' }],
      validation: (rule) => rule.max(1),
    },
  ],
};
