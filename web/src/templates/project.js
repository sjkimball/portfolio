import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import Project from '../components/Project';
import GraphQLErrorList from '../components/graphql-error-list';

export const query = graphql`
  query ($id: String!, $parentRouteID: String!) {
    project: sanityProject(id: { eq: $id }) {
      title
      subtitle
      disciplines
      cover {
        ...imageData
      }
      _rawDescription
      productImages {
        ...imageData
      }
      client {
        name
      }
      sector
      office {
        contactInfo {
          address {
            city
          }
        }
      }
      members {
        firstName
        preferredName
        lastName
        _key
      }
    }
    parentRoute: sanityRoute(id: { eq: $parentRouteID }) {
      page {
        navMenu {
          ...NavMenu
        }
      }
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
  const page = data.parentRoute.page;
  const menuItems = page.navMenu && (page.navMenu.items || []);
  return (
    <Layout navMenuItems={menuItems}>
      <Project project={project} />
    </Layout>
  );
};

export default ProjectTemplate;
