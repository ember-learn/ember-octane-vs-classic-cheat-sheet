import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

// TODO: There may be a bug in ember-prism v0.7.0.
// 
// Possibly due to its use of classic component and splattributes, I noticed that
// the test selector for <CodeSnippet> appears twice in development and testing
// environments. One on the <pre> tag and another on the <code> tag inside.
//
// Once the bug is fixed and the addon is updated for this app, remove the use of
// `numDuplicates`.
const numDuplicates = 2;

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

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 0 * numDuplicates });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 0 * numDuplicates });
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
      .includesText('In classic Ember, ember generate component created three files');

    const emberClassic = this.element.querySelector('[data-test-ember-classic]');

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 1 * numDuplicates });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 1 * numDuplicates });
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

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 4 * numDuplicates });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 3 * numDuplicates });
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
      .includesText('You cannot use mixins on anything that uses native class syntax');

    const emberClassic = this.element.querySelector('[data-test-ember-classic]');

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 1 * numDuplicates });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 0 * numDuplicates });
    assert.dom('[data-test-general-text]', emberOctane).exists({ count: 1 });
    assert.dom('[data-test-general-text]', emberOctane)
      .includesText('See Do you need Ember Object? for alternatives to mixins');
  });
});