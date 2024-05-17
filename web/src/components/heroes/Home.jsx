import React from 'react';

import PrimaryImage from '../primaryImage';

import './hero.css';

const HeroHome = (props) => {
  console.log('props in HeroHome', props);
  const { title, links, content } = props;

  return (
    <section className={`hero`}>
      <h2>{title}</h2>
      {/* <p>{tagline}</p> */}
      <PrimaryImage imageAsset={content[0]} imageUse={`cover`} />
    </section>
  );
};

export default HeroHome;
