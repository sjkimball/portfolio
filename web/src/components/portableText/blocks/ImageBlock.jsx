import React from 'react';

import PrimaryImage from '../../primaryImage';

const ImageBlock = (props) => {
  const { value } = props;
  return <PrimaryImage imageAsset={value} />;
};

export default ImageBlock;
