const DEPARTMENTS = [
  { title: 'Product', value: 'product' },
  {
    title: 'Engineering',
    value: 'engineering',
  },
];

export default {
  name: 'department',
  title: 'Department',
  type: 'string',
  options: {
    list: DEPARTMENTS,
  },
  preview: {
    select: {
      title: 'title',
    },
  },
};
