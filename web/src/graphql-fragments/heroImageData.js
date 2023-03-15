import { graphql } from 'gatsby';

export const heroImageData = graphql`
  fragment heroImageData on SanityHero {
    heroImage {
      ...imageData
    }
  }
`;
