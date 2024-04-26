import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import GraphQLErrorList from '../components/graphql-error-list';
import Layout from '../containers/layout';
import Hero from '../components/hero';
import Grid from '../components/Grid';
import MarkdownBlock from '../components/markdownBlock';

import '../styles/_variables.css';
import '../styles/global.css';
import '../styles/layout.css';

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
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.',
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
          el = <Hero key={c._key} {...c} />;
          break;
        case 'projectGroup':
          el = <Grid key={c._key} {...c} />;
          break;
        case 'peopleGroup':
          el = <Grid key={c._key} {...c} />;
          break;
        case 'markdownBlock':
          el = <MarkdownBlock key={c._key} {...c} />;
          break;
        case 'postGroup':
          el = <Grid key={c._key} {...c} />;
          break;
        case 'officeGroup':
          el = <Grid key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.route && !data.route.useSiteTitle && page.title;
  const pageSubtitle = page.subtitle;
  const pageDescription = page.description;
  const isIndex = page.indexPage;

  return (
    <Layout
      id="layout"
      navMenuItems={menuItems}
      isIndex={isIndex}
      pageTitle={pageTitle}
      pageSubtitle={pageSubtitle}
      pageDescription={pageDescription}
    >
      <SEO title={site.title} />
      {content}
    </Layout>
  );
};

export default Page;
