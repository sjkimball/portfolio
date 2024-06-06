import { graphql, useStaticQuery } from 'gatsby';

const useSiteSettings = () => {
  const data = useStaticQuery(graphql`
    query {
      site: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
        ...settingsSiteData
      }
    }
  `);

  return data;
};

export default useSiteSettings;
