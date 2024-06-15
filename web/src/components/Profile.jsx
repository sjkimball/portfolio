import React from 'react';

import PortableText from './portableText/PortableText';
import PrimaryImage from './PrimaryImage';

import { article, header, additionalLinks } from './Profile.module.css';

const Profile = (props) => {
  // console.dir('props in Profile', props);
  const { firstName, preferredName, lastName, image, links, _rawBio } = props;

  const name = preferredName
    ? `${preferredName} ${lastName}`
    : `${firstName} ${lastName}`;

  return (
    <article className={`profile ${article}`}>
      <header className={header}>
        <hgroup>
          <h1>{name}</h1>
        </hgroup>
        <PrimaryImage imageAsset={image.image} imageUse={`cover`} />
      </header>
      <PortableText blocks={_rawBio} />
      <div className={additionalLinks}>
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.url}>View {link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default Profile;
