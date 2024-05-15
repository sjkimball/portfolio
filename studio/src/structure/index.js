import { HomeIcon, ControlsIcon } from '@sanity/icons';

import { home } from './home';
import { pages } from './pages';
import { projects } from './projects';
import { companies } from './companies';
import { blog } from './blog';
import { people } from './people';
import { settings } from './settings';
import pageBuilder from './pageBuilder';

const hiddenDocTypes = (listItem) =>
  ![
    'blogSettings',
    'company',
    'home',
    'indexPage',
    'navigationMenu',
    'page',
    'person',
    'post',
    'project',
    'route',
    'siteSettings',
    'settings.site',
    'media.tag',
  ].includes(listItem.getId());

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(ControlsIcon)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings'),
        ),
      S.listItem()
        .title('Index Page')
        .icon(HomeIcon)
        .child(S.document().schemaType('indexPage').documentId('indexPage')),
      pageBuilder(S),
      S.divider(),
      home(S),
      pages(S),
      S.divider(),
      projects(S),
      blog(S),
      S.divider(),
      S.divider(),
      companies(S),
      people(S),
      S.divider(),
      settings(S),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
