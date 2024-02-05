import React from 'react';

import './footer.css';

const Footer = (props) => {
  const { companyInfo } = props;
  const companyName = companyInfo.companyName;
  const links = companyInfo.socialAccounts;

  return (
    <footer className="mainFooter">
      <ul className="mainFooter__links">
        {links.map((link, index) => {
          return (
            <li key={index}>
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
