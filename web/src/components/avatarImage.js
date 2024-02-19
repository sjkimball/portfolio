import React from 'react';

import { imageUrlFor } from '../lib/image-url';

import './avatarImage.css';

const avatarSrcSet = (imageAsset) => `
  ${imageUrlFor(imageAsset).width(300)} 300w,
  ${imageUrlFor(imageAsset).width(600)} 600w,
  ${imageUrlFor(imageAsset).width(900)} 900w
`;

const avatarSizes = `
  (max-width: 600px) 10vw,
  (max-width: 1200px) 15vw,
  50px
`;

const AvatarImage = (props) => {
  const { imageAsset } = props;

  const renderedImage = (
    <img
      style={{
        backgroundImage: `url(${imageAsset.asset.metadata.lqip})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      srcSet={avatarSrcSet(imageAsset)}
      sizes={avatarSizes}
      src={imageUrlFor(imageAsset).auto('format')}
      alt={imageAsset.altText}
      className="avatar__image"
    />
  );

  return <figure className="avatar">{renderedImage}</figure>;
};

export default AvatarImage;
