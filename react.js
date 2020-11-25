const javascriptReact = require('./overrides/javascriptReact');
const typescriptReact = require('./overrides/typescriptReact');
const html = require('./overrides/html');

module.exports = {
  extends: ['./base'],
  overrides: [javascriptReact, typescriptReact, html],
};
