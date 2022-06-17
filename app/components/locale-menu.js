import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';

export default class LocaleMenuComponent extends Component {
  @service locale;

  @action updateLocale(event) {
    const locale = event.target.value;

    this.locale.updateSiteLocale(locale);
  }
}
