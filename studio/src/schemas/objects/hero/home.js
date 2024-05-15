export default {
  name: 'hero.home',
  title: 'Hero',
  type: 'object',
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
    },
    // Link
    {
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.max(1),
    },
    // Content
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.max(1),
    },
  ],
};
