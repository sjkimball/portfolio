export default {
  name: 'socialMediaAccounts',
  title: 'Social Media Accounts',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'linkedin',
      title: 'LinkedIn Profile',
      type: 'url',
    },
    {
      name: 'github',
      title: 'GitHub Profile',
      type: 'url',
    },
    {
      name: 'behance',
      title: 'Behance Profile',
      type: 'url',
    },
  ],
};
