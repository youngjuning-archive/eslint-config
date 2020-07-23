const javascript = require('./overrides/javascript')
const javascriptReact = require('./overrides/javascriptReact')
const typescript = require('./overrides/typescript')
const typescriptReact = require('./overrides/typescriptReact')
const html = require('./overrides/html')
const vue = require('./overrides/vue')

module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:prettier/recommended'],
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
  overrides: [
    javascript,
    javascriptReact,
    typescript,
    typescriptReact,
    html,
    vue,
    {
      files: ['*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
    },
  ],
}
