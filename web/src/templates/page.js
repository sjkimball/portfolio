import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import GraphQLErrorList from '../components/graphql-error-list';
import Layout from '../containers/layout';
import TwoUpContainer from '../containers/two-up';
import ProjectGrid from '../components/projectGrid';
import Hero from '../components/hero';
import PeopleGrid from '../components/peopleGrid';
import PostGrid from '../components/postGrid';
import OfficeGrid from '../components/officeGrid';
import MarkdownBlock from '../components/markdownBlock';

import '../styles/pages.css';

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
        case 'twoUpContainer':
          el = <TwoUpContainer key={c._key} {...c} />;
          break;
        case 'projectGroup':
          el = <ProjectGrid key={c._key} {...c} />;
          break;
        case 'peopleGroup':
          el = <PeopleGrid key={c._key} {...c} />;
          break;
        case 'markdownBlock':
          el = <MarkdownBlock key={c._key} {...c} />;
          break;
        case 'postGroup':
          el = <PostGrid key={c._key} {...c} />;
          break;
        case 'officeGroup':
          el = <OfficeGrid key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.route && !data.route.useSiteTitle && page.title;
  const isIndex = page.indexPage;

  return (
    <Layout
      id="layout"
      navMenuItems={menuItems}
      isIndex={isIndex}
      pageTitle={pageTitle}
    >
      <SEO title={site.title} />
      {content}
    </Layout>
  );
};

export default Page;
