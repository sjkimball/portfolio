import React from 'react';
import FigmaEmbed from 'react-figma-embed';

import { container } from './FigmaBlock.module.css';

const styles = {
  width: '100%',
  height: 'unset',
  aspectRatio: '3/2',
  marginBottom: '0',
  borderColor: 'var(--sk-sys-outline)',
};

const FigmaEmbedBlock = (props) => {
  const { value } = props;
  return (
    <div className={`block block--figma ${container}`}>
      <FigmaEmbed url={value.url} style={styles} />
    </div>
  );
};

export default FigmaEmbedBlock;
