const javascript = require('./overrides/javascript')
const javascriptReact = require('./overrides/javascriptReact')
const typescript = require('./overrides/typescript')
const typescriptReact = require('./overrides/typescriptReact')

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:you-dont-need-momentjs/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    javascript,
    javascriptReact,
    typescript,
    typescriptReact
  ],
}
