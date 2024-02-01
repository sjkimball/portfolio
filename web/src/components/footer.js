import React from 'react';

import './footer.css';

const Footer = ({ darkMode, companyInfo }) => {
  let footerClass;

  // use class toggle instead
  if (darkMode === true) {
    footerClass = 'mainFooter--dark';
  } else {
    footerClass = 'mainFooter--light';
  }
  const companyName = companyInfo.companyName;
  const links = companyInfo.socialAccounts;

  return (
    <footer className="mainFooter">
      <ul className="mainFooter__links">
        {links.map((link, index) => {
          return (
            <li key={index} className="body-md">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.service.name}
              </a>
            </li>
          );
        })}
      </ul>
      <small className="mainFooter__copyright">© {companyName}</small>
    </footer>
  );
};

export default Footer;
