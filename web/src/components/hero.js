import React from 'react';

import { imageUrlFor } from '../lib/image-url';

import './hero.css';

const heroSrcSet = (imageAsset) => `
${imageUrlFor(imageAsset).width(1200)} 1200w,
${imageUrlFor(imageAsset).width(1920)} 1920w,
`;

const Hero = (props) => {
  const { heading, tagline, media } = props;

  return (
    <section className={`hero`}>
      <h2>{heading}</h2>
      <h5>{tagline}</h5>
      <img
        style={{
          backgroundImage: `url(${media.asset.metadata.lqip})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        srcSet={heroSrcSet(media.asset)}
        src={imageUrlFor(media.asset).auto('format')}
        alt={media.altText}
      />
    </section>
  );
};

export default Hero;
