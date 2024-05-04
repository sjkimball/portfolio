import React from 'react';
import { PortableText } from '@portabletext/react';
import PrimaryImage from './primaryImage';

const portTextComponents = {
  types: {
    mainImage: ({ value }) => {
      return (
        <figure>
          <PrimaryImage imageAsset={value} />
          <figcaption>
            <p>{value.caption}</p>
          </figcaption>
        </figure>
      );
    },
    figmaAsset: ({ value }) => {
      const { image, url } = value;
      return (
        <a href={url}>
          <figure>
            <PrimaryImage imageAsset={image} />
            <figcaption>
              <p>{image.caption}</p>
            </figcaption>
          </figure>
        </a>
      );
    },
  },
};

const PortText = (props) => {
  return <PortableText value={props.content} components={portTextComponents} />;
};

export default PortText;
