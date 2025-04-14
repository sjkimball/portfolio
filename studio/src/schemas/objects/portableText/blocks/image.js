import { ImageIcon } from '@sanity/icons';

export default {
  name: 'block.image',
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
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional',
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
