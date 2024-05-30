import React from 'react';

import Page from '../templates/page';
import SEO from '../components/Seo';
import useLandingPage from '../hooks/use-landing-page';
import useHomeSeo from '../hooks/use-home-seo';

export const Head = () => {
  const data = useHomeSeo();
  return (
    <SEO
      title={data.page.seo.title || data.site.seo.title}
      description={data.page.seo.description || data.site.seo.description}
    />
  );
};

const IndexPage = () => {
  const data = useLandingPage();
  return <Page data={data} />;
};

export default IndexPage;
