import React from 'react';
import Markdown from 'react-markdown';

import './markdownBlock.css';

const MarkdownBlock = (props) => {
  const { title, mdBlockContent: markdown } = props;
  return (
    <section className="markdown markdown-block">
      <Markdown>{markdown}</Markdown>
    </section>
  );
};

export default MarkdownBlock;
