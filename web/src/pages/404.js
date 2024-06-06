import React from 'react';

import Layout from '../components/global/Layout';
import SEO from '../components/Seo';
import useSiteSettings from '../hooks/use-site-settings';

export const Head = () => {
  return <SEO title="404: Not found" />;
};

// ToDo Needs styling
const NotFoundPage = () => {
  const data = useSiteSettings();
  const site = data.site;
  return (
    <Layout site={site}>
      <section className={`notFound`}>
        <h1>{site.notFoundPage.title}</h1>
        <p>{site.notFoundPage.body}</p>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
