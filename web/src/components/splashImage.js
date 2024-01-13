import React from 'react';
import { imageUrlFor } from '../lib/image-url';
import './splashImage.css';

const SplashImage = (props) => {
  const { messageOverlay: message, image } = props;
  const imageUrl = imageUrlFor(image);
  return (
    <figure className="splashFigure">
      <svg
        id="splashSvg"
        viewBox="0 0 3000 3000"
        preserveAspectRatio="xMidYMid meet"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <defs>
          <mask id="imageMask">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y="50%"
              fill="black"
              fontSize="50vw"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {message}
            </text>
          </mask>
          <filter id="floodFilter">
            <feFlood floodColor="blue" floodOpacity="0.5" />
          </filter>
        </defs>

        <rect
          width="100%"
          height="100%"
          filter="url(#floodFilter)"
          mask="url(#imageMask)"
        />
      </svg>
      <figcaption>This is the splash image.</figcaption>
    </figure>
  );
};
export default SplashImage;
