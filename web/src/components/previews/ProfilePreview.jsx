import React from 'react';
import { Link } from 'gatsby';

import PrimaryImage from '../PrimaryImage';

import { preview, figure, figureProfile } from './Preview.module.css';

const ProfilePreview = (props) => {
  console.dir('Profile Preview props', props);
  const { image, firstName, preferredName, lastName, slug } = props;
  console.log();
  const name = preferredName
    ? `${preferredName} ${lastName}`
    : `${firstName} ${lastName}`;
  return (
    <Link to={`/about/${slug.current}`} className={preview}>
      <figure className={`${figure} ${figureProfile}`}>
        <PrimaryImage imageAsset={image} />
        <figcaption>
          <h4>{name}</h4>
        </figcaption>
      </figure>
    </Link>
  );
};

export default ProfilePreview;
