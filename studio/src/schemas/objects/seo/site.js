export default {
  name: 'seo.site',
  title: 'SEO',
  type: 'object',
  description: 'Defaults for every page',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 2,
      validation: (rule) =>
        rule
          .max(150)
          .warning('Longer descriptions may be truncated by search engines'),
    },
    {
      name: 'url',
      title: 'Site URL',
      type: 'url',
    },
  ],
  validation: (rule) => rule.required(),
};
