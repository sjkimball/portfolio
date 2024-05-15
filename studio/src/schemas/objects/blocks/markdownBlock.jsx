import { FaMarkdown } from 'react-icons/fa';

export default {
  name: 'markdownBlock',
  title: 'Markdown Block',
  type: 'object',
  icon: FaMarkdown,
  initialValue: {
    title: 'Markdown Block',
  },
  fields: [
    {
      name: 'title',
      title: 'Block Title',
      type: 'string',
      description: 'Optional',
    },
    {
      name: 'mdBlockContent',
      title: 'Content',
      type: 'markdown',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
