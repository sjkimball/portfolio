import { graphql } from 'gatsby';

export const heroData = graphql`
  fragment heroData on SanityHeroPage {
    title
    subtitle
    links {
      ...externalLinkData
      ...internalLinkData
    }
    content {
      ...imageModuleData
    }
  }
`;
