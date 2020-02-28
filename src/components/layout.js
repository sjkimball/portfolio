import React from 'react'
import PropTypes from 'prop-types'

import useSiteMetaData from '../hooks/use-site-metadata'

import Header from './header'
import Footer from './footer'

import "./layout.css"

const Layout = ({children}) => {
  const site = useSiteMetaData();

  let layoutClass = 'layout';
  let location = window.location.pathname;
  let darkMode = false;
  if (location.includes("/about")) {
    layoutClass = 'layout layout--dark';
    darkMode = true;
  }
  return (
    <React.Fragment>
      <Header siteTitle={site.title} darkMode={darkMode} />
      <div className={layoutClass}>
        <main className={`mainContainer`}>{children}</main>
      </div>
      <Footer darkMode={darkMode}/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
