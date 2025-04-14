export default {
  name: 'office',
  title: 'Office',
  type: 'document',
  groups: [],
  fields: [
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'stateProvince',
      title: 'State/Province',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Office Images',
      type: 'array',
      of: [{ type: 'baseImage' }],
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'city',
      },
    },
  ],
  preview: {
    select: {
      city: 'city',
      images: 'images',
    },
    prepare(selection) {
      const { city, images } = selection;
      // const thumbnail = images.length >= 0 ? images[0] : '';
      return {
        title: city,
        // media: thumbnail,
      };
    },
  },
};
