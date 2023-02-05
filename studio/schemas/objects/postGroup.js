import React from 'react';

export default {
  name: 'postGroup',
  title: 'Post Group',
  type: 'object',
  fields: [
    {
      name: 'disabled',
      type: 'boolean',
    },
    {
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'post',
            },
          ],
          options: {
            // filter: 'featured == $featured',
            // filterParams: { featured: true },
          },
        },
      ],
      validation: (Rule) => Rule.max(6),
    },
  ],
  initialValue: {
    disabled: false,
  },
  preview: {
    select: {
      disabled: 'disabled',
      post0: 'posts.0.title',
      post1: 'posts.1.title',
      post2: 'posts.2.title',
      post3: 'posts.3.title',
    },
    prepare: ({ disabled, post0, post1, post2, post3 }) => {
      const posts = [post0, post1, post2].filter(Boolean);
      const subtitle = posts.length > 0 ? posts.join(', ') : '';
      const hasMorePosts = Boolean(post3);
      return {
        title: 'Post Group',
        subtitle: hasMorePosts ? `${subtitle}…` : subtitle,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {disabled || disabled == null ? '💀' : '✅'}
          </span>
        ),
      };
    },
  },
};
