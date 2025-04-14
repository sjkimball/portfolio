export default {
  name: 'employeeInfo',
  title: 'Employee Information',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    {
      name: 'employeeId',
      title: 'Employee ID',
      type: 'string',
    },
    {
      name: 'dateOfHire',
      title: 'Date of Hire',
      type: 'date',
    },
    {
      name: 'office',
      title: 'Office',
      type: 'reference',
      to: [{ type: 'office' }],
      weak: true,
      options: {
        disableNew: true,
      },
    },
    // {
    //   name: 'department',
    //   type: 'department',
    // },
    {
      name: 'role',
      type: 'role',
    },
  ],
};
