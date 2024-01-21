export default {
  name: 'designDiscipline',
  title: 'Design Discipline',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: [
      { title: 'Graphic Design', value: 'graphicDesign' },
      { title: 'Responsive Design', value: 'responsiveDesign' },
      { title: 'UX Design', value: 'uxDesign' },
      { title: 'UI Design', value: 'uiDesign' },
      { title: 'Brand Identity', value: 'brandIdentity' },
    ],
  },
};
