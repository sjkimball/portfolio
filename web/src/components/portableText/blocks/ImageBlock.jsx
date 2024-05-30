import React from 'react';

import PrimaryImage from '../../PrimaryImage';

import { figure } from './ImageBlock.module.css';

const ImageBlock = (props) => {
  // console.dir('props in ImageBlock', props);
  const { value } = props;
  return (
    <figure className={figure}>
      <PrimaryImage imageAsset={value} />
      {value.showCaption == true ? (
        <figcaption>{value.caption}</figcaption>
      ) : (
        ''
      )}
    </figure>
  );
};

export default ImageBlock;
