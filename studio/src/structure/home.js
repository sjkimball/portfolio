import { HomeIcon } from '@sanity/icons';

export const home = (S) =>
  S.listItem()
    .title('Home')
    .icon(HomeIcon)
    .child(S.document().schemaType('home').documentId('home').title('Home'));
