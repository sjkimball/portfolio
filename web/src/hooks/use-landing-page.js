import { graphql, useStaticQuery } from 'gatsby';

const useLandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      page: sanityHome(_id: { regex: "/(drafts.|)home/" }) {
        _id
        hero {
          ...heroHomeData
        }
        _rawContent(resolveReferences: { maxDepth: 10 })
        # seo {
        #   ...seoHomeData
        # }
      }
      site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
        ...settingsSiteData
      }
    }
  `);

  return data;
};

export default useLandingPage;
