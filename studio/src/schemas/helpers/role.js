const ROLES = [
  { title: 'Product Designer', value: 'productDesigner' },
  {
    title: 'Office Manager',
    value: 'officeManager',
  },
];

export default {
  name: 'role',
  title: 'Role',
  type: 'string',
  options: {
    list: ROLES,
  },
  preview: {
    select: {
      title: 'title',
    },
  },
};
