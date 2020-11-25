const vue = require('./overrides/vue');
const html = require('./overrides/html');

module.exports = {
  extends: ['./base'],
  overrides: [html, vue],
};
