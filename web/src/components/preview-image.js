import React from 'react';

import { imageUrlFor } from '../lib/image-url';
import { imageSrcSet, imageSizes } from '../lib/image-sizing';

const PreviewImage = (props) => {
  const { imageAsset, showCaption, imageType } = props;

  // function assignClass(imageType) {
  //   switch (imageType) {
  //     case 'avatar':
  //       return 'avatar-image';
  //       break;
  //     case 'cover':
  //       return 'cover-image';
  //       break;
  //     default:
  //       return 'preview-letterbox';
  //   }
  // }

  const renderedImage = (
    <img
      style={{
        backgroundImage: `url(${imageAsset.asset.metadata.lqip})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      srcSet={imageSrcSet(imageAsset, imageType)}
      sizes={imageSizes(imageType)}
      src={imageUrlFor(imageAsset).auto('format')}
      alt={imageAsset.altText}
      className="preview__image"
    />
  );

  return (
    <figure className={`preview preview--letterbox`}>
      {renderedImage}
      {showCaption ? <figcaption>{imageAsset.caption}</figcaption> : ''}
    </figure>
  );
};

export default PreviewImage;
