import { graphql } from 'gatsby';

export const heroPageData = graphql`
  fragment heroPageData on SanityHeroPage {
    title
    content {
      ...imageModuleData
    }
  }
`;
