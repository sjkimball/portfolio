import { UsersIcon } from '@sanity/icons';

export const people = (S) =>
  S.listItem()
    .title('People')
    .icon(UsersIcon)
    .child(S.documentTypeList('person').title('People'));
