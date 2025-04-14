import { EarthAmericasIcon } from '@sanity/icons';

export const company = (S) =>
  S.listItem()
    .title('Company')
    .icon(EarthAmericasIcon)
    .child(S.document().schemaType('company').documentId('company'))
    .title('Company');
