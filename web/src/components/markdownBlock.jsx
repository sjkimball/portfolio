import React from 'react';

import Markdown from 'react-markdown';

import './MarkdownBlock.css';

const MarkdownBlock = (props) => {
  console.log('props in markdown block', props);
  const { title, mdBlockContent: markdown } = props;
  return (
    <section className="markdown markdown-block">
      {title ? <h3>{title}</h3> : ''}
      <Markdown>{markdown}</Markdown>
    </section>
  );
};

export default MarkdownBlock;
