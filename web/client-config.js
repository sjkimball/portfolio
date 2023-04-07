module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2023-03-30',
  },
};
