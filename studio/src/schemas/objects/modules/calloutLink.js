import { EarthGlobeIcon } from '@sanity/icons';

export default {
  name: 'module.calloutLink',
  title: 'Callout Link',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'link.external',
    },
  ],
  preview: {
    select: {
      url: 'link.url',
    },
    prepare(selection) {
      const { url } = selection;
      return {
        title: 'Callout Link',
        subtitle: url,
        media: EarthGlobeIcon,
      };
    },
  },
};
