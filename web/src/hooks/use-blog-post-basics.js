import { graphql, useStaticQuery } from 'gatsby';

const useBlogPostBasics = () => {
  const data = useStaticQuery(graphql`
    query allPosts {
      posts: allSanityPost(sort: { publishedAt: DESC }) {
        edges {
          node {
            _id
            slug {
              current
            }
            title
            subtitle
            publishedAt
            cover {
              ...imageData
            }
          }
        }
      }
    }
  `);
  return data.posts.edges;
};

export default useBlogPostBasics;
