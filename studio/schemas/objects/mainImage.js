export default {
  name: 'mainImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'altText',
      title: 'Alternative Text',
      description: 'Important for SEO and accessibility.',
      type: 'string',
      options: {
        isHighlighted: true,
      },
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.')
          .min(10)
          .max(80)
          .required(),
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
