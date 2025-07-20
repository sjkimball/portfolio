import React from 'react';

import { hero } from './Hero.module.css';

const HeroPage = (props) => {
  // console.dir('props in HeroPage', props.content[0]);
  const { title, subtitle, content } = props;
  return (
    <div id="heroPage" className={`hero ${hero}`}>
      <hgroup>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </hgroup>
      {/* {content.length !== 0 ? <ImageModule {...content[0]} /> : ''} */}
    </div>
  );
};

export default HeroPage;
