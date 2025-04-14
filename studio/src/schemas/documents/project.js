import { FaProjectDiagram } from 'react-icons/fa';

export default {
  name: 'project',
  title: 'Project',
  icon: FaProjectDiagram,
  type: 'document',
  initialValue: {
    cover: {
      caption: 'This is a placeholder caption',
    },
  },
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'team',
      title: 'Team',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(100).error('Say more with less.'),
      group: 'editorial',
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
      group: 'editorial',
    },

    {
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Keep it short and sweet like an old skool tweet.',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(40)
          .max(120)
          .error('Subtitles need to be between 40 and 120 characters long.'),
      group: 'editorial',
    },
    {
      name: 'cover',
      title: 'Cover Image',
      type: 'module.image',
      initialValue: { variant: 'cover' },
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    },
    {
      name: 'body',
      title: 'Project Description',
      description: 'Detailed description of the project.',
      type: 'body.project',
      group: 'editorial',
    },
    {
      name: 'productImages',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'module.image',
        },
      ],
      options: {
        layout: 'grid',
      },
      group: 'editorial',
    },
    {
      name: 'designArea',
      title: 'Design Area',
      type: 'designArea',
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    },
    {
      name: 'disciplines',
      title: 'Disciplines',
      description: 'Select all that apply.',
      type: 'designDiscipline',
      group: 'editorial',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'company' }],
      validation: (Rule) =>
        Rule.required().error('Every project needs a client.'),
      group: 'editorial',
    },
    {
      name: 'sector',
      title: 'Sector',
      type: 'sector',
      group: 'editorial',
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
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'client.name',
      subtitle: 'title',
      media: 'cover.image.asset',
    },
  },
};
