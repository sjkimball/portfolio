import { graphql } from 'gatsby';

export const PageInfo = graphql`
  fragment PageInfo on SanityPage {
    id
    title
    subtitle
    description
    indexPage
    navMenu {
      ...NavMenu
    }
    _rawContent(resolveReferences: { maxDepth: 10 })
  }
`;
