import React from 'react';
import FigmaEmbed from 'react-figma-embed';

import { block } from './FigmaEmbedBlock.module.css';

const styles = {
  display: 'block',
  width: '100%',
  height: 'unset',
  aspectRatio: '3/2',
  marginBottom: '0',
  borderColor: 'var(--sk-sys-outline)',
};

const FigmaEmbedBlock = (props) => {
  const { value } = props;
  return (
    <div className={`block block--figma ${block}`}>
      <FigmaEmbed url={value.url} style={styles} loading="lazy" />
    </div>
  );
};

export default FigmaEmbedBlock;
