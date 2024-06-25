import { DocumentIcon } from '@sanity/icons';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      default: true,
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
      group: 'editorial',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      group: 'editorial',
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
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      seoImage: 'seo.image',
    },
    prepare(selection) {
      const { title, seoImage } = selection;
      return {
        title: title,
        media: seoImage,
      };
    },
  },
};
