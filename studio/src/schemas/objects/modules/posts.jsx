export default {
  name: 'module.posts',
  title: 'Posts',
  type: 'object',
  initialValue: {
    disabled: false,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
    {
      name: 'disabled',
      title: 'Disable?',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      disabled: 'disabled',
      posts: 'content',
    },
    prepare: ({ disabled, posts }) => {
      const numberOfPosts = posts.length;
      const subtitle = `${numberOfPosts} ${numberOfPosts > 1 ? 'posts' : 'post'}`;
      return {
        title: 'Posts',
        subtitle: subtitle,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {disabled || disabled == null ? '💀' : '✅'}
          </span>
        ),
      };
    },
  },
};
