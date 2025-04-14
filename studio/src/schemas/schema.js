// Documents
import client from './documents/client';
import office from './documents/office';
import page from './documents/page';
import person from './documents/person';
import post from './documents/post';
import project from './documents/project';

//Helpers
import department from './helpers/department';
import designArea from './helpers/designArea';
import role from './helpers/role';
import sector from './helpers/sector';

// Objects

// Portable Text/Body
import bodyPage from './objects/portableText/body/page';
import bodyProject from './objects/portableText/body/project';
import bodyPerson from './objects/portableText/body/person';
import bodySection from './objects/portableText/body/section';

// Portable Text/Blocks
import blockCallout from './objects/portableText/blocks/callout';
import blockCalloutLink from './objects/portableText/blocks/calloutLink';
import blockExternalAsset from './objects/portableText/blocks/externalAsset';
import blockFigmaEmbed from './objects/portableText/blocks/figmaEmbed';
import blockFigure from './objects/portableText/blocks/figure';
import moduleImage from './objects/portableText/blocks/image';
import blockImages from './objects/portableText/blocks/images';
import modulePerson from './objects/portableText/blocks/person';
import blockSection from './objects/portableText/blocks/section';
import blockGrid from './objects/portableText/blocks/grid';

// Contact
import addressUS from './objects/contact/address/unitedstates';
import contactBasic from './objects/contact/basic';
import contactComplete from './objects/contact/complete';
// Hero
import heroPage from './objects/hero/page';
// Links
import linkInternal from './objects/links/internal';
import linkExternal from './objects/links/external';
// SEO
import seoHome from './objects/seo/home';
import seoPage from './objects/seo/page';
import seoProject from './objects/seo/project';
import seoSite from './objects/seo/site';

import baseImage from './objects/baseImage';
import clientEmployee from './objects/clientEmployee';
import designDiscipline from './objects/designDiscipline';
import employeeInfo from './objects/employeeInfo';
import footer from './objects/footer';
import menu from './objects/menu';
import notFoundPage from './objects/notFoundPage';
import socialMediaAccounts from './objects/socialMediaAccounts';

// Singletons
import settingsSite from './singletons/settings/site';
import settingsBlog from './singletons/settings/blog';
import home from './singletons/home';
import company from './singletons/company';

export default [
  addressUS,
  baseImage,
  blockCallout,
  blockCalloutLink,
  blockExternalAsset,
  blockFigmaEmbed,
  blockFigure,
  blockGrid,
  blockImages,
  blockSection,
  bodyPage,
  bodyPerson,
  bodyProject,
  bodySection,
  clientEmployee,
  client,
  company,
  contactBasic,
  contactComplete,
  department,
  designArea,
  designDiscipline,
  employeeInfo,
  footer,
  heroPage,
  home,
  linkExternal,
  linkInternal,
  menu,
  moduleImage,
  modulePerson,
  notFoundPage,
  office,
  page,
  person,
  post,
  project,
  role,
  sector,
  seoHome,
  seoPage,
  seoProject,
  seoSite,
  settingsSite,
  settingsBlog,
  socialMediaAccounts,
];
