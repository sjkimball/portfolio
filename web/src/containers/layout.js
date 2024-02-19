import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

function LayoutContainer(props) {
  const data = useStaticQuery(graphql`
    query {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
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
