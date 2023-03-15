import { defineConfig } from 'sanity';
import { dashboardTool, projectInfoWidget } from '@sanity/dashboard';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';
import deskStructure from './deskStructure';

export default defineConfig({
  title: 'portfolio',
  projectId: 'slrn1bhr',
  dataset: 'production',
  plugins: [
    dashboardTool({
      widgets: [
        projectInfoWidget({
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
        }),
        netlifyWidget({
          title: 'Netlify Deploys',
          description:
            'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
          sites: [
            {
              title: 'Frontend',
              apiId: '30ae73c5-72e5-468b-9083-c9f60e9c8752',
              buildHookId: '5ec419820244c70183681e4f',
              name: 'sjkimball',
            },
            {
              title: 'Studio',
              apiId: 'ee7886a0-c036-4516-be96-6c456bf9c7bf',
              buildHookId: '5ec4198043537101c3a54b36',
              name: 'sjkimball-portfolio',
            },
          ],
        }),
      ],
    }),
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemas,
  },
});
