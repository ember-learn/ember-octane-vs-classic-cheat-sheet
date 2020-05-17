import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | guide-section/subsection', function(hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us', {
    '': {
      '': {
        title: 'Warning: Subsection title not found',
        description: 'Warning: Subsection description not found'
      }
    }
  });


  test('can render when no arguments are passed', async function(assert) {
    await render(hbs`
      <GuideSection::Subsection />
    `);

    assert.dom('[data-test-field="Subsection Title"]')
      .hasText('Warning: Subsection title not found');

    assert.dom('[data-test-field="Subsection Description"]')
      .hasText('Warning: Subsection description not found');

    const emberClassic = this.element.querySelector('[data-test-ember-classic]');

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 0 });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 0 });
    assert.dom('[data-test-general-text]', emberOctane).exists({ count: 0 });
  });


  test('should render (1)', async function(assert) {
    this.sectionId = 'generating-files';
    this.subsection = {
      id: 'generating-component',
      classicFiles: [
        'classic.shell'
      ],
      octaneFiles: [
        'octane.shell'
      ]
    };

    await render(hbs`
      <GuideSection::Subsection
        @sectionId={{this.sectionId}}
        @subsection={{this.subsection}}
      />
    `);

    assert.dom('[data-test-field="Subsection Title"]')
      .hasText('Use an option to generate a component\'s JavaScript');

    assert.dom('[data-test-field="Subsection Description"]')
      .includesText('In classic Ember, "ember generate component" created three files');

    const emberClassic = this.element.querySelector('[data-test-ember-classic]');

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 1 });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 1 });
    assert.dom('[data-test-general-text]', emberOctane).exists({ count: 0 });
  });


  test('should render (2)', async function(assert) {
    this.sectionId = 'component-properties';
    this.subsection = {
      id: 'ddau',
      classicFiles: [
        'classic-parent.js',
        'classic-parent.hbs',
        'classic-child.js',
        'classic-child.hbs'
      ],
      octaneFiles: [
        'octane-parent.js',
        'octane-parent.hbs',
        'octane-child.hbs',
      ]
    };

    await render(hbs`
      <GuideSection::Subsection
        @sectionId={{this.sectionId}}
        @subsection={{this.subsection}}
      />
    `);

    assert.dom('[data-test-field="Subsection Title"]')
      .hasText('Data Down, Actions Up');

    assert.dom('[data-test-field="Subsection Description"]')
      .includesText('Octane components enforce "Data Down, Actions Up."');

    const emberClassic = this.element.querySelector('[data-test-ember-classic]');

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 4 });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 3 });
    assert.dom('[data-test-general-text]', emberOctane).exists({ count: 0 });
  });


  test('should render (3)', async function(assert) {
    this.sectionId = 'actions';
    this.subsection = {
      id: 'mixins',
      classicFiles: [
        'classic.js'
      ],
      octaneDescriptionKey: 'actions.mixins.octaneDescription'
    };

    await render(hbs`
      <GuideSection::Subsection
        @sectionId={{this.sectionId}}
        @subsection={{this.subsection}}
      />
    `);

    assert.dom('[data-test-field="Subsection Title"]')
      .hasText('Mixins');

    assert.dom('[data-test-field="Subsection Description"]')
      .includesText('You cannot use mixins on anything that uses Native Class syntax');

    const emberClassic = this.element.querySelector('[data-test-ember-classic]');

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 1 });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 0 });
    assert.dom('[data-test-general-text]', emberOctane).exists({ count: 1 });
    assert.dom('[data-test-general-text]', emberOctane)
      .includesText('See Do you need Ember Object? for Mixin alternatives,');
  });
});