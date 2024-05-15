import { DocumentIcon } from '@sanity/icons';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'showHero',
      title: 'Show hero?',
      type: 'boolean',
      description: 'If disabled, page title will be displayed instead.',
      initialValue: false,
      group: 'editorial',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero.page',
      hidden: ({ document }) => !document.showHero,
      group: 'editorial',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      group: 'editorial',
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
        { type: 'module.people' },
        { type: 'module.projects' },
        { type: 'module.posts' },
        { type: 'infoSection' },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
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
