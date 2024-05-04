import { FaInfo } from 'react-icons/fa';

export default {
  name: 'infoBlock',
  title: 'Info Block',
  type: 'object',
  icon: FaInfo,
  fields: [
    {
      name: 'image',
      title: 'Image or Graphic',
      type: 'mainImage',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'title',
      subtitle: 'content',
    },
    prepare(selection) {
      const { media, title, subtitle } = selection;
      return {
        media: media,
        title: title,
        subtitle: subtitle,
      };
    },
  },
};
