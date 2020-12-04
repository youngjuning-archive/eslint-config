module.exports = {
  files: ['*.html'],
  extends: ['airbnb-base/legacy', './rules/javascript', 'prettier'],
  plugins: ['html'],
  parser: 'babel-eslint',
  settings: {
    'html/html-extensions': ['.html', '.we', '.wxml'], // consider .html and .we files as HTML
  },
  env: {
    browser: true,
  },
};
