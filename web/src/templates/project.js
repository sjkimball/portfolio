import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Project from '../components/project';

export const query = graphql`
  query ($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      title
      sector
      projectSummary
      _rawProjectDesc(resolveReferences: { maxDepth: 10 })
      coverImg {
        ...imageData
      }
      productImgs {
        ...imageData
      }
      client {
        name
      }
      office {
        contactInfo {
          address {
            city
          }
        }
      }
      disciplines
      projectMembers {
        name
        _key
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.project;
  return (
    <Layout>
      <Project project={project} />
    </Layout>
  );
};

export default ProjectTemplate;
