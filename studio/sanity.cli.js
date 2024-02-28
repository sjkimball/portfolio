import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'slrn1bhr',
    dataset: 'production',
  },
  graphql: [
    {
      playground: true,
      workspace: 'staging-workspace',
      id: 'staging',
    },
    {
      playground: false,
      workspace: 'production-workspace',
      id: 'production',
    },
  ],
});
