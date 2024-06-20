import React from 'react';
import SimpleBlock from './SimpleBlock';
import FigureBlock from './FigureBlock';

import { section, header, container } from './GridBlock.module.css';

const GridBlock = (props) => {
  // console.log('props in GridBlock', props);
  const contentObject = props.value ? props.value : props;
  const { content, darkMode, fullWidth, title } = contentObject;

  const gridContent = content.map((item, i) => {
    let el = null;
    switch (item._type) {
      case 'module.simpleBlockContent':
        el = <SimpleBlock key={i} {...item} />;
        break;
      case 'module.figure':
        el = <FigureBlock key={i} {...item} />;
        break;
      default:
        el = null;
    }
    return el;
  });

  return (
    <section
      data-theme={darkMode == true ? 'dark' : 'light'}
      className={`block block--grid ${section}`}
    >
      <hgroup className={header}>
        <h2>{title}</h2>
      </hgroup>

      <div className={`${container}`}>{gridContent}</div>
    </section>
  );
};

export default GridBlock;
