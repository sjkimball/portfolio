import React from 'react';
import ProfilePreview from './profile-preview';
import Profile from './profile';

import './peopleGrid.css';

const PeopleGrid = (props) => {
  const { people, _key: key } = props;

  return (
    <section key={key} className="people-group">
      {people.length < 2 ? (
        <Profile {...people[0]} />
      ) : (
        people.map((person) => {
          return <ProfilePreview key={person._id} {...person} />;
        })
      )}
    </section>
  );
};

export default PeopleGrid;
