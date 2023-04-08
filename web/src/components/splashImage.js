import React from 'react';
import { imageUrlFor } from '../lib/image-url';
import './splashImage.css';

const SplashImage = (props) => {
  const { messageOverlay: message, image } = props;
  console.log('message', message);
  console.log('image', image);
  const imageUrl = imageUrlFor(image);
  return (
    <svg
      id="splashSvg"
      viewBox="0 0 2000 3000"
      preserveAspectRatio="xMidYMid meet"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <defs>
        <mask id="imageMask">
          <rect width="100%" height="100%" rx="10%" fill="white" />
        </mask>
        <filter id="floodFilter" filterUnits="userSpaceOnUse">
          <feFlood flood-color="blue" flood-opacity="0.5" />
        </filter>
      </defs>

      {/* <image
        className={`something`}
        href={imageUrlFor(image)}
        mask="url(#imageMask)"
      /> */}
      <rect
        width="100%"
        height="100%"
        filter="url(#floodFilter)"
        mask="url(#imageMask)"
      />
    </svg>
  );
};
export default SplashImage;
