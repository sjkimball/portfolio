import React from 'react';

import './headerMask.css';

const HeaderMask = ({ siteTitle }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="headerMask"
      className="headerMask"
    >
      <defs>
        <text
          id="defaultText"
          className="headerMask__text headerMask__text--light"
        >
          {siteTitle}
        </text>
        <text
          id="revealText"
          className="headerMask__text headerMask__text--dark"
        >
          {siteTitle}
        </text>
        <rect id="revealBackground" className="headerMask__bkgd--dark" />
        <mask id="theMask" className="headerMask__mask">
          <rect id="black" width="100%" height="90px" />
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
