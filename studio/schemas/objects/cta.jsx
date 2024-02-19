export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Path',
      name: 'route',
      description: 'Example: /work',
      type: 'string',
    },
    {
      title: 'External link',
      name: 'link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      route: 'route',
      link: 'link',
    },
    prepare({ title, route, link }) {
      let subtitle = 'Not set';
      if (route) {
        subtitle = `Route: ${route}`;
      }
      if (link) {
        subtitle = `External: ${link}`;
      }
      return {
        title,
        subtitle,
      };
    },
  },
};
