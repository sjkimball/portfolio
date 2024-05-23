import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/global/Layout';
import Profile from '../components/profile';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';

import '../styles/_variables.css';
import '../styles/global.css';
import '../styles/layout.css';

export const query = graphql`
  query ($id: String!) {
    page: sanityPerson(id: { eq: $id }) {
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
      seo {
        ...seoPageData
      }
    }
    site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
      ...settingsSiteData
    }
  }
`;

export const Head = ({ location, params, data, pageContext }) => {
  const title = data.page.seo ? data.page.seo.title : data.page.title;
  const description = data.page.seo
    ? data.page.seo.description
    : data.site.seo.description;
  return <SEO title={title} description={description} />;
};

const ProfileTemplate = (props) => {
  console.dir('props in ProfileTemplate', props);
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const profile = data.page;
  const site = data.site;
  return (
    <Layout site={site}>
      <Profile {...profile} />
    </Layout>
  );
};

export default ProfileTemplate;
