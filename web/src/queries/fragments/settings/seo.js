import { graphql } from 'gatsby';

export const settingsSiteSeo = graphql`
  fragment settingsSiteSeo on SanitySettingsSite {
    seo {
      title
      description
      url
    }
  }
`;
