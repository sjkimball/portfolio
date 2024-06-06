export default {
  name: 'address.us',
  title: 'Address',
  type: 'object',
  fields: [
    {
      name: 'street',
      title: 'Street Address',
      description: "e.g. '1 Shady Lane'",
      type: 'string',
    },
    {
      name: 'streetSecondary',
      title: 'Secondary Street Address',
      description: "e.g. 'Apartment, Unit, Suite number, etc.'",
      type: 'string',
    },
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
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
    },
  ],
};
