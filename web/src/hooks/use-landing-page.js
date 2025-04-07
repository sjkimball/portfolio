import { graphql, useStaticQuery } from 'gatsby';

const useLandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      page: sanityHome(_id: { regex: "/(drafts.|)home/" }) {
        _id
        homePage {
          title
          showHero
          hero {
            ...heroData
          }
          _rawBody(resolveReferences: { maxDepth: 10 })
          seo {
            ...seoPageData
          }
        }
      }
    }
  `);

  return data.page;
};

export default useLandingPage;
