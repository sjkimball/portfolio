module.exports = {
  extends: ['react-app', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6'
    }
  }
};
