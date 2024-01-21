export default {
  name: 'jobTitle',
  title: 'Job Title',
  type: 'document',
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
