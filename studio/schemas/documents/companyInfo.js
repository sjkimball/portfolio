export default {
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'blockContent',
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'contact',
    },
    {
      name: 'socialMediaAccounts',
      title: 'Social Media Accounts',
      type: 'socialMediaAccounts',
    },
  ],
};
