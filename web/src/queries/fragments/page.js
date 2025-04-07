import { graphql } from 'gatsby';

export const pageData = graphql`
  fragment pageData on SanityPage {
    title
    slug {
      current
    }
    showHero
    hero {
      ...heroData
    }
    _rawBody(resolveReferences: { maxDepth: 10 })
    seo {
      ...seoPageData
    }
  }
`;
