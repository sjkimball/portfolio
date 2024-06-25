import React from 'react';
import { PortableText as PortableTextReact } from '@portabletext/react';
import Block from './Block';

import { container } from './SimpleBlock.module.css';

const components = {
  block: Block,
};

const SimpleBlock = (props) => {
  // console.log('props in Grid Block Item', props);
  return (
    <div className={`${container}`}>
      <PortableTextReact value={props.body} components={components} />
    </div>
  );
};

export default SimpleBlock;
