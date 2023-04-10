import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../components/seo';
import GraphQLErrorList from '../components/graphql-error-list';

import Astronaut from '../components/astronaut';
import SplashImage from '../components/splashImage';
import ThumbnailGrid from '../components/thumbnail-grid';

import '../pages/pages.css';

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const Page = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page || data.route.page;

  //Inspect page content and determine what components to render.
  const content = (page._rawContent || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case 'hero':
          el = <Astronaut />;
          break;
        case 'splashImage':
          el = <SplashImage key={c._key} {...c} />;
          break;
        case 'projectGroup':
          el = <ThumbnailGrid key={c._key} {...c} />;
          break;
        case 'postGroup':
          el = <ThumbnailGrid key={c._key} {...c} />;
          break;
        case 'officeGroup':
          el = <ThumbnailGrid key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.route && !data.route.useSiteTitle && page.title;

  return (
    <Layout navMenuItems={menuItems}>
      <SEO title={site.title} />
      {content}
    </Layout>
  );
};

export default Page;
