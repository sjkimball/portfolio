import React from 'react';

// import { h2, paragraph } from './Block.module.css';

const Block = ({ children, value }) => {
  if (value.style === 'h2') {
    return <h2 className={`block`}>{children}</h2>;
  }

  if (value.style === 'h3') {
    return <h3 className={`block`}>{children}</h3>;
  }

  if (value.style === 'h4') {
    return <h4 className={`block`}>{children}</h4>;
  }

  return <p className={`block`}> {children}</p>;
};

export default Block;
