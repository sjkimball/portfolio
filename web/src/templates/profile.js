import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import Profile from '../components/profile';
import GraphQLErrorList from '../components/graphql-error-list';

export const query = graphql`
  query ($id: String!, $parentRouteID: String!) {
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
      biography
      _id
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
