import React from 'react';

export default {
  name: 'postGroup',
  title: 'Post Group',
  type: 'object',
  initialValue: {
    disabled: false,
  },
  fields: [
    {
      name: 'posts',
      title: 'Posts',
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
      posts: 'posts',
    },
    prepare: ({ disabled, posts }) => {
      const numberOfPosts = posts.length;
      const subtitle = `${numberOfPosts} ${numberOfPosts > 1 ? 'posts' : 'post'}`;
      return {
        title: 'Post Group',
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
