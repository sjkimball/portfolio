import React from 'react';

import './pageHeader.css';

const PageHeader = (props) => {
  const { title, subtitle, description } = props;
  return (
    <header className={`pageHeader}`}>
      <h2 className="pageHeader__title">{title}</h2>
      {subtitle !== null ? (
        <h3 className="pageHeader__subtitle">{subtitle}</h3>
      ) : (
        ''
      )}
      {description !== null ? (
        <section className="pageHeader__description"></section>
      ) : (
        ''
      )}
    </header>
  );
};

export default PageHeader;
