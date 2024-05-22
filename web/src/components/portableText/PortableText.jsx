import React from 'react';
import { PortableText as PortableTextReact } from '@portabletext/react';
import Block from './blocks/Block';
import ExternalAssetBlock from './blocks/ExternalAsset';
import GridBlock from './blocks/Grid';
import CalloutBlock from './blocks/Callout';
import ProjectsBlock from './blocks/Projects';
import PrimaryImage from '../primaryImage';

const components = {
  block: Block,
  types: {
    'module.grid': GridBlock,
    'module.callout': CalloutBlock,
    'module.externalAsset': ExternalAssetBlock,
    'module.projects': ProjectsBlock,
  },
};

const PortableText = (props) => {
  // console.dir('props in PortText', props);
  return (
    <div className={`portText`}>
      <PortableTextReact value={props.blocks} components={components} />
    </div>
  );
};

export default PortableText;
