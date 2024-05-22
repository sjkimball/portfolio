import { graphql } from 'gatsby';

export const externalLinkData = graphql`
  fragment externalLinkData on SanityLinkExternal {
    _type
    newWindow
    title
    url
  }
`;
