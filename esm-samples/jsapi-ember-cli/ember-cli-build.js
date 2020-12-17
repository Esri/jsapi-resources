'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {});
  return require('@embroider/compat').compatBuild(app, Webpack);
};
