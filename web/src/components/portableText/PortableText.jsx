import React from 'react';
import { PortableText as PortableTextReact } from '@portabletext/react';
import Block from './blocks/Block';
import Callout from './blocks/Callout';
import CalloutLink from './blocks/CalloutLink';
import ExternalAsset from './blocks/ExternalAsset';
import FigmaViewer from './blocks/FigmaViewer';
import Grid from './blocks/Grid';
import Figure from './blocks/Figure';
import Section from './blocks/Section';

import * as ptStyles from './PortableText.module.css';

const components = {
  block: Block,
  types: {
    'block.image': ({ value }) => <Figure {...value} />,
    'block.grid': Grid,
    'module.callout': Callout,
    'module.calloutLink': CalloutLink,
    'module.externalAsset': ExternalAsset,
    'module.figmaEmbed': FigmaViewer,
    'block.section': Section,
  },
};

const PortableText = (props) => {
  // console.dir('props in PortableText', props);
  return (
    <div className={`portableText ${ptStyles.portableText}`}>
      <PortableTextReact value={props.blocks} components={components} />
    </div>
  );
};

export default PortableText;
