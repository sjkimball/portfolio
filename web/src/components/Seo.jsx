import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title id="title">{`${seo.title} | ${defaultTitle}`}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
};

export default SEO;
