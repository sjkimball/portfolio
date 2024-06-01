import React from 'react';

import PortableText from './portableText/PortableText';
import PrimaryImage from './PrimaryImage';

import { profile, header, additionalLinks } from './Profile.module.css';

const Profile = (props) => {
  // console.dir('props in Profile', props);
  const { firstName, preferredName, lastName, image, links, _rawBio } = props;

  const name = preferredName
    ? `${preferredName} ${lastName}`
    : `${firstName} ${lastName}`;

  return (
    <article className={profile}>
      <header className={header}>
        <h1>{name}</h1>
        <PrimaryImage imageAsset={image} imageUse={`cover`} />
      </header>
      <PortableText blocks={_rawBio} />
      <section className={additionalLinks}>
        {links.map((link, i) => {
          return (
            <a key={i} href={link.url}>
              View {link.title}
            </a>
          );
        })}
      </section>
    </article>
  );
};

export default Profile;
