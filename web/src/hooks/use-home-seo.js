import { graphql, useStaticQuery } from 'gatsby';

const useHomeSeo = () => {
  const data = useStaticQuery(graphql`
    query {
      page: sanityHome(_id: { regex: "/(drafts.|)home/" }) {
        _id
        seo {
          ...seoHomeData
        }
      }
      site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
        seo {
          ...seoSiteData
        }
      }
    }
  `);

  return data;
};

export default useHomeSeo;
