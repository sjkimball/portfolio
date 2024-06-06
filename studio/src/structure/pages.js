import { DocumentsIcon } from '@sanity/icons';

export const pages = (S) =>
  S.listItem()
    .title('Pages')
    .icon(DocumentsIcon)
    .child(S.documentTypeList('page').title('Pages'));
