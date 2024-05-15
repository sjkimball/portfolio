export default {
  name: 'contact.basic',
  title: 'Contact',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'socialMediaAccounts',
    },
  ],
};
