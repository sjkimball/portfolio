import { graphql } from 'gatsby';

export const settingsSite = graphql`
  fragment settingsSite on SanitySettingsSite {
    menu {
      ... on SanityMenu {
        links {
          ...internalLinkData
          ...externalLinkData
        }
      }
    }
    footer {
      ... on SanityFooter {
        links {
          ...internalLinkData
          ...externalLinkData
        }
        text
      }
    }
    notFoundPage {
      body
      title
    }
    ...settingsSiteSeo
  }
`;
