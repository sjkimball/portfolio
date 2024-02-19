import { graphql, useStaticQuery } from 'gatsby';

const useCompanyInfo = () => {
  const data = useStaticQuery(graphql`
    query companyInfo {
      companyInfo: sanityCompanyInfo(
        _id: { regex: "/(drafts.|)companyInfo/" }
      ) {
        socialMediaAccounts {
          behance
          github
          linkedin
        }
        companyName
        about
      }
    }
  `);

  return data;
};

export default useCompanyInfo;
