import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import Post from '../components/Post';
import GraphQLErrorList from '../components/GraphqlErrorList';

// export const query = graphql`
//   query ($id: String!, $parentRouteID: String!) {
//     post: sanityPost(id: { eq: $id }) {
//       slug {
//         current
//       }
//       authors {
//         name
//         jobTitle {
//           name
//         }
//         profileImg {
//           ...imageData
//         }
//         slug {
//           current
//         }
//       }
//       title
//       subtitle
//       publishedAt
//       keywords
//       cover {
//         ...imageData
//       }
//       body
//     }
//     parentRoute: sanityRoute(id: { eq: $parentRouteID }) {
//       page {
//         navMenu {
//           ...NavMenu
//         }
//       }
//     }
//   }
// `;

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
