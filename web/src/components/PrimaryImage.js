import React from 'react';

import { imageUrlFor } from '../lib/image-url';

import './PrimaryImage.css';

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
  const { imageAsset, showCaption, imageUse } = props;
  const imageSizes = imageUse == 'cover' ? coverSizes : previewSizes;

  return (
    <img
      style={{
        backgroundImage: `url(${imageAsset.asset.metadata.lqip})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        maxWidth: '1920px',
        marginBottom: '0',
        objectFit: 'cover',
        width: '100%',
      }}
      srcSet={imageSrcSet(imageAsset)}
      sizes={imageSizes}
      src={imageUrlFor(imageAsset).auto('format')}
      alt={imageAsset.altText}
    />
  );
};

export default PrimaryImage;
