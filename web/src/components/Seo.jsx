import React from 'react';
import useSiteSettings from '../hooks/use-site-settings';

const SEO = ({ title, description, pathname, children }) => {
  const {
    seo: { title: defaultTitle, description: defaultDescription, url },
  } = useSiteSettings();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${url}${pathname || ``}`,
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
