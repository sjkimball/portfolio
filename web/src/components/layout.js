import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useCompanyInfo from '../hooks/use-company-info';

import Header from './header';
import Footer from './footer';
import PageHeader from './pageHeader';

import '../styles/_variables.css';
import '../styles/global.css';
import '../styles/layout.css';

const Layout = (props) => {
  const {
    children,
    navMenuItems,
    isIndex,
    pageTitle,
    pageSubtitle,
    pageDescription,
  } = props;

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

  const pageHeader =
    pageTitle !== (null || undefined) ? (
      <PageHeader
        title={pageTitle}
        subtitle={pageSubtitle}
        description={pageDescription}
      />
    ) : (
      ''
    );

  return (
    <>
      <Header navMenuItems={navMenuItems} />
      {isIndex ? (
        <main className="index__main">{children}</main>
      ) : (
        <main className="mainContainer">
          {pageHeader}
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
