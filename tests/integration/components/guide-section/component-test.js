import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | guide-section', function(hooks) {
    setupRenderingTest(hooks);
    setupIntl(hooks, 'en-us', {
        '': {
            title: 'Warning: Section title not found'
        }
    });


    test('can render when no arguments are passed', async function(assert) {
        await render(hbs`
            <GuideSection />
        `);

        assert.dom('[data-test-field="Section Title"]')
            .includesText('Warning: Section title not found');

        assert.dom('[data-test-subsection]').exists({ count: 0 });
    });


    test('should render', async function(assert) {
        this.section = {
            id: 'actions',
            subsections: [
                {
                    id: 'actions',
                    classicFiles: [
                        'classic.js',
                        'classic.handlebars'
                    ],
                    octaneFiles: [
                        'octane.js',
                        'octane.handlebars'
                    ]
                },
                {
                    id: 'template-arguments-default',
                    classicFiles: [
                        'classic.handlebars',
                        'classic.js'
                    ],
                    octaneFiles: [
                        'octane.handlebars',
                        'octane.js'
                    ]
                },
                {
                    id: 'mixins',
                    classicFiles: [
                        'classic.js'
                    ],
                    octaneDescriptionKey: 'actions.mixins.octaneDescription'
                }
            ]
        };

        await render(hbs`
            <GuideSection
                @section={{this.section}}
            />
        `);

        assert.dom('[data-test-field="Section Title"]')
            .includesText('Actions');

        assert.dom('[data-test-subsection]').exists({ count: 3 });
        assert.dom('[data-test-code-snippet]').exists({ count: 9 });
        assert.dom('[data-test-general-text]').exists({ count: 1 });
    });
});