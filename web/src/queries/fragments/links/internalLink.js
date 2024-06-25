import { graphql } from 'gatsby';

export const internalLinkData = graphql`
  fragment internalLinkData on SanityLinkInternal {
    _type
    title
    reference {
      ... on SanityPage {
        _type
        slug {
          current
        }
      }
      ... on SanityPerson {
        _type
        slug {
          current
        }
      }
    }
  }
`;
