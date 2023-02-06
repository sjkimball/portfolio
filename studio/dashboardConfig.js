export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec419820244c70183681e4f',
                  title: 'Frontend',
                  name: 'sjkimball',
                  apiId: '30ae73c5-72e5-468b-9083-c9f60e9c8752',
                },
                {
                  buildHookId: '5ec4198043537101c3a54b36',
                  title: 'Studio',
                  name: 'sjkimball-portfolio',
                  apiId: 'ee7886a0-c036-4516-be96-6c456bf9c7bf',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sjkimball/portfolio',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://sjkimball.me/',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent projects',
        order: '_createdAt desc',
        types: ['project'],
      },
      layout: { width: 'medium' },
    },
  ],
};
