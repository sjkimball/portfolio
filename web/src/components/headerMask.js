import React from 'react';

import './headerMask.css';

const HeaderMask = ({ siteTitle }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="headerMask">
      <defs>
        <text id="defaultText" className="headerMask__text">
          {siteTitle}
        </text>
        <text id="revealText" className="headerMask__text">
          {siteTitle}
        </text>
        <rect id="revealBackground" />
        <mask id="theMask">
          <rect id="black" width="100%" height="64" fill="#000" />
        </mask>
      </defs>
      <use href="#defaultText" />
      <g mask="url(#theMask)">
        <use href="#revealBackground" />
        <use href="#revealText" />
      </g>
    </svg>
  );
};
export default HeaderMask;
