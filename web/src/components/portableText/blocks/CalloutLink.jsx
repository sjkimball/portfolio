import React from 'react';

import { anchor } from './CalloutLink.module.css';

const CalloutLink = (props) => {
  // console.dir('props in CalloutLinkBlock', props);
  const { value } = props;
  return (
    <a href={value.link.url} className={`block block--calloutLink ${anchor}`}>
      {value.link.title}
    </a>
  );
};

export default CalloutLink;
