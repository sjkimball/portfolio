import { ImageIcon } from '@sanity/icons';

export default {
  name: 'module.figure',
  title: 'Figure',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'module.image',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      body: 'body',
      image: 'image',
    },
    prepare(selection) {
      const { title, body, image } = selection;
      return {
        title: title,
        subtitle: body,
        media: image.image,
      };
    },
  },
};
