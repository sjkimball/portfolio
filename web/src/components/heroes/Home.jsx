import React from 'react';

import PrimaryImage from '../PrimaryImage';

import { hero } from './Hero.module.css';

function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings;
}

const HeroHome = (props) => {
  console.log('props in HeroHome', props);
  const { title, links, content } = props;
  const splitTitle = splitString(title, /\r?\n/);
  return (
    <section id="heroHome" className={hero} data-theme="dark">
      <h1>{splitTitle[0]}</h1>
      <p>{splitTitle[1]}</p>
      <PrimaryImage imageAsset={content[0]} imageUse={`cover`} />
    </section>
  );
};

export default HeroHome;
