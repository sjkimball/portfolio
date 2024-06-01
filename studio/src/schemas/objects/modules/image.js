import { ImageIcon } from '@sanity/icons';

export default {
  name: 'module.image',
  title: 'Image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
    {
      name: 'fullWidth',
      title: 'Show full width?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      media: 'image.asset',
      altText: 'image.altText',
      fullWidth: 'fullWidth',
    },
    prepare(selection) {
      const { media, altText, fullWidth } = selection;
      return {
        title: `Alt Text: ${altText}`,
        subtitle: `Show Full Width: ${fullWidth}`,
        media: media,
      };
    },
  },
};
