import React from 'react';
import { PortableText } from '@portabletext/react';
import PrimaryImage from './PrimaryImage';

const portTextComponents = {
  types: {
    mainImage: ({ value }) => {
      return (
        <figure>
          <PrimaryImage imageAsset={value} />
          <figcaption>{value.caption}</figcaption>
        </figure>
      );
    },
    figmaAsset: ({ value }) => {
      const { image, url } = value;
      return (
        <a href={url}>
          <figure>
            <PrimaryImage imageAsset={image} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        </a>
      );
    },
  },
};

const PortText = (props) => {
  console.dir('props in PortText', props);
  return <PortableText value={props.content} components={portTextComponents} />;
};

export default PortText;
