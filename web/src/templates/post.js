import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import Post from '../components/post';
import GraphQLErrorList from '../components/graphql-error-list';

export const query = graphql`
  query ($id: String!, $parentRouteID: String!) {
    post: sanityPost(id: { eq: $id }) {
      slug {
        current
      }
      authors {
        name
        jobTitle {
          name
        }
        profileImg {
          ...imageData
        }
        slug {
          current
        }
      }
      title
      subtitle
      publishedAt
      keywords
      coverImg {
        ...imageData
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
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

const PostTemplate = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const post = data.post;
  const page = data.parentRoute.page;
  const menuItems = page.navMenu && (page.navMenu.items || []);
  return (
    <Layout navMenuItems={menuItems}>
      <Post post={post} />
    </Layout>
  );
};

export default PostTemplate;
