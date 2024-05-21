import { home } from './home';
import { pages } from './pages';
import { projects } from './projects';
import { companies } from './companies';
import { blog } from './blog';
import { people } from './people';
import { settings } from './settings';

const hiddenDocTypes = (listItem) =>
  ![
    'blogSettings',
    'company',
    'home',
    'page',
    'person',
    'post',
    'project',
    'route',
    'settings.site',
    'settings.blog',
    'media.tag',
  ].includes(listItem.getId());

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      home(S),
      pages(S),
      S.divider(),
      projects(S),
      blog(S),
      S.divider(),
      companies(S),
      people(S),
      S.divider(),
      settings(S),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
