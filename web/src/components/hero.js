import React from 'react';

import MessageImage from '../components/messageImage';

import './hero.css';

const Hero = (props) => {
  const { heading, tagline, media } = props;

  const mediaContent = (media || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case 'messageImage':
          el = <MessageImage key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  return (
    <section className={`hero`}>
      <div>
        <h2>{heading}</h2>
        <h5>{tagline}</h5>
      </div>
      {mediaContent}
    </section>
  );
};

export default Hero;
