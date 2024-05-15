import { ProjectsIcon } from '@sanity/icons';

export const projects = (S) =>
  S.listItem()
    .title('Projects')
    .icon(ProjectsIcon)
    .child(
      S.list()
        .title('Projects')
        .items([
          S.listItem()
            .title('All Projects')
            .child(S.documentTypeList('project').title('All Projects')),
          S.listItem()
            .title('Product Design')
            .child(
              S.documentList()
                .title('Product Design')
                .filter('_type == "project" && designArea == "productDesign"'),
            ),
        ]),
    );
