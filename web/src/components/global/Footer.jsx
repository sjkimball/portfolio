import React from 'react';
import { Link } from 'gatsby';

import './footer.css';

const Footer = (props) => {
  // console.dir('props in footer', props);
  const { links, text } = props;
  return (
    <footer
      id="mainFooter"
      className={`footer`}
      // data-theme={`${isIndex ? 'dark' : 'light'}`}
    >
      <ul className="footer__links">
        {links.map((item, i) =>
          item._type == 'link.internal' ? (
            <li key={i}>
              <Link to={`/${item.reference.slug.current}`}>{item.title}</Link>
            </li>
          ) : item._type == 'link.external' ? (
            <li key={i}>
              <a
                href={item.url}
                target={item.newWindow == true ? '_blank' : ''}
              >
                {item.title}
              </a>
            </li>
          ) : (
            ''
          ),
        )}
      </ul>
      <small className="footer__copyright">{text}</small>
    </footer>
  );
};

export default Footer;
