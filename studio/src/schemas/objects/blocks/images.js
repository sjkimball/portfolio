import { ImageIcon } from '@sanity/icons';

export default {
  name: 'block.images',
  title: 'Images',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'content',
      title: 'Images',
      type: 'array',
      of: [{ type: 'block.image' }],
      validation: (rule) => rule.required().max(2),
    },
    {
      name: 'fullWidth',
      title: 'Full width',
      type: 'boolean',
      description: 'Display single image at full width. (Larger breakpoints)',
      initialValue: false,
      hidden: ({ parent }) => parent?.content?.length > 1,
    },
    {
      name: 'verticalAlign',
      title: 'Vertical Alignment',
      type: 'string',
      initialValue: 'top',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          {
            title: 'Top',
            value: 'top',
          },
          {
            title: 'Center',
            value: 'center',
          },
          {
            title: 'Bottom',
            value: 'bottom',
          },
        ],
      },
      hidden: ({ parent }) => !parent?.content || parent?.content.length < 2,
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      images: 'content',
    },
    prepare(selection) {
      const { images } = selection;
      return {
        media: ImageIcon,
        title:
          images.length > 1
            ? `Images: ${images.length}`
            : images.length == 1
              ? `Image: ${images.length}`
              : 'No images',
        subtitle: 'Images',
      };
    },
  },
};
