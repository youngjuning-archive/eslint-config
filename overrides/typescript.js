const javascriptRule = require('./rules/javascript')
const typescriptRule = require('./rules/typescript')

module.exports = {
  files: ['*.ts'],
  extends: ['airbnb-base/legacy', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    ...javascriptRule,
    ...typescriptRule,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
}
