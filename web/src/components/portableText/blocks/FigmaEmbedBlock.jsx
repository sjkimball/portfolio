import React from 'react';
import FigmaEmbed from 'react-figma-embed';

import { block } from './FigmaEmbedBlock.module.css';

const styles = {
  width: '100%',
  height: 'unset',
  aspectRatio: '3/2',
  marginBottom: '0',
};

const FigmaEmbedBlock = (props) => {
  const { value } = props;
  return (
    <div className={block}>
      <FigmaEmbed url={value.url} style={styles} />
    </div>
  );
};

export default FigmaEmbedBlock;
