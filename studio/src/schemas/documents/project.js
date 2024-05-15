import { FaProjectDiagram } from 'react-icons/fa';

export default {
  name: 'project',
  title: 'Project',
  icon: FaProjectDiagram,
  type: 'document',
  initialValue: {
    visibility: false,
    featured: false,
    cover: {
      _type: 'mainImage',
      altText: 'This is placeholder alt text',
      caption: 'This is a placeholder caption',
    },
  },
  groups: [
    {
      name: 'admin',
      title: 'Admin',
    },
    {
      name: 'projectInfo',
      title: 'Project Info',
    },
    {
      name: 'team',
      title: 'Team',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(100).error('Say more with less.'),
      group: 'projectInfo',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Add a custom slug or use Generate button to create based on project title.',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'),
      },
      validation: (Rule) =>
        Rule.required().error('A slug must be generated prior to publishing.'),
      group: 'admin',
    },

    {
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Keep in short and sweet like an old skool tweet.',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(40)
          .max(120)
          .error('Subtitles need to be between 40 and 120 characters long.'),
      group: 'projectInfo',
    },
    {
      name: 'description',
      title: 'Project Description',
      description: 'Detailed description of the project.',
      type: 'blockContent',
      group: 'projectInfo',
    },
    {
      name: 'cover',
      title: 'Cover Image',
      type: 'mainImage',
      validation: (Rule) => Rule.required(),
      group: 'projectInfo',
    },
    {
      name: 'productImages',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'mainImage',
        },
      ],
      options: {
        layout: 'grid',
      },
      group: 'projectInfo',
    },
    {
      name: 'designArea',
      title: 'Design Area',
      type: 'designArea',
      group: 'projectInfo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'disciplines',
      title: 'Disciplines',
      description: 'Select all that apply.',
      type: 'designDiscipline',
      group: 'projectInfo',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'company' }],
      validation: (Rule) =>
        Rule.required().error('Every project needs a client.'),
      group: 'projectInfo',
    },
    {
      name: 'sector',
      title: 'Sector',
      type: 'sector',
      group: 'projectInfo',
    },

    {
      name: 'members',
      title: 'Project Members',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      validation: (Rule) =>
        Rule.required().error('Add at least one contributor.'),
      group: 'team',
    },
  ],
  orderings: [
    {
      title: 'Client, A-Z',
      name: 'clientAsc',
      by: [{ field: 'client.name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'client.name',
      subtitle: 'title',
      media: 'cover.asset',
    },
  },
};
