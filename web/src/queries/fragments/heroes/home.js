import { graphql } from 'gatsby';

export const heroHomeData = graphql`
  fragment heroHomeData on SanityHeroHome {
    title
    links {
      ...externalLinkData
    }
    content {
      ...imageModuleData
    }
  }
`;
