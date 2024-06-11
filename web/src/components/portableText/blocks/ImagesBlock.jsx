import React from 'react';

import ImageModule from '../../modules/Image';

import { container } from './ImagesBlock.module.css';

const ImagesBlock = (props) => {
  console.dir('props in ImagesBlock', props);
  const { value } = props;
  return (
    <div
      className={`block block--images ${value.fullWidth == true ? 'fullWidth' : ''} ${value.content.length > 1 ? 'multiple' : ''}`}
    >
      <div className={container}>
        {value.content.map((item, i) => {
          return <ImageModule key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ImagesBlock;
