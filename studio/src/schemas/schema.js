// Documents
import company from './documents/company';
import navMenu from './documents/navMenu';
import page from './documents/page';
import person from './documents/person';
import post from './documents/post';
import project from './documents/project';
import route from './documents/route';

// Objects
// Blocks
import blockContent from './objects/blocks/blockContent';
import markdownBlock from './objects/blocks/markdownBlock';
import projectContent from './objects/blocks/projectContent';
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

import cta from './objects/cta';
import designArea from './objects/designArea';
import designDiscipline from './objects/designDiscipline';
import figmaAsset from './objects/figmaAsset';
import footer from './objects/footer';
import infoBlock from './objects/infoBlock';
import infoSection from './objects/infoSection';
import mainImage from './objects/mainImage';
import notFoundPage from './objects/notFoundPage';
import menu from './objects/menu';
import messageImage from './objects/messageImage';
import sector from './objects/sector';
import socialMediaAccounts from './objects/socialMediaAccounts';

// Singletons
import blogSettings from './singletons/blogSettings';
import home from './singletons/home';
import indexPage from './singletons/indexPage';
import siteSettings from './singletons/siteSettings';
import settingsSite from './singletons/settings/site';

export default [
  addressUS,
  blogSettings,
  blockContent,
  company,
  contactBasic,
  contactComplete,
  cta,
  designArea,
  designDiscipline,
  footer,
  figmaAsset,
  heroHome,
  heroPage,
  home,
  indexPage,
  infoBlock,
  infoSection,
  linkInternal,
  linkExternal,
  mainImage,
  markdownBlock,
  menu,
  messageImage,
  notFoundPage,
  navMenu,
  page,
  modulePeople,
  person,
  post,
  modulePosts,
  project,
  projectContent,
  moduleProjects,
  route,
  sector,
  seoHome,
  seoPage,
  seoProject,
  seoSite,
  siteSettings,
  settingsSite,
  socialMediaAccounts,
];
