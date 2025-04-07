import { graphql, useStaticQuery } from 'gatsby';

const useSiteSettings = () => {
  const data = useStaticQuery(graphql`
    query {
      settings: sanitySettingsSite(_id: { regex: "/(drafts.|)settings/" }) {
        ...settingsSite
      }
    }
  `);

  return data.settings;
};

export default useSiteSettings;
