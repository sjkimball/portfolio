import { FaIdBadge } from 'react-icons/fa';

export default {
  name: 'jobTitle',
  title: 'Job Title',
  type: 'document',
  icon: FaIdBadge,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
