import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useCompanyInfo from '../hooks/use-company-info';

import Header from './header';
import Footer from './footer';

import '../styles/_variables.css';
import '../styles/global.css';
import '../styles/layout.css';

const Layout = (props) => {
  const { children, siteTitle, navMenuItems, isIndex, pageTitle } = props;
  const { companyInfo } = useCompanyInfo();
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const location = window.location.pathname;
    if (location.includes('/about')) {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDarkMode(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });

  return (
    <>
      <Header navMenuItems={navMenuItems} siteTitle={siteTitle} />
      {isIndex ? (
        <main className="index__main">{children}</main>
      ) : (
        <main className="mainContainer">
          <h2 className={`pageTitle pageTitle--${pageTitle}`}>{pageTitle}</h2>
          {children}
        </main>
      )}
      <Footer companyInfo={companyInfo} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
