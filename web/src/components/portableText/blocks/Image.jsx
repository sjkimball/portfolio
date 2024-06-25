import React from 'react';

import PrimaryImage from '../../PrimaryImage';

import { figcaption } from './Image.module.css';

const CaptionImage = (props) => {
  // console.dir('props in captionImage', props);
  const { image, caption } = props;
  return (
    <figure className={`captionImage`}>
      <PrimaryImage imageAsset={image} />
      <figcaption className={` ${figcaption}`}>{caption}</figcaption>
    </figure>
  );
};

const ImageModule = (props) => {
  // console.dir('props in Image Module', props);
  if (!props.image) {
    return null;
  }
  return (
    <>
      {!props.variant && <PrimaryImage imageAsset={props.image} />}
      {props.variant === 'cover' && (
        <PrimaryImage imageAsset={props.image} imageUse="cover" />
      )}
      {props.variant === 'caption' && props.caption && (
        <CaptionImage {...props} />
      )}
    </>
  );
};

export default ImageModule;
