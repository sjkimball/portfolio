import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useCompanyInfo from '../hooks/use-company-info';

import Header from './header';
import Footer from './footer';

import '../styles/global.css';
import '../styles/layout.css';

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  navMenuItems,
}) => {
  const { companyInfo } = useCompanyInfo();
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const location = window.location.pathname;
    if (location.includes('/about')) {
      document.body.style.backgroundColor = 'var(--gray5)';
      setDarkMode(true);
    } else {
      document.body.style.backgroundColor = 'white';
    }
  });

  return (
    <>
      <Header
        showNav={showNav}
        navMenuItems={navMenuItems}
        siteTitle={siteTitle}
        darkMode={darkMode}
      />
      <main id={`mainContainer`} className={`mainContainer`}>
        {children}
      </main>
      <Footer darkMode={darkMode} companyInfo={companyInfo} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
