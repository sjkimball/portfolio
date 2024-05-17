import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/global/Layout';

function LayoutContainer(props) {
  const data = useStaticQuery(graphql`
    query {
      site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
        seo {
          title
          description
        }
      }
    }
  `);
  if (!data.site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and add some content in "Site settings"',
    );
  }
  return <Layout {...props} siteTitle={data.site.title} />;
}

export default LayoutContainer;
