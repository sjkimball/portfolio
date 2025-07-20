import React from 'react';
import { PortableText as PortableTextReact } from '@portabletext/react';
import Block from './Block';
import Grid from './Grid';

import { block } from './Section.module.css';

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const components = {
  block: Block,
  types: {
    'block.grid': Grid,
  },
};

const Section = (props) => {
  // console.dir('props in Section Block', props);
  const contentObject = props.value ? props.value : props;
  const {
    title,
    subtitle,
    description,
    body,
    layoutType,
    fullWidth,
    darkMode,
  } = contentObject;
  return (
    <section
      id={`${kebabCase(title)}`}
      className={`block block--section ${block}`}
      data-theme={darkMode == true ? 'dark' : 'light'}
    >
      <hgroup>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </hgroup>
      <div className={`container`}>
        <PortableTextReact value={body} components={components} />
      </div>
    </section>
  );
};

export default Section;
