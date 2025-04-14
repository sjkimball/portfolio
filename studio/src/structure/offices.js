import { FaBuilding } from 'react-icons/fa';

export const offices = (S) =>
  S.listItem()
    .title('Offices')
    .icon(FaBuilding)
    .child(S.documentTypeList('office').title('Offices'));
