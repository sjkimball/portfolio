import React from 'react';

const Block = ({ children, value }) => {
  if (value.style === 'h2') {
    return <h2 className={`block block--text`}>{children}</h2>;
  }

  if (value.style === 'h3') {
    return <h3 className={`block block--text`}>{children}</h3>;
  }

  if (value.style === 'h4') {
    return <h4 className={`block block--text`}>{children}</h4>;
  }

  return <p className={`block block--text`}> {children}</p>;
};

export default Block;
