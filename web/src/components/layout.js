import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useCompanyInfo from '../hooks/use-company-info';

import Header from './header';
import Footer from './footer';

import '../styles/_variables.css';
import '../styles/global.css';
import '../styles/layout.css';

const Layout = (props) => {
  const { children, siteTitle, navMenuItems } = props;
  const { companyInfo } = useCompanyInfo();
  // const [darkMode, setDarkMode] = useState(false);
  // useEffect(() => {
  //   const location = window.location.pathname;
  //   if (location.includes('/about')) {
  //     document.body.style.backgroundColor = 'var(--gray5)';
  //     setDarkMode(true);
  //   } else {
  //     document.body.style.backgroundColor = 'white';
  //   }
  // });

  return (
    <>
      <Header navMenuItems={navMenuItems} siteTitle={siteTitle} />
      <main id={`mainContainer`} className={`mainContainer`}>
        {children}
      </main>
      <Footer companyInfo={companyInfo} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
