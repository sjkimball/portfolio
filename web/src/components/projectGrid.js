import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// import GraphQLErrorList from '../components/graphql-error-list';

const ProjectGrid = (props) => {
  // console.log('props in project grid', props);
  const data = useStaticQuery(graphql`
    query {
      projects: allSanityProject(filter: { visibility: { eq: true } }) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);
  console.log('data', data.projects.edges);
  //   const { data, errors } = props;

  //   if (errors) {
  //     return (
  //       <Layout>
  //         <GraphQLErrorList errors={errors} />
  //       </Layout>
  //     );
  //   }
};

export default ProjectGrid;
