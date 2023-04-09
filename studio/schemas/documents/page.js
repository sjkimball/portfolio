export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navMenu',
      type: 'reference',
      title: 'Navigation menu',
      to: [{ type: 'navigationMenu' }],
      description: 'Which nav menu should be shown, if any?',
    },
    {
      name: 'content',
      title: 'Content',
      description: 'Add content sections to page. 💀 is a zombie, ✅ is alive.',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'splashImage' },
        { type: 'projectGroup' },
        { type: 'postGroup' },
        { type: 'peopleGroup' },
        { type: 'officeGroup' },
      ],
    },
    {
      name: 'indexPage',
      title: 'Use this page as an index page?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      indexPage: 'indexPage',
    },
    prepare(selection) {
      const { title, indexPage } = selection;
      return {
        title: title,
        subtitle: `${indexPage ? 'Index Page' : ''}`,
      };
    },
  },
};
