import { defineConfig } from 'sanity';
import { dashboardTool, projectInfoWidget } from '@sanity/dashboard';
import { RocketIcon, RobotIcon } from '@sanity/icons';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { markdownSchema } from 'sanity-plugin-markdown';
import schemas from './src/schemas/schema';
import { myStructure } from './src/structure/index';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'Portfolio',
    basePath: '/production',
    icon: RocketIcon,
    projectId: projectId,
    dataset: 'production',
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
                title: 'Studio',
                apiId: 'ee7886a0-c036-4516-be96-6c456bf9c7bf',
                buildHookId: '5ec4198043537101c3a54b36',
                name: 'sjkimball-portfolio',
              },
            ],
          }),
        ],
      }),
      structureTool({
        structure: myStructure,
      }),
      visionTool(),
      media(),
      unsplashImageAsset(),
      markdownSchema(),
    ],
    schema: {
      types: schemas,
    },
    studio: {
      components: {},
    },
  },
  {
    name: 'staging-workspace',
    title: 'Staging',
    basePath: '/staging',
    subtitle: 'The world is a stage',
    icon: RobotIcon,
    projectId: projectId,
    dataset: 'staging',
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
                title: 'Staging - Frontend',
                apiId: '30ae73c5-72e5-468b-9083-c9f60e9c8752',
                buildHookId: '64156c8dcfc66b1d8a3b7ab6',
                name: 'sjkimball',
                branch: 'staging',
              },
              {
                title: 'Staging - Studio',
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
        structure: myStructure,
      }),
      visionTool(),
      media(),
      unsplashImageAsset(),
      markdownSchema(),
    ],
    schema: {
      types: schemas,
    },
  },
]);
