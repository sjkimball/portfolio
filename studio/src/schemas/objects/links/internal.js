import { LinkIcon } from '@sanity/icons';

import { PAGE_REFERENCES } from '../../../constants';

export default {
  name: 'link.internal',
  title: 'Internal Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    // Reference
    {
      name: 'reference',
      title: 'Reference',
      type: 'reference',
      validation: (rule) => rule.required(),
      to: PAGE_REFERENCES,
    },
  ],
};
