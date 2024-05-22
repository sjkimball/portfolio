import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/global/Layout';
import Project from '../components/Project';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';

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

// export const Head = ({ location, params, data, pageContext }) => {
//   return (
//     <SEO
//       title={data.page.seo.title || data.page.title}
//       description={data.page.seo.description || data.site.seo.description}
//     />
//   );
// };

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

  const project = data.project;
  const site = data.site;

  return (
    <Layout site={site}>
      <Project project={project} />
    </Layout>
  );
};

export default ProjectTemplate;
