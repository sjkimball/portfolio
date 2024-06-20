import React from 'react';

import ImageModule from '../portableText/blocks/Image';

import { heroHome } from './Hero.module.css';

function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings;
}

const HeroHome = (props) => {
  // console.log('props in HeroHome', props);
  const { title, links, content } = props;
  const splitTitle = splitString(title, /\r?\n/);
  return (
    <section id="heroHome" className={`hero ${heroHome}`} data-theme="light">
      <hgroup>
        <h1>{splitTitle[0]}</h1>
        <p>{splitTitle[1]}</p>
      </hgroup>
      <ImageModule {...content[0]} />
    </section>
  );
};

export default HeroHome;
