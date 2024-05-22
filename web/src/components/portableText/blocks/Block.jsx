import React from 'react';

const Block = ({ children, value }) => {
  if (value.style === 'h2') {
    return <h2 className={``}>{children}</h2>;
  }

  if (value.style === 'h3') {
    return <h3 className={``}>{children}</h3>;
  }

  if (value.style === 'h4') {
    return <h4 className={``}>{children}</h4>;
  }

  return <p className={``}>{children}</p>;
};

export default Block;
