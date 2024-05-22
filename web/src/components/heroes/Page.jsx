import React from 'react';

import PrimaryImage from '../primaryImage';

import './hero.css';

const HeroPage = (props) => {
  console.log('props in HeroPage', props);
  const { title, content } = props;

  return (
    <section className={`hero`}>
      <h2>{title}</h2>
      <PrimaryImage imageAsset={content[0]} imageUse={`cover`} />
    </section>
  );
};

export default HeroPage;
