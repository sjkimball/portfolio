import { HomeIcon } from '@sanity/icons';

const TITLE = 'Home';

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      name: 'homePage',
      title: 'Page',
      type: 'reference',
      description: 'Page must be published to use as home page.',
      to: [{ type: 'page' }],
      options: {
        disableNew: true,
        filter: 'useAsHomePage == $useAsHomePage',
        filterParams: { useAsHomePage: true },
      },
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.home',
    },
  ],
  preview: {
    select: {
      title: TITLE,
    },
  },
};
