import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LocaleMenuComponent extends Component {
  @service locale;

  @action updateLocale(event) {
    const locale = event.target.value;

    this.locale.updateSiteLocale(locale);
  }
}
