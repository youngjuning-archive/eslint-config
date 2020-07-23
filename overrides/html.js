const javascriptRule = require('./rules/javascript.js')

module.exports = {
  files: ['*.html'],
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['html'],
  settings: {
    'html/html-extensions': ['.html', '.we'], // consider .html and .we files as HTML
  },
  env: {
    browser: true,
  },
  rules: { ...javascriptRule },
}
