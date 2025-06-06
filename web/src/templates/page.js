import React from 'react';

import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphqlErrorList';
import HeroHome from '../components/heroes/Home';
import HeroPage from '../components/heroes/Page';
import Layout from '../components/global/Layout';
import PortableText from '../components/portableText/PortableText';
import SectionBlock from '../components/portableText/blocks/SectionBlock';
import ProjectsBlock from '../components/portableText/blocks/ProjectsBlock';
import GridBlock from '../components/portableText/blocks/GridBlock';
import SEO from '../components/Seo';

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

  // Page Content
  const page = data.page;
  // Hero
  const hero =
    page._id && page._id == 'home' ? (
      <HeroHome {...page.hero} />
    ) : page.showHero && page.showHero == true ? (
      <HeroPage {...page.hero} />
    ) : (
      <header>
        <h1>{page.title}</h1>
      </header>
    );

  //Home Page Content
  const modules = (page._rawContent || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case 'module.projects':
          el = <ProjectsBlock key={c._key} {...c} />;
          break;
        case 'module.grid':
          el = <GridBlock key={c._key} {...c} />;
          break;
        case 'module.section':
          el = <SectionBlock key={c._key} {...c} />;
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
      {body.length > 0 ? <PortableText blocks={body} /> : ''}
    </Layout>
  );
};

export default Page;
