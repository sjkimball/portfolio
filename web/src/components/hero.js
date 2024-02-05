import React from 'react';

import PreviewImage from '../components/preview-image';

import './hero.css';

const Hero = (props) => {
  const { heading, tagline, media } = props;

  return (
    <section className={`hero`}>
      <h2>{heading}</h2>
      <h5>{tagline}</h5>
      <PreviewImage imageAsset={media} imageType="cover" />
    </section>
  );
};

export default Hero;
