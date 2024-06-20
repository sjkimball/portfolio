import React from 'react';

import ImageModule from '../portableText/blocks/Image';

import { hero } from './Hero.module.css';

const HeroPage = (props) => {
  console.dir('props in HeroPage', props.content[0]);
  const { title, content } = props;
  const imageAsset = content[0];

  return (
    <section id="heroPage" className={hero}>
      <h1>{title}</h1>
      {content.length !== 0 ? <ImageModule {...content[0]} /> : ''}
    </section>
  );
};

export default HeroPage;
