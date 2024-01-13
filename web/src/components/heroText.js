import React from 'react';

import './heroText.css';

const HeroText = (props) => {
  console.log('hero text props', props);
  const { headline, tagline } = props;
  return (
    <div className="heroText">
      <h2 className="rec-hero-headline">{headline}</h2>
      <h3 className="rec-hero-tagline">{tagline}</h3>
    </div>
  );
};
export default HeroText;
