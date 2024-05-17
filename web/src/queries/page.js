import { graphql } from 'gatsby';

export const pageData = graphql`
  fragment pageData on SanityPage {
    title
    slug {
      current
    }
    showHero
    hero {
      ...heroPageData
    }
    _rawBody
    _rawContent(resolveReferences: { maxDepth: 10 })
    seo {
      ...seoPageData
    }
  }
`;
