export default {
  name: 'seo.home',
  title: 'SEO',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) =>
        rule
          .max(50)
          .warning('Longer titles may be truncated by search engines'),
    },
  ],
  validation: (rule) => rule.required(),
};
