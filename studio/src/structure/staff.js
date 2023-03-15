import { FaUserFriends } from 'react-icons/fa';

const staff = (S) =>
  S.listItem()
    .title('Staff')
    .icon(FaUserFriends)
    .child(
      S.list()
        .title('Staff')
        .items([
          S.documentTypeListItem('person').title('Staff Members'),
          S.documentTypeListItem('jobTitle').title('Job Titles'),
        ])
    );

export default staff;
