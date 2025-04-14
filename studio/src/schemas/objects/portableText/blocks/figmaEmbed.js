import { FaFigma } from 'react-icons/fa';

export default {
  name: 'block.figmaEmbed',
  title: 'Figma Embed',
  type: 'object',
  icon: FaFigma,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      url: 'url',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: 'Figma Embed',
        media: FaFigma,
      };
    },
  },
};
