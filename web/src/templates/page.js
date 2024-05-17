import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import GraphQLErrorList from '../components/graphql-error-list';
import Layout from '../containers/layout';
import HeroHome from '../components/heroes/Home';
import Grid from '../components/modules/Grid';
import Profile from '../components/profile';
import InfoSection from '../components/InfoSection';

import '../styles/_variables.css';
import '../styles/global.css';
import '../styles/layout.css';

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      ...pageData
    }
    site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
      ...settingsSiteData
    }
  }
`;

const Page = (props) => {
  console.dir('props in page', props);
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
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Settings" and restart the development server.',
    );
  }
  // Page Content
  const page = data.page;

  // Hero
  const hero =
    page._id && page._id == 'home' ? (
      <HeroHome {...page.hero} />
    ) : page.showHero && page.showHero == true ? (
      <h1>Page Hero</h1>
    ) : (
      ''
    );

  //Content
  const content = (page._rawContent || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case 'module.projects':
          el = <Grid key={c._key} {...c} />;
          break;
        case 'module.people':
          el = <Grid key={c._key} {...c} />;
          break;
        case 'modules.post':
          el = <Grid key={c._key} {...c} />;
          break;
        case 'infoSection':
          el = <InfoSection key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  const menuItems = site.menu && (site.menu.links || []);
  const pageTitle = page.title;
  const pageDescription = page._rawBody;

  return (
    <Layout
      menuItems={menuItems}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <SEO title={site.seo.title} />
      {hero}
      {content}
    </Layout>
  );
};

export default Page;
