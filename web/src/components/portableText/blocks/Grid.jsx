import React from 'react';

import PrimaryImage from '../../primaryImage';

const GridBlock = (props) => {
  // console.log('props in GridBlock', value);
  const { value } = props;

  const GridItem = (item) => (
    <div className={`gridItem`}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      {item.image ? <PrimaryImage imageAsset={item.image} /> : ''}
    </div>
  );
  const content = value.content.map((item, i) =>
    item._type == 'gridItem' ? (
      <GridItem key={i} {...item} />
    ) : item._type == 'module.externalAsset' ? (
      'ExternalAsset'
    ) : (
      ''
    ),
  );

  return <div className={`gridBlock`}>{content}</div>;
};

export default GridBlock;
