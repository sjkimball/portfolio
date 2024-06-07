import React from 'react';

import { anchor } from './CalloutLinkBlock.module.css';

const CalloutLinkBlock = (props) => {
  // console.dir('props in CalloutLinkBlock', props);
  const { value } = props;
  return (
    <a href={value.link.url} className={`block block--calloutLink ${anchor}`}>
      {value.link.title}
    </a>
  );
};

export default CalloutLinkBlock;
