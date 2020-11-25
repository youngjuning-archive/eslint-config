const javascriptRule = require('./rules/javascript');
module.exports = {
  files: ['*.js'],
  extends: ['airbnb-base/legacy', 'prettier'],
  parser: 'babel-eslint',
  rules: { ...javascriptRule },
};
