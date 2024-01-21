import {
  FaCog,
  FaHome,
  FaRegFileAlt,
  FaRegBuilding,
  FaRegIdCard,
} from 'react-icons/fa';

import portfolio from './portfolio';
import pageBuilder from './pageBuilder';
import blog from './blog';
import staff from './staff';

const hiddenDocTypes = (listItem) =>
  ![
    'blogSettings',
    'client',
    'companyInfo',
    'indexPage',
    'jobTitle',
    'navigationMenu',
    'office',
    'page',
    'person',
    'post',
    'project',
    'route',
    'siteSettings',
    'socialMediaService',
  ].includes(listItem.getId());

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(FaCog)
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings'),
        ),
      S.listItem()
        .title('Index Page')
        .icon(FaHome)
        .child(S.document().schemaType('indexPage').documentId('indexPage')),
      S.divider(),
      blog(S),
      pageBuilder(S),
      S.divider(),
      portfolio(S),
      S.divider(),
      S.listItem()
        .title('Company Information')
        .icon(FaRegIdCard)
        .child(S.editor().schemaType('companyInfo').documentId('companyInfo')),
      staff(S),
      S.documentTypeListItem('office').title('Offices').icon(FaRegBuilding),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
