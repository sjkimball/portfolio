import { FaLink } from 'react-icons/fa';

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: FaLink,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
