import React from 'react';

import { imageUrlFor } from '../lib/image-url';

import './previewImage.css';

const previewSrcSet = (imageAsset) => `
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

const PreviewImage = (props) => {
  const { imageAsset, showCaption } = props;

  const renderedImage = (
    <img
      style={{
        backgroundImage: `url(${imageAsset.asset.metadata.lqip})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      srcSet={previewSrcSet(imageAsset)}
      sizes={previewSizes}
      src={imageUrlFor(imageAsset).auto('format')}
      alt={imageAsset.altText}
      className="preview__image"
    />
  );

  return (
    <figure className="preview">
      {renderedImage}
      {showCaption ? <figcaption>{imageAsset.caption}</figcaption> : ''}
    </figure>
  );
};

export default PreviewImage;
