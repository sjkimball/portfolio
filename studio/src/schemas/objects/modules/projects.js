import { ProjectsIcon } from '@sanity/icons';

export default {
  name: 'module.projects',
  title: 'Projects Module',
  type: 'object',
  icon: ProjectsIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Describes group of projects',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
          weak: true,
        },
      ],
      validation: (Rule) => Rule.min(1).max(12).unique(),
    },
    {
      name: 'fullWidth',
      title: 'Full Width',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'darkMode',
      title: 'Dark Mode',
      type: 'boolean',
      initialValue: false,
      // hidden: ({ parent }) => parent?.fullWidth !== true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare(selection) {
      const { title, content } = selection;
      const numberOfItems = content.length;
      return {
        title: `${title} - ${numberOfItems} ${numberOfItems > 1 ? 'projects' : numberOfItems == 1 ? 'project' : 'No projects.'}`,
        subtitle: 'Projects',
        media: ProjectsIcon,
      };
    },
  },
};
