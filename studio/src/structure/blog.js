import { ComposeIcon, ControlsIcon } from '@sanity/icons';

export const blog = (S) =>
  S.listItem()
    .title('Blog')
    .icon(ComposeIcon)
    .child(
      S.list()
        .title('Blog')
        .items([
          S.listItem()
            .title('Blog Settings')
            .icon(ControlsIcon)
            .child(
              S.document()
                .schemaType('settings.blog')
                .documentId('blogSettings'),
            ),
          S.listItem()
            .title('Posts')
            .child(
              S.list()
                .title('Posts')
                .items([
                  S.listItem()
                    .title('Featured Posts')
                    .child(
                      S.documentList()
                        .title('Featured Posts')
                        .apiVersion('2023-06-20')
                        .filter('_type == "post" && featured == true')
                        .child((documentId) =>
                          S.document()
                            .documentId(documentId)
                            .schemaType('post'),
                        ),
                    ),
                  S.documentTypeListItem('post').title('All Posts'),
                ]),
            ),
        ]),
    );
