export default {
  name: 'mainImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
    collapsible: true,
  },
  fields: [
    {
      name: 'altText',
      title: 'Alternative Text',
      description: 'Important for SEO and accessibility.',
      type: 'string',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.')
          .min(10)
          .max(80)
          .required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'showCaption',
      title: 'Show Caption?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      altText: 'altText',
      caption: 'caption',
      showCaption: 'showCaption',
      image: 'asset',
    },
    prepare(selection) {
      const { altText, caption, showCaption, image } = selection;
      const subtitle = showCaption == true ? caption : 'Hidden';
      return {
        title: `Alt Text: ${altText}`,
        subtitle: `Caption: ${subtitle}`,
        media: image,
      };
    },
  },
};
