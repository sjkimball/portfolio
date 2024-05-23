import React from 'react';
import FigmaEmbed from 'react-figma-embed';

const FigmaEmbedBlock = (props) => {
  const { value } = props;
  return <FigmaEmbed url={value.url} />;
};

export default FigmaEmbedBlock;
