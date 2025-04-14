export default {
  name: 'clientEmployee',
  title: 'Client Employee',
  type: 'object',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'preferredName',
      title: 'Preferred Name',
      type: 'string',
      description: 'Optional, e.g. Sam instead of Samuel',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    //TODO Add preferred pronouns
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      preferredName: 'preferredName',
      lastName: 'lastName',
      jobTitle: 'title',
      media: 'image.asset',
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
