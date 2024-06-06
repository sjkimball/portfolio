import { MenuIcon } from '@sanity/icons';

export default {
  name: 'menu',
  title: 'Menu',
  type: 'object',
  icon: MenuIcon,
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link.internal' }, { type: 'link.external' }],
    },
  ],
};
