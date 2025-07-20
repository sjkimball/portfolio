import React from 'react';

import ImageFactory from '../../ImageFactory';

import { figcaption } from './Figure.module.css';

const Figure = (props) => {
  console.dir('props in Image Module', props);
  const { image, asset, caption, variant } = props;
  if (!image && !asset) {
    return null;
  }
  return (
    <figure>
      <ImageFactory asset={image || asset} imageUse={variant} />
      {caption ? (
        <figcaption className={`${figcaption}`}>{caption}</figcaption>
      ) : (
        ''
      )}
    </figure>
  );
};

export default Figure;
