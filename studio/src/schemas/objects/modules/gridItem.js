export default {
  name: 'gridItem',
  title: 'Grid Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      body: 'body',
      image: 'image',
    },
    prepare: (selection) => {
      const { title, body, image } = selection;
      return {
        title: title,
        subtitle: body,
        media: image,
      };
    },
  },
};
