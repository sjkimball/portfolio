export default {
  name: 'designDiscipline',
  title: 'Design Discipline',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: [
      { title: 'Graphic Design', value: 'graphicDesign' },
      { title: 'UX Design', value: 'uxDesign' },
      { title: 'UI Design', value: 'uiDesign' },
      { title: 'Brand Identity', value: 'brandIdentity' },
    ],
  },
  validation: (Rule) =>
    Rule.required().min(1).error('Choose at least 1 discipline.'),
};
