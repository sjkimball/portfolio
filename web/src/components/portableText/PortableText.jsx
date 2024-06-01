import React from 'react';
import { PortableText as PortableTextReact } from '@portabletext/react';
import Block from './blocks/Block';
import CalloutBlock from './blocks/CalloutBlock';
import CalloutLinkBlock from './blocks/CalloutLinkBlock';
import ExternalAssetBlock from './blocks/ExternalAsset';
import FigmaEmbedBlock from './blocks/FigmaEmbedBlock';
import GridBlock from './blocks/GridBlock';
import ImageBlock from './blocks/ImageBlock';
import ProjectsBlock from './blocks/ProjectsBlock';

import { portableText } from './PortableText.module.css';

const components = {
  block: Block,
  types: {
    mainImage: ImageBlock,
    'module.image': ImageBlock,
    'module.grid': GridBlock,
    'module.callout': CalloutBlock,
    'module.calloutLink': CalloutLinkBlock,
    'module.externalAsset': ExternalAssetBlock,
    'module.projects': ProjectsBlock,
    'module.figmaEmbed': FigmaEmbedBlock,
  },
};

const PortableText = (props) => {
  // console.dir('props in PortableText', props);
  return (
    <div className={portableText}>
      <PortableTextReact value={props.blocks} components={components} />
    </div>
  );
};

export default PortableText;
