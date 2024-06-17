import React from 'react';
import ImageModule from '../../modules/Image';

import { container } from './FigureBlock.module.css';

const FigureBlock = (props) => {
  // console.log('props in Figure Block', props);
  const { title, body, image: imageAsset } = props;
  return (
    <div className={`block--figure ${container}`}>
      <h3>{title}</h3>
      <p>{body}</p>
      {imageAsset ? <ImageModule {...imageAsset} /> : ''}
    </div>
  );
};

export default FigureBlock;
