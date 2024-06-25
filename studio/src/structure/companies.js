import { FaBuilding } from 'react-icons/fa';

export const companies = (S) =>
  S.listItem()
    .title('Companies')
    .icon(FaBuilding)
    .child(S.documentTypeList('company').title('Companies'));
