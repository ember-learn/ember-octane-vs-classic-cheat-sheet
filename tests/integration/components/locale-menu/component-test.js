import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | locale-menu', function(hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks);


  test('renders options for supported locales', async function(assert) {
    await render(hbs`
      <LocaleMenu />
    `);

    assert.dom('[data-test-field="Locale"]')
      .hasValue('', 'The default option is selected.')

    assert.dom('[data-test-option]')
      .exists({ count: 5 }, 'There are 5 non-default options.');
  });


  test('allows the user to update the site locale', async function(assert) {
    await render(hbs`
      <LocaleMenu />
    `);

    await fillIn('[data-test-field="Locale"]', 'pt-BR');

    assert.strictEqual(
      this.intl.primaryLocale,
      'pt-br',
      'The site locale is pt-BR.'
    );

    await fillIn('[data-test-field="Locale"]', 'fr-FR');

    assert.strictEqual(
      this.intl.primaryLocale,
      'fr-fr',
      'The site locale is fr-FR.'
    );
  });
});
