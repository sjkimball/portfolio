import React from 'react';

import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphqlErrorList';
import Layout from '../components/global/Layout';
import Project from '../components/documents/Project';
import SEO from '../components/Seo';

export const query = graphql`
  query ($id: String!) {
    page: sanityProject(id: { eq: $id }) {
      title
      subtitle
      _rawBody(resolveReferences: { maxDepth: 10 })
      cover {
        asset {
          altText
          title
          _id
          metadata {
            lqip
          }
        }
        crop {
          bottom
          left
          right
          top
        }
        hotspot {
          height
          width
          x
          y
        }
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
  const { title, description, image } = data.page.seo || {};
  const fallbackTitle = `${data.page.client.name} | ${data.page.title}`;
  const fallbackDescription = data.page.subtitle;
  const seoTitle = title == undefined ? fallbackTitle : data.page.seo.title;
  const seoDescription =
    description == undefined ? fallbackDescription : data.page.seo.description;
  return (
    <SEO description={seoDescription}>
      <title id="title">{seoTitle}</title>
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
