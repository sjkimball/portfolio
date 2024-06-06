import { graphql } from 'gatsby';

export const imageModuleData = graphql`
  fragment imageModuleData on SanityModuleImage {
    image {
      asset {
        altText
        title
        _id
        metadata {
          lqip
        }
      }
      crop {
        bottom
        left
        right
        top
      }
      hotspot {
        height
        width
        x
        y
      }
    }
    caption
    variant
  }
`;
