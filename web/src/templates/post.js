import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Post from '../components/post';

export const query = graphql`
  query ($id: String!) {
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
  }
`;

const PostTemplate = ({ data }) => {
  const post = data.post;
  return (
    <Layout>
      <Post post={post} />
    </Layout>
  );
};

export default PostTemplate;
