import React from 'react';

import PrimaryImage from '../../PrimaryImage';
import ImageModule from '../../modules/Image';

const ImagesBlock = (props) => {
  // console.dir('props in ImagesBlock', props);
  const { value } = props;
  return (
    <div className={`block--images`}>
      <div className={`block--images__container`}>
        {value.content.map((item, i) => {
          return <ImageModule key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ImagesBlock;
