import { graphql, useStaticQuery } from 'gatsby';

const useLandingPage = () => {
  const data = useStaticQuery(graphql`
    query LandingPage {
      page: sanityIndexPage(_id: { regex: "/(drafts.|)indexPage/" }) {
        page {
          ...PageInfo
        }
      }
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `);

  const newObject = {
    page: data.page.page,
    site: data.site,
  };

  return newObject;
};

export default useLandingPage;
