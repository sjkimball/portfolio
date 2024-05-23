import React from 'react';
import { PortableText as PortableTextReact } from '@portabletext/react';
import Block from './blocks/Block';
import ExternalAssetBlock from './blocks/ExternalAsset';
import GridBlock from './blocks/Grid';
import CalloutBlock from './blocks/Callout';
import FigmaEmbedBlock from './blocks/FigmaEmbed';
import ImageBlock from './blocks/ImageBlock';
import ProjectsBlock from './blocks/Projects';
import PersonBlock from './blocks/Person';

const components = {
  block: Block,
  types: {
    mainImage: ImageBlock,
    'module.grid': GridBlock,
    'module.callout': CalloutBlock,
    'module.externalAsset': ExternalAssetBlock,
    'module.projects': ProjectsBlock,
    'module.figmaEmbed': FigmaEmbedBlock,
    'module.person': PersonBlock,
  },
};

const PortableText = (props) => {
  console.dir('props in PortableText', props);
  return (
    <div className={`portText`}>
      <PortableTextReact value={props.blocks} components={components} />
    </div>
  );
};

export default PortableText;
