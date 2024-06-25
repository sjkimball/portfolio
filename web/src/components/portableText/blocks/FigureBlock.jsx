import React from 'react';
import ImageModule from './Image';

import { container, figure, caption } from './FigureBlock.module.css';

const FigureBlock = (props) => {
  // console.log('props in Figure Block', props);
  const { title, body, image: imageAsset } = props;
  return (
    <div className={container}>
      <figure className={`block--figure ${figure}`}>
        <figcaption className={`${caption}`}>
          <h3>{title}</h3>
          <p>{body}</p>
        </figcaption>
        {imageAsset ? <ImageModule {...imageAsset} /> : ''}
      </figure>
    </div>
  );
};

export default FigureBlock;
