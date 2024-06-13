import React from 'react';
import SimpleBlock from './SimpleBlock';

import { block, container } from './GridBlock.module.css';

const GridBlock = (props) => {
  // console.log('props in GridBlock', props);
  const {
    value: { content, darkMode, fullWidth, title },
  } = props;

  const gridContent = content.map((item, i) => {
    let el = null;
    switch (item._type) {
      case 'module.simpleBlockContent':
        el = <SimpleBlock key={i} {...item} />;
        break;
      default:
        el = null;
    }
    return el;
  });

  return (
    <div
      data-theme={darkMode == true ? 'dark' : 'light'}
      className={`block block--grid ${fullWidth == true ? 'fullWidth' : ''} ${block}`}
    >
      {title ? <h2>{title}</h2> : ''}
      <div className={container}>{gridContent}</div>
    </div>
  );
};

export default GridBlock;
