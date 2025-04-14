import { EarthGlobeIcon } from '@sanity/icons';
//TODO Could this be consolidated into Callout?

export default {
  name: 'block.calloutLink',
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
