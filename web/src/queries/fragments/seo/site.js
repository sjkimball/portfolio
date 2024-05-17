import { graphql } from 'gatsby';

export const seoSiteData = graphql`
  fragment seoSiteData on SanitySeoSite {
    title
    description
  }
`;
