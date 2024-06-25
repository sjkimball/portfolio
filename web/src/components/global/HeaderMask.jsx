import React from 'react';

import {
  mask,
  text,
  textLight,
  textDark,
  background,
} from './HeaderMask.module.css';

const HeaderMask = (props) => {
  const { siteTitle } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="headerMask" className={mask}>
      <defs>
        <text id="defaultText" className={`${text} ${textLight}`}>
          {siteTitle}
        </text>
        <text id="revealText" className={`${text} ${textDark}`}>
          {siteTitle}
        </text>
        <rect id="revealBackground" className={background} />
        <mask id="theMask">
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
