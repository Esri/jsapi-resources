import EmberRouter from '@embroider/router';
import config from 'ember-cli-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
