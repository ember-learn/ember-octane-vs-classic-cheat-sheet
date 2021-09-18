import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Component | code-snippet', function (hooks) {
  setupRenderingTest(hooks);

  test('should render a Handlebars file', async function (assert) {
    await render(hbs`
      <CodeSnippet
        @fileName="component-properties/ddau/octane-parent.hbs"
      />
    `);

    assert
      .dom('[data-test-code-snippet]')
      .hasText(
        '{{!-- parent-component.hbs --}} <ChildComponent @plusOne={{this.plusOne}} /> Count: {{this.count}}'
      );
  });

  test('should render a JavaScript file', async function (assert) {
    await render(hbs`
      <CodeSnippet
        @fileName="component-properties/ddau/classic-parent.js"
      />
    `);

    assert
      .dom('[data-test-code-snippet]')
      .hasText(
        "// parent-component.js import Component from '@ember/component'; export default Component.extend({ count: 0 });"
      );
  });

  test('should render a shell file', async function (assert) {
    await render(hbs`
      <CodeSnippet
        @fileName="generating-files/generating-component/classic.shell"
      />
    `);

    assert.dom('[data-test-code-snippet]').hasText('ember generate component my-component');
  });
});
