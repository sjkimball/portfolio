import { graphql, useStaticQuery } from 'gatsby';
import PageInfo from '../graphql-fragments/PageInfo';

const useLandingPage = () => {
  const data = useStaticQuery(graphql`
    query LandingPage {
      page: sanityPage(_id: { regex: "/(drafts.|)frontpage/" }) {
        ...PageInfo
      }
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `);

  return data;
};

export default useLandingPage;
