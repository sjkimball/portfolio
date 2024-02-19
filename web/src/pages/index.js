import React from 'react';

import useLandingPage from '../hooks/use-landing-page';
import Page from '../templates/page';

const IndexPage = () => {
  const data = useLandingPage();

  return <Page data={data} />;
};

export default IndexPage;
