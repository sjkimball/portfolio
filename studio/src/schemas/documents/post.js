export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  initialValue: {
    featured: false,
    cover: {
      _type: 'mainImage',
      asset: {
        _type: 'reference',
        _ref: 'image-316e2b9591cd93c7c36db93a570410bdd5ba7ad9-2400x1344-jpg',
      },
      altText: 'This is placeholder alt text',
      caption: 'This is a placeholder caption.',
    },
  },
  fields: [
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Keep in short and sweet like an old skool tweet.',
      validation: (Rule) =>
        Rule.required()
          .min(40)
          .max(120)
          .error('Subtitles need to be between 40 and 120 characters long.'),
    },
    {
      name: 'cover',
      title: 'Cover Image',
      type: 'mainImage',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'body',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
      validation: (Rule) => Rule.min(1).unique(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'cover.asset',
    },
  },
};
