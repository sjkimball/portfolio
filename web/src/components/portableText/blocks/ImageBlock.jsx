import React from 'react';

import PrimaryImage from '../../PrimaryImage';

import { figure, fullWidth } from './ImageBlock.module.css';

const ImageBlock = (props) => {
  console.dir('props in ImageBlock', props);
  const { value } = props;
  return (
    <figure className={`${figure} ${value.fullWidth == true ? fullWidth : ''}`}>
      <PrimaryImage imageAsset={value.image} />
      {value.image.showCaption == true ? (
        <figcaption>{value.image.caption}</figcaption>
      ) : (
        ''
      )}
    </figure>
  );
};

export default ImageBlock;
