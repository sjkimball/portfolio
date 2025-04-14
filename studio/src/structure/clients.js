import { FaBuilding } from 'react-icons/fa';

export const clients = (S) =>
  S.listItem()
    .title('Clients')
    .icon(FaBuilding)
    .child(S.documentTypeList('client').title('Clients'));
