import { EarthGlobeIcon } from '@sanity/icons';

export default {
  name: 'module.externalAsset',
  title: 'External Asset',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare: (selection) => {
      const { title, media } = selection;
      return {
        title: title,
        media: media,
      };
    },
  },
};
