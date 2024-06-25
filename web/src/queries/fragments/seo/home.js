import { graphql } from 'gatsby';

export const seoHomeData = graphql`
  fragment seoHomeData on SanitySeoHome {
    title
    description
    image {
      ... on SanityImage {
        asset {
          _id
          metadata {
            lqip
          }
        }
        hotspot {
          x
          y
          height
          width
        }
        crop {
          top
          bottom
          left
          right
        }
      }
    }
  }
`;
