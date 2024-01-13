import React from 'react';
import { imageUrlFor } from '../lib/image-url';
import './messageImage.css';

const MessageImage = (props) => {
  const { messageOverlay: message, image } = props;
  const imageUrl = imageUrlFor(image);
  return (
    <figure className="messageImage">
      <svg
        id="miSvg"
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
            <rect />
            <text x="50%" y="50%">
              {message}
            </text>
          </mask>
          <filter id="floodFilter">
            <feFlood />
          </filter>
        </defs>

        <rect filter="url(#floodFilter)" mask="url(#imageMask)" />
      </svg>
      <figcaption>This is the splash image.</figcaption>
    </figure>
  );
};
export default MessageImage;
