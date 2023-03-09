import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Profile from '../components/profile';

const ProfileTemplate = ({ data }) => {
  const profile = data.profile;

  return (
    <Layout>
      <Profile profile={profile} />
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    profile: sanityPerson(slug: { current: { eq: $slug } }) {
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

export default ProfileTemplate;
