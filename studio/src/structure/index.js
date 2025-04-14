import { blog } from './blog';
import { clients } from './clients';
import { company } from './company';
import { home } from './home';
import { offices } from './offices';
import { pages } from './pages';
import { people } from './people';
import { projects } from './projects';
import { settings } from './settings';

const hiddenDocTypes = (listItem) =>
  ![
    'blogSettings',
    'client',
    'company',
    'home',
    'office',
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
      clients(S),
      projects(S),
      S.divider(),
      blog(S),
      S.divider(),
      company(S),
      offices(S),
      people(S),
      S.divider(),
      settings(S),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
