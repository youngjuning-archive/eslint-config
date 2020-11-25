const javascript = require('./overrides/javascript');
const typescript = require('./overrides/typescript');
const jest = require('./overrides/jest');

module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Jest Plugin
    // The following rules are made available via `eslint-plugin-jest`.
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 1,
    'jest/no-identical-title': 1,
    'jest/valid-expect': 1,
  },
  overrides: [javascript, typescript, jest],
};
