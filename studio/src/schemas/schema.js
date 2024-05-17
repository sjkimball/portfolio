// Documents
import company from './documents/company';
import page from './documents/page';
import person from './documents/person';
import post from './documents/post';
import project from './documents/project';

// Objects
// Blocks
import body from './objects/blocks/body';
// Custom Blocks
import blockExternalAsset from './objects/blocks/custom/externalAsset';
// Contact
import addressUS from './objects/contact/address/unitedstates';
import contactBasic from './objects/contact/basic';
import contactComplete from './objects/contact/complete';
// Hero
import heroHome from './objects/hero/home';
import heroPage from './objects/hero/page';
// Links
import linkInternal from './objects/links/internal';
import linkExternal from './objects/links/external';
// Modules
import moduleProjects from './objects/modules/projects';
import modulePeople from './objects/modules/people';
import modulePosts from './objects/modules/posts';
// SEO
import seoHome from './objects/seo/home';
import seoPage from './objects/seo/page';
import seoProject from './objects/seo/project';
import seoSite from './objects/seo/site';

import designArea from './objects/designArea';
import designDiscipline from './objects/designDiscipline';
import footer from './objects/footer';
import infoBlock from './objects/infoBlock';
import infoSection from './objects/infoSection';
import mainImage from './objects/mainImage';
import memberStaff from './objects/memberStaff';
import notFoundPage from './objects/notFoundPage';
import menu from './objects/menu';
import messageImage from './objects/messageImage';
import sector from './objects/sector';
import socialMediaAccounts from './objects/socialMediaAccounts';

// Singletons
import blogSettings from './singletons/blogSettings';
import home from './singletons/home';
import settingsSite from './singletons/settings/site';

export default [
  addressUS,
  body,
  blogSettings,
  blockExternalAsset,
  company,
  contactBasic,
  contactComplete,
  designArea,
  designDiscipline,
  footer,
  heroHome,
  heroPage,
  home,
  infoBlock,
  infoSection,
  linkInternal,
  linkExternal,
  mainImage,
  memberStaff,
  menu,
  messageImage,
  modulePeople,
  modulePosts,
  moduleProjects,
  notFoundPage,
  page,
  person,
  post,
  project,
  sector,
  seoHome,
  seoPage,
  seoProject,
  seoSite,
  settingsSite,
  socialMediaAccounts,
];
