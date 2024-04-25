import React from 'react';

import PrimaryImage from './PrimaryImage';

import './hero.css';

const Hero = (props) => {
  const { headline, tagline, media } = props;

  return (
    <section className={`hero`}>
      <h2>{headline}</h2>
      <h5>{tagline}</h5>
      <PrimaryImage imageAsset={media} imageUse={`cover`} />
    </section>
  );
};

export default Hero;
