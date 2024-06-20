import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { gsap } from 'gsap';

import { iconTl, maskTl, linksTl } from '../../animations/menu-animation';

import HeaderMask from './HeaderMask';

import {
  header,
  nav,
  logo,
  button,
  icon,
  line,
  navLinks,
  link,
  linkActive,
} from './Header.module.css';

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
    // console.log('props in header', this.props);
    const { links = [] } = this.props;
    return (
      <header id="mainHeader" className={`mainHeader ${header}`}>
        <nav className={nav} role="navigation">
          <Link to="/" className={logo}>
            SK
          </Link>
          {links && (
            <ul id="mainHeader__navLinks" className={navLinks}>
              {links.map((item, index) => {
                return item.reference._type == 'person' ? (
                  <li key={index}>
                    <Link
                      to={`/${item.title.toLowerCase()}/${item.reference.slug.current}`}
                      className={link}
                      activeClassName={linkActive}
                      partiallyActive={true}
                    >
                      {item.title}
                    </Link>
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={`/${item.reference.slug.current}`}
                      className={link}
                      activeClassName={linkActive}
                      partiallyActive={true}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          <button className={button} onClick={this.showMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className={icon}
            >
              <g>
                <line
                  id="top"
                  className={line}
                  x1="5"
                  y1="16"
                  x2="95"
                  y2="16"
                />
                <line
                  id="middle"
                  className={line}
                  x1="5"
                  y1="51"
                  x2="95"
                  y2="51"
                />
                <line
                  id="bottom"
                  className={line}
                  x1="5"
                  y1="86"
                  x2="95"
                  y2="86"
                />
              </g>
            </svg>
          </button>
        </nav>
        <HeaderMask siteTitle="SK" showNav={this.state.menuVisible} />
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
