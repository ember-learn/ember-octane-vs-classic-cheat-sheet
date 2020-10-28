import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


export default class LocaleMenuComponent extends Component {
  @service intl;

  supportedLocales = ['en-US', 'fr-FR', 'pt-BR', 'es'];

  @action
  updateLocale(evt) {
    if (evt.target.value) {
      this.intl.setLocale(evt.target.value);
    }
  }
}
