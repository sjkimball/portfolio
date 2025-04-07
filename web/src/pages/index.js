import React from 'react';

import Page from '../templates/page';
import SEO from '../components/Seo';
import useLandingPage from '../hooks/use-landing-page';
import useHomeSeo from '../hooks/use-home-seo';
import useSiteSettings from '../hooks/use-site-settings';

export const Head = () => {
  const {
    seo: { title: homeSeoTitle },
    homePage: {
      seo: { description: homeSeoDescription },
    },
  } = useHomeSeo();
  const { seo: siteSeo } = useSiteSettings();
  return (
    <SEO
      title={homeSeoTitle || siteSeo.title}
      description={homeSeoDescription || siteSeo.description}
    />
  );
};

const IndexPage = () => {
  const data = { page: useLandingPage(), site: useSiteSettings() };
  return <Page data={data} />;
};

export default IndexPage;
