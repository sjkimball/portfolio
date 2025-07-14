import { ControlsIcon } from '@sanity/icons';

const TITLE = 'Settings';

export default {
  name: 'settings.site',
  title: TITLE,
  type: 'document',
  icon: ControlsIcon,
  groups: [
    {
      name: 'navigation',
      title: 'Navigation',
    },
    {
      name: 'notFoundPage',
      title: '404 page',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Menu
    {
      name: 'menu',
      title: 'Menu',
      type: 'menu',
      group: 'navigation',
    },
    // Footer
    {
      name: 'footer',
      title: 'Footer',
      type: 'footer',
      group: 'navigation',
    },
    // Not Found Page
    {
      name: 'notFoundPage',
      title: '404 page',
      type: 'notFoundPage',
      group: 'notFoundPage',
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.site',
      group: 'seo',
    },
  ],
};
