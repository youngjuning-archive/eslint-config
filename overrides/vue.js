const javascriptRule = require('./rules/javascript.js')
const vueRule = require('./rules/vue.js')

module.exports = {
  files: ['*.vue'],
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier', 'prettier/vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
  },
  globals: {
    __static: true,
  },
  rules: { ...javascriptRule, ...vueRule },
}
