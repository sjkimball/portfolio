import React from 'react';

const Block = ({ children, value }) => {
  if (value.style === 'h2') {
    return <h2 className={`block block--text heading2`}>{children}</h2>;
  }

  if (value.style === 'h3') {
    return <h3 className={`block block--text heading3`}>{children}</h3>;
  }

  if (value.style === 'h4') {
    return <h4 className={`block block--text heading4`}>{children}</h4>;
  }

  return <p className={`block block--text paragraph`}> {children}</p>;
};

export default Block;
