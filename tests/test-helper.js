import Application from 'ember-octane-vs-classic-cheat-sheet/app';
import config from 'ember-octane-vs-classic-cheat-sheet/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
