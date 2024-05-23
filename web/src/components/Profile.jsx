import React from 'react';

import PrimaryImage from './primaryImage';
import PortableText from './portableText/portableText';

import './Profile.css';

const Profile = (props) => {
  console.dir('props in Profile', props);
  const { firstName, preferredName, lastName, image, links, _rawBio, bio } =
    props;

  const name = preferredName
    ? `${preferredName} ${lastName}`
    : `${firstName} ${lastName}`;

  return (
    <article className="sk-profile">
      <header className="sk-profile__header">
        <h2>
          {name}
          <br />
          {/* <span>{office.contactInfo.address.city}</span> */}
        </h2>
      </header>
      {/* <section className="sk-profile__body">{bio}</section> */}
      <PortableText blocks={_rawBio} />
      <aside className="sk-profile__headshot">
        <PrimaryImage imageAsset={image} imageUse={`cover`} />
      </aside>
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
