import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import Profile from '../components/profile';
import GraphQLErrorList from '../components/graphql-error-list';

import '../styles/_variables.css';
import '../styles/global.css';
import '../styles/layout.css';

export const query = graphql`
  query ($id: String!, $parentRouteID: String!) {
    profile: sanityPerson(id: { eq: $id }) {
      firstName
      preferredName
      lastName
      profileImg {
        ...imageData
      }
      _rawBiography
      links {
        title
        url
      }
      office {
        contactInfo {
          address {
            city
          }
        }
      }
    }
    parentRoute: sanityRoute(id: { eq: $parentRouteID }) {
      page {
        navMenu {
          ...NavMenu
        }
      }
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
  const page = data.parentRoute.page;
  const menuItems = page.navMenu && (page.navMenu.items || []);
  return (
    <Layout navMenuItems={menuItems}>
      <Profile {...profile} />
    </Layout>
  );
};

export default ProfileTemplate;
