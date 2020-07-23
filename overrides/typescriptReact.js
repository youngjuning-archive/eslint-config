const javascriptRule = require('./rules/javascript')
const reactRule = require('./rules/react')
const typescriptRule = require('./rules/typescript')

module.exports = {
  files: ['*.tsx'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...javascriptRule,
    ...reactRule,
    ...typescriptRule,
  },
  settings: {
    react: {
      version: 'detect',
    },
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
