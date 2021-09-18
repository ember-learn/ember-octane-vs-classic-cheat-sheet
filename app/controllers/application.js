import Controller from '@ember/controller';

import config from 'ember-octane-vs-classic-cheat-sheet/config/environment';

export default class ApplicationController extends Controller {
  rootURL = config.rootURL.replace(/\/$/, '');
}
