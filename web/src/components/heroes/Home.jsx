import React from 'react';

import PrimaryImage from '../PrimaryImage';

import { hero } from './Hero.module.css';

const HeroHome = (props) => {
  // console.log('props in HeroHome', props);
  const { title, links, content } = props;

  return (
    <section id="heroHome" className={hero}>
      <h1>{title}</h1>
      <PrimaryImage imageAsset={content[0]} imageUse={`cover`} />
    </section>
  );
};

export default HeroHome;
