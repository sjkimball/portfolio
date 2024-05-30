import React from 'react';

import PortableText from './portableText/PortableText';
import PrimaryImage from './PrimaryImage';

import { profile } from './Profile.module.css';

const Profile = (props) => {
  // console.dir('props in Profile', props);
  const { firstName, preferredName, lastName, image, links, _rawBio } = props;

  const name = preferredName
    ? `${preferredName} ${lastName}`
    : `${firstName} ${lastName}`;

  return (
    <article className={profile}>
      <header>
        <h1>{name}</h1>
        <PrimaryImage imageAsset={image} imageUse={`cover`} />
      </header>
      <PortableText blocks={_rawBio} />
      <aside></aside>
      <section className="sk-profile__links">
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
