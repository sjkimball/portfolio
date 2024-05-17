import { graphql, useStaticQuery } from 'gatsby';

const useLandingPage = () => {
  const data = useStaticQuery(graphql`
    query LandingPage {
      page: sanityHome(_id: { regex: "/(drafts.|)home/" }) {
        _id
        hero {
          ...heroHomeData
        }
        _rawContent(resolveReferences: { maxDepth: 10 })
        seo {
          ...seoHomeData
        }
      }
      site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
        ...settingsSiteData
      }
    }
  `);

  const newObject = {
    page: data.page,
    site: data.site,
  };

  return newObject;
};

export default useLandingPage;
