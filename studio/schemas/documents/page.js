export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      description: 'Add content sections to page. 💀 is a zombie, ✅ is alive.',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'featuredProjects' },
        { type: 'featuredPosts' },
        { type: 'featuredPeople' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
