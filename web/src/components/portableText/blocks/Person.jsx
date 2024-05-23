import React from 'react';
import Profile from '../../profile';

const PersonBlock = (props) => {
  const { value } = props;
  return <Profile {...value.person} />;
};

export default PersonBlock;
