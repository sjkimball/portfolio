import React from 'react';
import { PortableText as PortableTextReact } from '@portabletext/react';
import Block from './Block';

import { block } from './SectionBlock.module.css';

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
  // console.dir('props in Section Block', props);
  const contentObject = props.value ? props.value : props;
  const { title, content } = contentObject;
  return (
    <section
      id={`${kebabCase(title)}`}
      className={`block block--section ${block}`}
    >
      <h2>{title}</h2>
      <div className={`container`}>
        <PortableTextReact value={content} components={components} />
      </div>
    </section>
  );
};

export default SectionBlock;
