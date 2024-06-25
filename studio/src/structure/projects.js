import { ProjectsIcon } from '@sanity/icons';

export const projects = (S) =>
  S.listItem()
    .title('Projects')
    .icon(ProjectsIcon)
    .child(S.documentTypeList('project').title('Projects'));
