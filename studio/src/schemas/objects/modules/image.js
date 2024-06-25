import { ImageIcon } from '@sanity/icons';

const VARIANTS = [
  { title: 'Simple', value: undefined },
  { title: 'Caption', value: 'caption' },
  { title: 'Cover', value: 'cover' },
];

export default {
  name: 'module.image',
  title: 'Image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: VARIANTS,
      },
      initialValue: undefined,
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 2,
      hidden: ({ parent }) => parent?.variant !== 'caption',
    },
  ],
  preview: {
    select: {
      fileName: 'image.asset.originalFilename',
      image: 'image',
    },
    prepare(selection) {
      const { fileName, image } = selection;
      return {
        title: fileName,
        media: image,
      };
    },
  },
};
