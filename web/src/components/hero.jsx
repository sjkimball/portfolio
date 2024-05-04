import React from 'react';

import PrimaryImage from './primaryImage';

import './hero.css';

const Hero = (props) => {
  const { headline, tagline, media } = props;

  return (
    <section className={`hero`}>
      <h2>{headline}</h2>
      <p>{tagline}</p>
      <PrimaryImage imageAsset={media} imageUse={`cover`} />
    </section>
  );
};

export default Hero;
