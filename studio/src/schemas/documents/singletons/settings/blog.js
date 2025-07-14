import { ControlsIcon } from '@sanity/icons';

const TITLE = 'Blog Settings';

export default {
  name: 'settings.blog',
  title: TITLE,
  type: 'document',
  icon: ControlsIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe the blog for search engines and social media',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describe your blog',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};
