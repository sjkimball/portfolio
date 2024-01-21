import { FaProjectDiagram } from 'react-icons/fa';

export default {
  name: 'project',
  title: 'Project',
  icon: FaProjectDiagram,
  type: 'document',
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
  initialValue: {
    visibility: false,
    featured: false,
    sector: 'private',
    coverImg: {
      _type: 'mainImage',
      asset: {
        _type: 'reference',
        _ref: 'image-316e2b9591cd93c7c36db93a570410bdd5ba7ad9-2400x1344-jpg',
      },
      altText: 'This is placeholder alt text',
      caption: 'This is a placeholder caption',
    },
  },
  fields: [
    {
      name: 'visibility',
      title: 'Visibility',
      description: 'Determines whether the project is visible to the public.',
      type: 'boolean',
      group: 'admin',
    },
    {
      name: 'featured',
      title: 'Featured',
      description:
        'Determines whether the project should be near top of publicly visible projects.',
      type: 'boolean',
      group: 'admin',
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
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }],
      validation: (Rule) =>
        Rule.required().error('Every project needs a client.'),
      group: 'projectInfo',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(10).max(100).error('Say more with less.'),
      group: 'projectInfo',
    },
    {
      name: 'projectSummary',
      title: 'Project Summary',
      description: 'Overview of the project.',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.required()
          .min(40)
          .max(140)
          .error('Summaries need to be between 40 and 140 characters long.'),
      group: 'projectInfo',
    },
    {
      name: 'projectDesc',
      title: 'Project Description',
      description: 'Detailed description of the project.',
      type: 'projectContent',
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
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Private', value: 'private' },
          { title: 'Public', value: 'public' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'projectInfo',
    },
    {
      name: 'coverImg',
      title: 'Cover Image',
      type: 'mainImage',
      validation: (Rule) => Rule.required(),
      group: 'projectInfo',
    },
    {
      name: 'productImgs',
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
      name: 'office',
      title: 'Office',
      type: 'reference',
      to: [{ type: 'office' }],
      validation: (Rule) => Rule.required().error('Office is required'),
      group: 'team',
    },
    {
      name: 'projectMembers',
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
    {
      title: 'Client, Z-A',
      name: 'clientDesc',
      by: [{ field: 'client.name', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client.name',
      media: 'coverImg.asset',
    },
  },
};
