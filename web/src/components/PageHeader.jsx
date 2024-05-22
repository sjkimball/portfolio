import React from 'react';

import PortText from './portableText';

import './pageHeader.css';

const PageHeader = (props) => {
  // console.log('props in page header', props);
  const { title, heading, subheading, description } = props;
  return (
    <header className={`pageHeader`}>
      <h2 className="pageHeader__title">{heading}</h2>
      {subheading !== null ? (
        <h3 className="pageHeader__subtitle">{subheading}</h3>
      ) : (
        ''
      )}
      {description !== null ? (
        <PortText
          content={description}
          className="pageHeader__description"
        ></PortText>
      ) : (
        ''
      )}
    </header>
  );
};

export default PageHeader;
