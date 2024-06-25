import { DocumentsIcon } from '@sanity/icons';

export default {
  name: 'module.posts',
  title: 'Posts',
  type: 'object',
  icon: DocumentsIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Describes group of posts',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare(selection) {
      const { title, content } = selection;
      const numberOfItems = content.length;
      return {
        title: `${title} - ${numberOfItems} ${numberOfItems > 1 ? 'posts' : numberOfItems == 1 ? 'post' : 'No posts.'}`,
        subtitle: 'Posts',
        media: DocumentsIcon,
      };
    },
  },
};
