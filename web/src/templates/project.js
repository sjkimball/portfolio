import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import Project from '../components/Project';
import GraphQLErrorList from '../components/graphql-error-list';

export const query = graphql`
  query ($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      title
      subtitle
      _rawBody
      cover {
        ...imageData
      }
      productImages {
        ...imageData
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
      ...settingsSiteData
    }
  }
`;

const ProjectTemplate = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const project = data.project;
  const site = data.site;
  const menuItems = site.menu && (site.menu.links || []);

  return (
    <Layout menuItems={menuItems}>
      <Project project={project} />
    </Layout>
  );
};

export default ProjectTemplate;
