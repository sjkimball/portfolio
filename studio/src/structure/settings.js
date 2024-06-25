import { ControlsIcon } from '@sanity/icons';

export const settings = (S) =>
  S.listItem()
    .title('Settings')
    .icon(ControlsIcon)
    .child(
      S.document()
        .schemaType('settings.site')
        .documentId('settings')
        .title('Settings'),
    );
