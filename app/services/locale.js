import Service, { service } from '@ember/service';

/*
  To help with maintainenance, please list
  the supported locales in alphabetical order.
*/
const supportedLocales = new Set([
  'de-DE',
  'en-US',
  'es',
  'fr-FR',
  'ja',
  'pt-BR',
]);

export default class LocaleService extends Service {
  @service intl;

  menuOptions = Array.from(supportedLocales)
    .map((locale) => {
      return {
        label: this.intl.t(`component.locale-menu.locale-${locale}`).toString(),
        value: locale,
      };
    })
    .sort((a, b) => {
      const aValue = a.label.toLowerCase();
      const bValue = b.label.toLowerCase();

      if (aValue > bValue) return 1;
      if (aValue < bValue) return -1;
      return 0;
    });

  updateSiteLocale(locale) {
    if (!supportedLocales.has(locale)) {
      return;
    }

    this.intl.setLocale(locale);
  }
}
