import React from 'react';

import PrimaryImage from '../PrimaryImage';

import { hero } from './Hero.module.css';

const HeroPage = (props) => {
  console.log('props in HeroPage', props);
  const { title, content } = props;

  return (
    <section id="heroPage" className={hero}>
      <h1>{title}</h1>
      {content.length !== 0 ? (
        <PrimaryImage imageAsset={content[0]} imageUse={`cover`} />
      ) : (
        ''
      )}
    </section>
  );
};

export default HeroPage;
