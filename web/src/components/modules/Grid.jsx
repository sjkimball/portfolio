import React from 'react';

import SimpleBlock from '../portableText/blocks/SimpleBlock';
import FigureBlock from '../portableText/blocks/FigureBlock';

import { container, moduleGrid } from './Grid.module.css';

// TODO Add grid item for external assets.

const Grid = (props) => {
  console.dir('props in Grid', props);
  const { content, darkMode, fullWidth, title } = props;

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
      className={`module--grid ${fullWidth == true ? 'fullWidth' : ''} ${moduleGrid}`}
    >
      {title ? <h2>{title}</h2> : ''}
      <div className={container}>{gridContent}</div>
    </section>
  );
};

export default Grid;
