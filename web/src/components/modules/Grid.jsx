import React from 'react';
import PrimaryImage from '../PrimaryImage';

import { container, grid, gridItem } from './Grid.module.css';

const GridItem = (item) => (
  <div className={gridItem}>
    <h3>{item.title}</h3>
    <p>{item.body}</p>
    {item.image ? <PrimaryImage imageAsset={item.image} /> : ''}
  </div>
);

const Grid = (props) => {
  // console.dir('props in Grid', props);
  const gridContent = props.content;

  return (
    <section className={grid}>
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
