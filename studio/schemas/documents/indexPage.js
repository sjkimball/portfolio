import { FaLink } from 'react-icons/fa';

export default {
  name: 'indexPage',
  type: 'document',
  title: 'Index Page',
  icon: FaLink,
  fields: [
    {
      name: 'page',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      description:
        'The page you want to appear at the index. Remember it needs to be published.',
      to: [
        {
          type: 'page',
        },
      ],
      options: {
        filter: 'indexPage == $indexPage',
        filterParams: { indexPage: true },
      },
    },
  ],
  preview: {
    select: {
      title: 'page.title',
    },
  },
};
