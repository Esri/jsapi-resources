import Application from 'ember-cli-app/app';
import config from 'ember-cli-app/config/environment';
import QUnit from 'qunit'
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
