// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const clientConfig = require('./client-config');
const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sjkimball-portfolio`,
        short_name: `Sam Kimball`,
        start_url: `/`,
        background_color: `#fbfcfe`,
        theme_color: `#191c1e`,
        display: `standalone`,
        icon: `src/images/portfolio_favicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
  ],
};
