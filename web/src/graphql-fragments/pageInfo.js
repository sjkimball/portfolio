import { graphql } from 'gatsby';

export const PageInfo = graphql`
  fragment PageInfo on SanityPage {
    id
    title
    subtitle
    _rawDescription
    indexPage
    navMenu {
      ...NavMenu
    }
    _rawContent(resolveReferences: { maxDepth: 10 })
  }
`;
