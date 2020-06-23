import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [
      {
        id: 'generating-files',
        subsections: [
          {
            id: 'generating-component',
            classicFiles: [
              'classic.shell'
            ],
            octaneFiles: [
              'octane.shell'
            ]
          },
          {
            id: 'file-structure',
            classicFiles: [
              'classic.text'
            ],
            octaneFiles: [
              'octane.text'
            ]
          }
        ]
      },
      {
        id: 'component-templates',
        subsections: [
          {
            id: 'angle-brackets',
            classicFiles: [
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.hbs'
            ]
          },
          {
            id: 'inline-vs-block',
            classicFiles: [
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.hbs'
            ]
          },
          {
            id: 'angle-brackets-nested',
            classicFiles: [
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.hbs'
            ]
          },
          {
            id: 'template-named',
            classicFiles: [
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.hbs'
            ]
          },
          {
            id: 'template-this',
            classicFiles: [
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.hbs'
            ]
          },
          {
            id: 'template-arguments-named',
            classicFiles: [
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.hbs'
            ]
          },
          {
            id: 'template-arguments-this',
            classicFiles: [
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.hbs'
            ]
          },
          {
            id: 'tag-name',
            classicFiles: [
              'classic.hbs',
              'classic.html'
            ],
            octaneFiles: [
              'octane.hbs',
              'octane.html'
            ]
          },
          {
            id: 'element-id',
            classicFiles: [
              'classic.js',
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.js',
              'octane.hbs'
            ]
          }
        ]
      },
      {
        id: 'component-properties',
        subsections: [
          {
            id: 'js-boilerplate',
            classicFiles: [
              'classic.js'
            ],
            octaneFiles: [
              'octane.js'
            ]
          },
          {
            id: 'js-properties',
            classicFiles: [
              'classic.js'
            ],
            octaneFiles: [
              'octane.js'
            ]
          },
          {
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
          },
          {
            id: 'get-and-set',
            classicFiles: [
              'classic.js'
            ],
            octaneFiles: [
              'octane.js'
            ]
          },
          {
            id: 'tracked-vs-cp',
            classicFiles: [
              'classic.js'
            ],
            octaneFiles: [
              'octane.js'
            ]
          },
          {
            id: 'computed-decorator',
            classicFiles: [
              'classic.js'
            ],
            octaneFiles: [
              'octane.js'
            ]
          }
        ]
      },
      {
        id: 'actions',
        subsections: [
          {
            id: 'actions',
            classicFiles: [
              'classic.js',
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.js',
              'octane.hbs'
            ]
          },
          {
            id: 'template-arguments-default',
            classicFiles: [
              'classic.hbs',
              'classic.js'
            ],
            octaneFiles: [
              'octane.hbs',
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
      },
      {
        id: 'component-lifecycle',
        subsections: [
          {
            id: 'constructors',
            classicFiles: [
              'classic.js'
            ],
            octaneFiles: [
              'octane.js'
            ]
          },
          {
            id: 'will-destroy',
            classicFiles: [
              'classic.js'
            ],
            octaneFiles: [
              'octane.js'
            ]
          },
          {
            id: 'render-modifiers',
            classicFiles: [
            ],
            octaneFiles: [
              'octane.shell'
            ]
          },
          {
            id: 'did-insert',
            classicFiles: [
              'classic.hbs',
              'classic.js'
            ],
            octaneFiles: [
              'octane.hbs',
              'octane.js'
            ]
          }
        ]
      },
      {
        id: 'routes',
        subsections: [
          {
            id: 'model-access',
            classicFiles: [
              'classic.hbs'
            ],
            octaneFiles: [
              'octane.hbs'
            ]
          }
        ]
      }
    ];
  }
}
