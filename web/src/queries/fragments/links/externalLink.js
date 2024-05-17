import { graphql } from 'gatsby';

export const externalLinkData = graphql`
  fragment externalLinkData on SanityLinkExternal {
    newWindow
    title
    url
  }
`;
