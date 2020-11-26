const javascript = require('./overrides/javascript');
const typescript = require('./overrides/typescript');
const jest = require('./overrides/jest');

module.exports = {
  extends: ['plugin:prettier/recommended'],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [javascript, typescript, jest],
};
