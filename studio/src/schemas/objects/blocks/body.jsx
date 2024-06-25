export default {
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    // Paragraphs
    {
      type: 'block',
      lists: [{ title: 'Bullet', value: 'bullet' }],
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    // Custom Blocks
    {
      title: 'Images',
      type: 'module.images',
    },
    {
      title: 'Projects',
      type: 'module.projects',
    },
    {
      title: 'Grid',
      type: 'module.grid',
    },
    {
      title: 'Callout',
      type: 'module.callout',
    },
    {
      title: 'Callout Link',
      type: 'module.calloutLink',
    },
    {
      title: 'Figma Embed',
      type: 'module.figmaEmbed',
    },
    {
      title: 'Section',
      type: 'module.section',
    },
  ],
};
