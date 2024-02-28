import React from 'react';

import { imageUrlFor } from '../lib/image-url';

import './coverImage.css';

const coverSrcSet = (imageAsset) => `
${imageUrlFor(imageAsset).width(320)} 320w,
${imageUrlFor(imageAsset).width(600)} 600w,
${imageUrlFor(imageAsset).width(1040)} 1040w,
${imageUrlFor(imageAsset).width(1200)} 1200w,
${imageUrlFor(imageAsset).width(1920)} 1920w,
`;

const coverSizes = `
  (min-width: 1600px) 1600w,
  100vw
`;

const CoverImage = (props) => {
  const { imageAsset, showCaption } = props;

  const renderedImage = (
    <img
      style={{
        backgroundImage: `url(${imageAsset.asset.metadata.lqip})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      srcSet={coverSrcSet(imageAsset)}
      sizes={coverSizes}
      src={imageUrlFor(imageAsset).auto('format')}
      alt={imageAsset.altText}
      className="cover__image"
    />
  );

  return (
    <figure className={'cover'}>
      {renderedImage}
      {showCaption ? <figcaption>{imageAsset.caption}</figcaption> : ''}
    </figure>
  );
};

export default CoverImage;
