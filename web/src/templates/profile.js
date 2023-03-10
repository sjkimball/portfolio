import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Profile from '../components/profile';

export const query = graphql`
  query ($id: String!) {
    profile: sanityPerson(id: { eq: $id }) {
      profileImg {
        ...imageData
      }
      name
      office {
        contactInfo {
          address {
            city
          }
        }
      }
      _rawBio
      _id
    }
  }
`;

const ProfileTemplate = ({ data }) => {
  const profile = data.profile;
  return (
    <Layout>
      <Profile profile={profile} />
    </Layout>
  );
};

export default ProfileTemplate;
