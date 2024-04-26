import React from 'react';

import Markdown from 'react-markdown';

import './pageHeader.css';

const PageHeader = ({ title, subtitle, description }) => {
  return (
    <header className={`pageHeader pageHeader--${title.toLowerCase()}`}>
      <h2 className="pageHeader__title">{title}</h2>
      {subtitle !== null ? (
        <h3 className="pageHeader__subtitle">{subtitle}</h3>
      ) : (
        ''
      )}
      {description !== null ? (
        <section className="pageHeader__description markdown">
          <Markdown>{description}</Markdown>
        </section>
      ) : (
        ''
      )}
    </header>
  );
};

export default PageHeader;
