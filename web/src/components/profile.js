import React from 'react';
import Markdown from 'react-markdown';

import PrimaryImage from './PrimaryImage';

import './profile.css';

const Profile = (props) => {
  const { profileImg, name, office, biography } = props;

  return (
    <article className="sk-profile">
      <header className="sk-profile__header">
        <h2>
          {name}
          <br />
          <span>{office.contactInfo.address.city}</span>
        </h2>
      </header>
      <section className="sk-profile__body markdown">
        <Markdown>{biography}</Markdown>
      </section>
      <aside className="sk-profile__headshot">
        <PrimaryImage imageAsset={profileImg} imageUse={`cover`} />
      </aside>
      {/* <button>Download Resume</button> */}
    </article>
  );
};

export default Profile;
