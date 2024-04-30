import { FaFigma } from 'react-icons/fa';
import FigmaPreview from '../previews/FigmaPreview';

export default {
  name: 'figmaAsset',
  title: 'Figma Asset',
  type: 'object',
  icon: FaFigma,
  fields: [
    {
      name: 'image',
      title: 'Figma Asset Screenshot',
      type: 'mainImage',
    },
    {
      name: 'url',
      title: 'Figma Asset URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: media.caption,
        media: FaFigma,
      };
    },
  },
};
