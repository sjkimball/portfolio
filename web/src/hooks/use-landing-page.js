import { graphql, useStaticQuery } from 'gatsby';

const useLandingPage = () => {
  const data = useStaticQuery(graphql`
    query LandingPage {
      page: sanityPage(_id: { regex: "/(drafts.|)frontpage/" }) {
        title
        content {
          ... on SanityHero {
            _key
            _type
            heading
            tagline
            ...heroImageData
          }
        }
      }
    }
  `);

  return data.page;
};

export default useLandingPage;
