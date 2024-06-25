import { EarthGlobeIcon } from '@sanity/icons';

import { PAGE_REFERENCES } from '../../../constants';

export default {
  name: 'link.external',
  title: 'External Link',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    // URL
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
    },
    // Open in a new window
    {
      name: 'newWindow',
      title: 'Open in a new window?',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
