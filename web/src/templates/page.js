import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../components/seo';

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const Page = (props) => {
  const { data, errors } = props;

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page || data.route.page;

  return (
    <Layout>
      <SEO title={site.title} />
      <div>{page.title}</div>
    </Layout>
  );
};

export default Page;
