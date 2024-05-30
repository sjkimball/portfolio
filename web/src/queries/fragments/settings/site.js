import { graphql } from 'gatsby';

export const settingsSiteData = graphql`
  fragment settingsSiteData on SanitySettingsSite {
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
    seo {
      ...seoSiteData
    }
  }
`;
