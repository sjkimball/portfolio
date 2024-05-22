import React from 'react';

import useHomeSeo from '../hooks/use-home-seo';
import useLandingPage from '../hooks/use-landing-page';
import Page from '../templates/page';
import SEO from '../components/seo';

export const Head = () => {
  const data = useHomeSeo();
  // console.log('page in Head on Index', data);
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
