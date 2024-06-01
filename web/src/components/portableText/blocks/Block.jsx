import React from 'react';

import { block, h2, paragraph } from './Block.module.css';

const Block = ({ children, value }) => {
  if (value.style === 'h2') {
    return <h2 className={`${block} ${h2}`}>{children}</h2>;
  }

  if (value.style === 'h3') {
    return <h3 className={block}>{children}</h3>;
  }

  if (value.style === 'h4') {
    return <h4 className={block}>{children}</h4>;
  }

  return <p className={`${block} ${paragraph}`}>{children}</p>;
};

export default Block;
