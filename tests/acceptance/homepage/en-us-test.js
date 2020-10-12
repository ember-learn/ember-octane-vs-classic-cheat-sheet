import { visit, fillIn, settled } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { setupIntl } from 'ember-intl/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | Homepage | en-US', function(hooks) {
  setupApplicationTest(hooks);
  setupIntl(hooks, 'en-us');


  test('Percy snapshot', async function(assert) {
    await visit('/');
    await percySnapshot(assert);

    assert.ok(true);
  });


  test('We set the correct lang attribute in <html> element', async function(assert) {
    await visit('/');

    assert.dom(document.querySelector('html'))
      .hasAttribute('lang', 'en-us', 'We set the correct lang attribute.');
  });

  test('We can change the display language', async function(assert) {
    await visit('/');
    assert.dom(document.querySelector('#generating-files'))
      .hasText('§ Generating Files');

    await fillIn(document.querySelector('select[data-test-field="Locale"]'), 'pt-BR');
    assert.dom(document.querySelector('#generating-files'))
      .hasText('§ Geração de arquivos');

    await fillIn(document.querySelector('select[data-test-field="Locale"]'), '');
    assert.dom(document.querySelector('#generating-files'))
      .hasText('§ Geração de arquivos');

    await fillIn(document.querySelector('select[data-test-field="Locale"]'), 'fr-FR');
    assert.dom(document.querySelector('#generating-files'))
      .hasText('§ Génération de fichiers');
  });
});
