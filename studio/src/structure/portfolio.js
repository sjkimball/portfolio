import { FaPencilRuler, FaStar } from 'react-icons/fa';

const portfolio = (S) =>
  S.listItem()
    .title('Portfolio')
    .icon(FaPencilRuler)
    .child(
      S.list()
        .title('Portfolio')
        .items([
          S.listItem()
            .title('Projects')
            .child(
              S.list()
                .title('Projects')
                .items([
                  S.listItem()
                    .title('Featured Projects')
                    .icon(FaStar)
                    .child(
                      S.documentList()
                        .title('Featured Projects')
                        .apiVersion('2023-06-20')
                        .filter('_type == "project" && featured == true'),
                    ),
                  S.documentTypeListItem('project').title('All Projects'),
                ]),
            ),
          S.listItem()
            .title('Clients')
            .child(S.documentTypeList('client').title('Clients')),
        ]),
    );

export default portfolio;
