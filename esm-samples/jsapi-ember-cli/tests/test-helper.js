import Application from 'ember-cli-app/app';
import config from 'ember-cli-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
