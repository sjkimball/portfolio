import { graphql, useStaticQuery } from 'gatsby';

const useHomeSeo = () => {
  const data = useStaticQuery(graphql`
    query {
      home: sanityHome(_id: { regex: "/(drafts.|)home/" }) {
        _id
        seo {
          title
        }
        homePage {
          seo {
            description
          }
        }
      }
    }
  `);

  return data.home;
};

export default useHomeSeo;
