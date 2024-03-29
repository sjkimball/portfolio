import { FaRegFileAlt } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

const pageBuilder = (S) =>
  S.listItem()
    .title('Page Builder')
    .child(
      S.list()
        .title('Page Builder')
        .items([
          S.listItem()
            .title('Navigation Menus')
            .icon(FaLink)
            .child(
              S.documentList()
                .title('Navigation Menus')
                .apiVersion('2023-06-20')
                .filter('_type == "navigationMenu"'),
            ),
          S.listItem()
            .title('Routes')
            .icon(FaLink)
            .child(
              S.documentList()
                .title('Routes')
                .apiVersion('2023-06-20')
                .filter('_type == "route"'),
            ),
          S.listItem()
            .title('Pages')
            .icon(FaRegFileAlt)
            .child(
              S.documentList()
                .title('Pages')
                .apiVersion('2023-06-20')
                .filter('_type == "page"')
                .defaultOrdering([{ field: 'indexPage', direction: 'desc' }]),
            ),
        ]),
    );

export default pageBuilder;
