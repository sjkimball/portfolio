import React from 'react';

import PrimaryImage from '../../PrimaryImage';

import { gridBlock } from './GridBlock.module.css';

const GridItem = (item) => {
  // console.dir('props in Grid Item', item);
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      {item.image ? <PrimaryImage imageAsset={item.image.image} /> : ''}
    </div>
  );
};

const GridBlock = (props) => {
  // console.log('props in GridBlock', props);
  const { value } = props;

  const content = value.content.map((item, i) =>
    item._type == 'gridItem' ? (
      <GridItem key={i} {...item} />
    ) : item._type == 'module.externalAsset' ? (
      'ExternalAsset'
    ) : (
      ''
    ),
  );

  return <div className={gridBlock}>{content}</div>;
};

export default GridBlock;
