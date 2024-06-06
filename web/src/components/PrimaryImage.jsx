import React from 'react';

import { imageUrlFor } from '../lib/image-url';

import { image } from './PrimaryImage.module.css';

const imageSrcSet = (imageAsset) => `
${imageUrlFor(imageAsset).width(320)} 320w,
${imageUrlFor(imageAsset).width(600)} 600w,
${imageUrlFor(imageAsset).width(1040)} 1040w,
${imageUrlFor(imageAsset).width(1200)} 1200w,
${imageUrlFor(imageAsset).width(1920)} 1920w,
`;

const previewSizes = `
  (max-width: 600px) 100vw,
  (max-width: 1040px) 50vw,
  33vw
`;

const coverSizes = `
  (min-width: 1600px) 1600w,
  100vw
`;

const PrimaryImage = (props) => {
  // console.dir('props in Primary Image', props);
  const { imageAsset, imageUse } = props;
  const metadata = imageAsset.asset.metadata
    ? imageAsset.asset.metadata.lqip
    : '';
  const imageSizes = imageUse == 'cover' ? coverSizes : previewSizes;

  return (
    <img
      style={{
        backgroundImage: `url(${metadata})`,
      }}
      srcSet={imageSrcSet(imageAsset)}
      sizes={imageSizes}
      src={imageUrlFor(imageAsset).auto('format')}
      alt={imageAsset.asset.altText}
      className={image}
    />
  );
};

export default PrimaryImage;
