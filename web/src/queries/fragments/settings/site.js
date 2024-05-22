import { graphql } from 'gatsby';

export const settingsSiteData = graphql`
  fragment settingsSiteData on SanitySettingsSite {
    menu {
      ... on SanityMenu {
        links {
          ...externalLinkData
          ... on SanityLinkInternal {
            _type
            title
            reference {
              ... on SanityPage {
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
    footer {
      ... on SanityFooter {
        links {
          ...externalLinkData
          ... on SanityLinkInternal {
            _type
            title
            reference {
              ... on SanityPage {
                slug {
                  current
                }
              }
            }
          }
        }
        text
      }
    }
    seo {
      ...seoSiteData
    }
  }
`;
