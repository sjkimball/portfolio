import { HomeIcon } from '@sanity/icons';

const TITLE = 'Home';

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
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
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero.home',
      group: 'editorial',
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.home',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: TITLE,
    },
  },
};
