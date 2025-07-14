import { UserIcon } from '@sanity/icons';

export default {
  name: 'module.person',
  title: 'Person Module',
  type: 'object',
  icon: UserIcon,
  fields: [
    {
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      firstName: 'person.firstName',
      preferredName: 'person.preferredName',
      lastName: 'person.lastName',
    },
    prepare(selection) {
      const { firstName, preferredName, lastName } = selection;
      const name = preferredName
        ? `${preferredName} ${lastName}`
        : `${firstName} ${lastName}`;

      return {
        title: name,
        subtitle: 'Person',
        media: UserIcon,
      };
    },
  },
};
