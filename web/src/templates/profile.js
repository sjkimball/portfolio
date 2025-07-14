import React from 'react';

import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphqlErrorList';
import Layout from '../components/global/Layout';
import Profile from '../components/Profile';
import SEO from '../components/Seo';

export const query = graphql`
  query ($id: String!) {
    page: sanityPerson(id: { eq: $id }) {
      firstName
      preferredName
      lastName
      image {
        asset {
          altText
          title
          _id
          metadata {
            lqip
          }
        }
        crop {
          bottom
          left
          right
          top
        }
        hotspot {
          height
          width
          x
          y
        }
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
      ...settingsSite
    }
  }
`;

//TODO Update Head so it uses the person's name if no SEO title
export const Head = ({ location, params, data, pageContext }) => {
  const title = data.page.seo.title ? data.page.seo.title : data.page.title;
  const description = data.page.seo
    ? data.page.seo.description
    : data.site.seo.description;
  return (
    <SEO description={description}>
      <title id="title">{title}</title>
    </SEO>
  );
};

const ProfileTemplate = (props) => {
  // console.dir('props in ProfileTemplate', props);
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
