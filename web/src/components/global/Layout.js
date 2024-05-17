import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import PageHeader from '../pageHeader';

const Layout = (props) => {
  const { children, menuItems, pageTitle, pageDescription } = props;

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
      <PageHeader title={pageTitle} description={pageDescription} />
    ) : (
      ''
    );

  return (
    <>
      <Header menuItems={menuItems} />
      {
        <main className="index__main">
          {pageHeader}
          {children}
        </main>

        // <main className="mainContainer">
        //   {pageHeader}
        //   {children}
        // </main>
      }
      {/* <Footer isIndex={isIndex} /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
