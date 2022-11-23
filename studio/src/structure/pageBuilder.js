import S from '@sanity/desk-tool/structure-builder';

import { FaRegFileAlt } from 'react-icons/fa';

const pageBuilder = S.listItem()
  .title('Page Builder')
  .child(
    S.list()
      .title('Page Builder')
      .items([
        // S.listItem().title('Routes'),
        S.listItem()
          .title('Pages')
          .child(S.documentList().title('Pages').filter('_type == "page"')),
      ])
  );

export default pageBuilder;
