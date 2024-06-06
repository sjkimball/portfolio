import { graphql } from 'gatsby';

export const seoPageData = graphql`
  fragment seoPageData on SanitySeoPage {
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
