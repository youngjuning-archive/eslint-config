const javascript = require('./overrides/javascript');
const javascriptReact = require('./overrides/javascriptReact');
const typescript = require('./overrides/typescript');
const typescriptReact = require('./overrides/typescriptReact');
const jest = require('./overrides/jest');

module.exports = {
  extends: ['./base.js', 'plugin:react-native/all'],
  env: {
    'react-native/react-native': true,
  },
  overrides: [javascript, javascriptReact, typescript, typescriptReact, jest],
  rules: {
    'react-native/no-color-literals': 0,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': [2, { skip: true }],
  },
};
