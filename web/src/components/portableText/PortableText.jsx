import React from 'react';
import { PortableText as PortableTextReact } from '@portabletext/react';
import Block from './blocks/Block';
import CalloutBlock from './blocks/CalloutBlock';
import CalloutLinkBlock from './blocks/CalloutLinkBlock';
import ExternalAssetBlock from './blocks/ExternalAsset';
import FigmaEmbedBlock from './blocks/FigmaEmbedBlock';
import GridBlock from './blocks/GridBlock';
import ImagesBlock from './blocks/ImagesBlock';
import ProjectsBlock from './blocks/ProjectsBlock';
import SectionBlock from './blocks/SectionBlock';

import './PortableText.css';

const components = {
  block: Block,
  types: {
    'module.images': ImagesBlock,
    'module.grid': GridBlock,
    'module.callout': CalloutBlock,
    'module.calloutLink': CalloutLinkBlock,
    'module.externalAsset': ExternalAssetBlock,
    'module.figmaEmbed': FigmaEmbedBlock,
    'module.projects': ProjectsBlock,
    'module.section': SectionBlock,
  },
};

const PortableText = (props) => {
  // console.dir('props in PortableText', props);
  return (
    <div className={`portableText`}>
      <PortableTextReact value={props.blocks} components={components} />
    </div>
  );
};

export default PortableText;
