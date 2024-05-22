import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import GraphQLErrorList from '../components/graphql-error-list';
// import Layout from '../containers/layout';
import Layout from '../components/global/Layout';
import HeroHome from '../components/heroes/Home';
import HeroPage from '../components/heroes/Page';
import Grid from '../components/modules/Grid';
import PortableText from '../components/portableText/portableText';

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

export const Head = ({ location, params, data, pageContext }) => {
  return (
    <SEO
      title={data.page.seo.title || data.page.title}
      description={data.page.seo.description || data.site.seo.description}
    />
  );
};

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
      <HeroPage {...page.hero} />
    ) : (
      <h1>{page.title}</h1>
    );

  //Home Page Content
  const modules = (page._rawContent || [])
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
        case 'module.post':
          el = <Grid key={c._key} {...c} />;
          break;
        case 'module.blockContent':
          el = <PortText key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  const body = page._rawBody || [];

  return (
    <Layout site={site}>
      {hero}
      {modules}
      <PortableText blocks={body} />
    </Layout>
  );
};

export default Page;
