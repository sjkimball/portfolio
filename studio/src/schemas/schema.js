// Documents

// Singletons
import settingsSite from './documents/singletons/settings/site';
import settingsBlog from './documents/singletons/settings/blog';
import home from './documents/singletons/home';
import company from './documents/singletons/company';

import client from './documents/client';
import office from './documents/office';
import page from './documents/page';
import person from './documents/person';
import post from './documents/post';
import project from './documents/project';

// Objects

// Body
import bodyPage from './objects/body/page';
import bodyProject from './objects/body/project';
import bodyPerson from './objects/body/person';
import bodySection from './objects/body/section';

// Blocks
import blockCallout from './objects/blocks/callout';
import blockCalloutLink from './objects/blocks/calloutLink';
import blockExternalAsset from './objects/blocks/externalAsset';
import blockFigmaEmbed from './objects/blocks/figmaEmbed';
import blockFigure from './objects/blocks/figure';
import moduleImage from './objects/blocks/image';
import blockImages from './objects/blocks/images';
import modulePerson from './objects/blocks/person';
import blockSection from './objects/blocks/section';
import blockGrid from './objects/blocks/grid';

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

// Settings
import footer from './objects/settings/footer';
import menu from './objects/settings/menu';
import notFoundPage from './objects/settings/notFoundPage';

import baseImage from './objects/baseImage';
import clientEmployee from './objects/clientEmployee';
import designDiscipline from './objects/designDiscipline';
import employeeInfo from './objects/employeeInfo';
import socialMediaAccounts from './objects/socialMediaAccounts';

// Helpers
import department from './helpers/department';
import designArea from './helpers/designArea';
import role from './helpers/role';
import sector from './helpers/sector';

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
