import { defineConfig } from 'sanity';
import { dashboardTool, projectInfoWidget } from '@sanity/dashboard';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';
import structure from './src/structure/structure';
import { structureTool } from 'sanity/structure';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_API_DATASET;

export default defineConfig({
  title: 'Portfolio',
  projectId: projectId,
  dataset: dataset,
  plugins: [
    dashboardTool({
      widgets: [
        projectInfoWidget(),
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
              title: 'Frontend - Staging',
              apiId: '30ae73c5-72e5-468b-9083-c9f60e9c8752',
              buildHookId: '64156c8dcfc66b1d8a3b7ab6',
              name: 'sjkimball',
              branch: 'staging',
            },
            {
              title: 'Studio',
              apiId: 'ee7886a0-c036-4516-be96-6c456bf9c7bf',
              buildHookId: '5ec4198043537101c3a54b36',
              name: 'sjkimball-portfolio',
            },
            {
              title: 'Studio - Staging',
              apiId: 'ee7886a0-c036-4516-be96-6c456bf9c7bf',
              buildHookId: '6412bfbefacaca46cd12b968',
              name: 'sjkimball-portfolio',
              branch: 'staging',
            },
          ],
        }),
      ],
    }),
    structureTool({
      structure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemas,
  },
  studio: {
    components: {},
  },
});
