import { visit } from '@ember/test-helpers';
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
});
