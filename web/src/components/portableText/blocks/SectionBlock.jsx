import React from 'react';
import { PortableText as PortableTextReact } from '@portabletext/react';
import Block from './Block';

import { block, container } from './SectionBlock.module.css';

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const components = {
  block: Block,
  types: {},
};

const SectionBlock = (props) => {
  console.dir('props in Section Block', props);
  const {
    value: { title, content },
  } = props;
  return (
    <div
      id={`${kebabCase(title)}`}
      className={`block block--section ${block} ${title.toLowerCase()}`}
    >
      <h2>{title}</h2>
      <div className={`${container} double`}>
        <PortableTextReact value={content} components={components} />
      </div>
      <div className={`${container} triple`}>
        <PortableTextReact value={content} components={components} />
      </div>
      <div className={`${container} quadruple`}>
        <PortableTextReact value={content} components={components} />
      </div>
    </div>
  );
};

export default SectionBlock;
