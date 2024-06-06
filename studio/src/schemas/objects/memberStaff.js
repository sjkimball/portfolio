export default {
  name: 'member.staff',
  title: 'Staff Member',
  type: 'object',
  fields: [
    {
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: (rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      firstName: 'person.firstName',
      preferredName: 'person.preferredName',
      lastName: 'person.lastName',
      jobTitle: 'title',
      media: 'person.profileImg.asset',
    },
    prepare({ firstName, preferredName, lastName, jobTitle, media }) {
      return {
        title: `${preferredName ? preferredName : firstName} ${lastName}`,
        subtitle: jobTitle,
        media: media,
      };
    },
  },
};
