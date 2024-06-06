import React from 'react';
import ImageModule from './Image';

import { container, grid, gridItem } from './Grid.module.css';

const GridItem = (props) => {
  // console.log('props in Grid Item', props);
  const { title, body, image: imageAsset } = props;
  return (
    <div className={gridItem}>
      <h3>{title}</h3>
      <p>{body}</p>
      {imageAsset ? <ImageModule {...imageAsset} /> : ''}
    </div>
  );
};

// TODO Add grid item for external assets.

const Grid = (props) => {
  // console.dir('props in Grid', props);
  const gridContent = props.content;

  return (
    <section data-theme="light" className={grid}>
      {props.title ? <h2>{props.title}</h2> : ''}
      <div className={container}>
        {gridContent.map((item, i) => (
          <GridItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
