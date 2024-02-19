import React from 'react';
import ProfilePreview from './profilePreview';
import Profile from './profile';

import './peopleGrid.css';

const PeopleGrid = (props) => {
  const { people, _key: key } = props;

  return people.length < 2 ? (
    <Profile {...people[0]} />
  ) : (
    <section key={key} className="peopleGrid">
      {people.map((person) => (
        <ProfilePreview key={person._id} {...person} />
      ))}
    </section>
  );
};

export default PeopleGrid;
