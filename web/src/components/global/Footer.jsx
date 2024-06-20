import React from 'react';
import { Link } from 'gatsby';

import { footer, footerLinks, copyright, logo } from './Footer.module.css';

const Footer = (props) => {
  // console.dir('props in footer', props);
  const { links, text } = props;
  return (
    <footer
      id="mainFooter"
      data-theme="dark"
      className={`mainFooter ${footer}`}
    >
      <div className={logo}>SK</div>
      <ul className={footerLinks}>
        {links.map((item, i) =>
          item._type == 'link.internal' ? (
            <li key={i}>
              <Link to={`/${item.reference.slug.current}`} className={link}>
                {item.title}
              </Link>
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
      <small className={copyright}>{text}</small>
    </footer>
  );
};

export default Footer;
