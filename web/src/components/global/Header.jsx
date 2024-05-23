import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { gsap } from 'gsap';

import { iconTl, maskTl, linksTl } from '../../animations/menu-animation';

import HeaderMask from './HeaderMask';

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
    // console.log('props in header', this.props);
    const { links = [] } = this.props;
    return (
      <header id="mainHeader" className={`header`}>
        <nav className="header__nav" role="navigation">
          <Link to="/" className="nav__logo">
            <h1>SK</h1>
          </Link>
          {links && (
            <ul id="mainHeader__nav__links" className="nav__links">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.reference.slug.current}`}
                    className={`links__link`}
                    activeClassName={`links__link-active`}
                    partiallyActive={true}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <button className="nav__button" onClick={this.showMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="button__icon"
            >
              <g>
                <line
                  id="top"
                  className="icon__line"
                  x1="5"
                  y1="16"
                  x2="95"
                  y2="16"
                />
                <line
                  id="middle"
                  className="icon__line"
                  x1="5"
                  y1="51"
                  x2="95"
                  y2="51"
                />
                <line
                  id="bottom"
                  className="icon__line"
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
