import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';

import '../../styles/_variables.css';
import '../../styles/global.css';
import '../../styles/layout.css';

const Layout = (props) => {
  // console.dir('props in layout component', props);
  const { children, site } = props;

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
      <Header {...site.menu} />
      <main id="mainContent" className={`mainContent`}>
        {children}
      </main>
      <Footer {...site.footer} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
