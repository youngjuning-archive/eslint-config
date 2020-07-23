const javascriptRule = require('./rules/javascript.js')

module.exports = {
  files: ['*.html'],
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['html'],
  parser: 'babel-eslint',
  settings: {
    'html/html-extensions': ['.html', '.we', '.wxml'], // consider .html and .we files as HTML
  },
  env: {
    browser: true,
  },
  rules: { ...javascriptRule },
}
