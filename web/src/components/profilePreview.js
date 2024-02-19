import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from './previewImage';

import './profilePreview.css';

const ProfilePreview = (props) => {
  const { profileImg, name, office, slug } = props;
  const profileSlug = slug.current;
  const officeName = office.contactInfo.address.city;
  return (
    <Link to={`/about/${profileSlug}`} className="profilePreview">
      <h4>{name}</h4>
      <h5>{officeName}</h5>
      <PreviewImage imageAsset={profileImg} imageType="square" />
    </Link>
  );
};

export default ProfilePreview;
