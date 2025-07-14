export default {
  name: 'notFoundPage',
  title: '404 page',
  type: 'object',
  group: 'notFoundPage',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 2,
    },
  ],
};
