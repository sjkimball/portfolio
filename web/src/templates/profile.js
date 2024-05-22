import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/global/Layout';
import Profile from '../components/profile';
import GraphQLErrorList from '../components/graphql-error-list';

import '../styles/_variables.css';
import '../styles/global.css';
import '../styles/layout.css';

export const query = graphql`
  query ($id: String!) {
    person: sanityPerson(id: { eq: $id }) {
      firstName
      preferredName
      lastName
      image {
        ...imageData
      }
      _rawBio
      links {
        ...externalLinkData
      }
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

  const profile = data.person;
  const site = data.site;
  return (
    <Layout site={site}>
      <Profile {...profile} />
    </Layout>
  );
};

export default ProfileTemplate;
