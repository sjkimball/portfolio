import React from 'react';

import ImageModule from './Image';

import { block, container } from './ImagesBlock.module.css';

const ImagesBlock = (props) => {
  // console.dir('props in ImagesBlock', props);
  const {
    value: { content, fullWidth, verticalAlign },
  } = props;
  return (
    <div
      className={`block block--images ${block} ${fullWidth == true && content.length < 2 ? 'fullWidth' : ''}`}
    >
      <div className={`${container}`}>
        {content.map((item, i) => {
          return <ImageModule key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ImagesBlock;
