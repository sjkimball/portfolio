import React from 'react';
import { Link } from 'gatsby';

import ImageFactory from '../../../ImageFactory';

import { preview, figure, figureProfile } from './Card.module.css';

const PersonCard = (props) => {
  console.dir('Person Card props', props);
  const { image, firstName, preferredName, lastName, slug } = props;
  const name = preferredName
    ? `${preferredName} ${lastName}`
    : `${firstName} ${lastName}`;
  return (
    <Link to={`/about/${slug.current}`} className={preview}>
      <div className="card card-person">
        <hgroup>
          <h4>{name}</h4>
        </hgroup>
        <ImageFactory asset={image} />
      </div>
    </Link>
  );
};

export default PersonCard;
