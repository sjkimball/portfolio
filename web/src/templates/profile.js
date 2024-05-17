import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import Profile from '../components/profile';
import GraphQLErrorList from '../components/graphql-error-list';

import '../styles/_variables.css';
import '../styles/global.css';
import '../styles/layout.css';

export const query = graphql`
  query ($id: String!) {
    profile: sanityPerson(id: { eq: $id }) {
      firstName
      preferredName
      lastName
      image {
        ...imageData
      }
      _rawBio
    }
    site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
      ...settingsSiteData
    }
  }
`;

const ProfileTemplate = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const profile = data.profile;
  const site = data.site;
  const menuItems = site.menu && (site.menu.links || []);
  return (
    <Layout navMenuItems={menuItems}>
      <Profile {...profile} />
    </Layout>
  );
};

export default ProfileTemplate;
