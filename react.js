const javascriptReact = require('./overrides/javascriptReact');
const typescriptReact = require('./overrides/typescriptReact');

module.exports = {
  extends: ['./base'],
  overrides: [javascriptReact, typescriptReact],
};
