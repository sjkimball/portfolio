import React from 'react';

import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphqlErrorList';
import HeroPage from '../components/heroes/Page';
import Layout from '../components/global/Layout';
import PortableText from '../components/portableText/PortableText';
import SEO from '../components/Seo';

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      ...pageData
    }
    site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
      ...settingsSite
    }
  }
`;

export const Head = ({ location, params, data, pageContext }) => {
  const title = data.page.seo.title ? data.page.seo.title : data.page.title;
  const description = data.page.seo.description
    ? data.page.seo.description
    : data.site.seo.description;
  return <SEO title={title} description={description} />;
};

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
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Settings" and restart the development server.',
    );
  }

  let page = {};

  data.page._id && data.page._id == 'home'
    ? (page = data.page.homePage)
    : (page = data.page);

  // Hero
  const hero =
    page.showHero && page.showHero == true ? (
      <HeroPage {...page.hero} />
    ) : (
      <header>
        <h1>{page.title}</h1>
      </header>
    );

  const body = page._rawBody || [];

  return (
    <Layout site={site}>
      {hero}
      {body.length > 0 ? <PortableText blocks={body} /> : ''}
    </Layout>
  );
};

export default Page;
