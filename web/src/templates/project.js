import React from 'react';

import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphqlErrorList';
import Layout from '../components/global/Layout';
import Project from '../components/Project';
import SEO from '../components/Seo';

export const query = graphql`
  query ($id: String!) {
    page: sanityProject(id: { eq: $id }) {
      title
      subtitle
      _rawBody(resolveReferences: { maxDepth: 10 })
      cover {
        ...imageModuleData
      }
      productImages {
        ...imageModuleData
      }
      client {
        name
      }
      designArea
      disciplines
      sector
      members {
        firstName
        preferredName
        lastName
      }
      seo {
        ...seoPageData
      }
    }
    site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
      ...settingsSite
    }
  }
`;

export const Head = ({ location, params, data, pageContext }) => {
  const title = data.page.seo.title
    ? data.page.seo.title
    : data.page.client.name;
  const description = data.page.seo
    ? data.page.seo.description
    : data.site.seo.description;
  return (
    <SEO description={description}>
      <title id="title">{title}</title>
    </SEO>
  );
};

const ProjectTemplate = (props) => {
  // console.dir('props in project template', props);
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const project = data.page;
  const site = data.site;

  return (
    <Layout site={site}>
      <Project {...project} />
    </Layout>
  );
};

export default ProjectTemplate;
