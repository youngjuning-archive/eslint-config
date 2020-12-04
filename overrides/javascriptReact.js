module.exports = {
  files: ['*.jsx'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    './rules/javascript',
    './rules/react',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
