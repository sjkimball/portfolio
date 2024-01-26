import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { gsap } from 'gsap';

import { iconTl, maskTl, linksTl } from '../animations/menu-animation';

import HeaderMask from './headerMask';

import './header.css';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      menuVisible: false,
    };
    this.primaryTl = gsap.timeline({ paused: true });
  }

  componentDidMount() {
    this.primaryTl.add(iconTl()).add(maskTl(), '<0.125').add(linksTl(), '>-.5');
  }

  componentDidUpdate(prevProps, prevState) {
    const { menuVisible: prevVisibility } = prevState;
    const { menuVisible } = this.state;
    if (menuVisible && menuVisible !== prevVisibility) {
      this.primaryTl.play();
    } else if (!menuVisible && menuVisible !== prevVisibility) {
      this.primaryTl.reverse(0);
    }
  }

  showMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible,
    });
  };

  render() {
    const { siteTitle, darkMode, navMenuItems = [], showNav } = this.props;
    const iconClass = darkMode
      ? 'rec-button-icon--white'
      : 'rec-button-icon--black';
    const headerClass = darkMode ? 'mainHeader--dark' : 'mainHeader--light';
    return (
      <header id={`mainHeader`} className={`mainHeader ${headerClass}`}>
        <nav className={`mainNav`} role="navigation">
          <Link to="/" className={`header-logo`}>
            <h1>SK</h1>
          </Link>
          {showNav && navMenuItems && (
            <ul id={`nav-links`} className={`rec-nav-links`}>
              {navMenuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.route}
                    className={`nav-link`}
                    activeClassName={`nav-link--active`}
                    partiallyActive={true}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <button className={`rec-button`} onClick={this.showMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`rec-button-icon ${iconClass}`}
            >
              <line id={`top`} x1="1.5" y1="2" x2="22.5" y2="2" />
              <line id={`middle`} x1="1.5" y1="12" x2="22.5" y2="12" />
              <line id={`bottom`} x1="1.5" y1="22" x2="22.5" y2="22" />
            </svg>
          </button>
        </nav>
        <HeaderMask siteTitle="SK" darkMode={darkMode} />
      </header>
    );
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
};
Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
