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
                            'classic.handlebars'
                        ],
                        octaneFiles: [
                            'octane.handlebars'
                        ]
                    },
                    {
                        id: 'inline-vs-block',
                        classicFiles: [
                            'classic.handlebars'
                        ],
                        octaneFiles: [
                            'octane.handlebars'
                        ]
                    },
                    {
                        id: 'angle-brackets-nested',
                        classicFiles: [
                            'classic.handlebars'
                        ],
                        octaneFiles: [
                            'octane.handlebars'
                        ]
                    },
                    {
                        id: 'template-named',
                        classicFiles: [
                            'classic.handlebars'
                        ],
                        octaneFiles: [
                            'octane.handlebars'
                        ]
                    },
                    {
                        id: 'template-this',
                        classicFiles: [
                            'classic.handlebars'
                        ],
                        octaneFiles: [
                            'octane.handlebars'
                        ]
                    },
                    {
                        id: 'template-arguments-named',
                        classicFiles: [
                            'classic.handlebars'
                        ],
                        octaneFiles: [
                            'octane.handlebars'
                        ]
                    },
                    {
                        id: 'template-arguments-this',
                        classicFiles: [
                            'classic.handlebars'
                        ],
                        octaneFiles: [
                            'octane.handlebars'
                        ]
                    },
                    {
                        id: 'tag-name',
                        classicFiles: [
                            'classic.handlebars',
                            'classic.html'
                        ],
                        octaneFiles: [
                            'octane.handlebars',
                            'octane.html'
                        ]
                    },
                    {
                        id: 'element-id',
                        classicFiles: [
                            'classic.js',
                            'classic.handlebars'
                        ],
                        octaneFiles: [
                            'octane.js',
                            'octane.handlebars'
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
                            'classic-parent.handlebars',
                            'classic-child.js',
                            'classic-child.handlebars'
                        ],
                        octaneFiles: [
                            'octane-parent.js',
                            'octane-parent.handlebars',
                            'octane-child.handlebars',
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
                            'classic.handlebars',
                            'classic.js'
                        ],
                        octaneFiles: [
                            'octane.handlebars',
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
                    }
                ]
            },
            {
                id: 'routes',
                subsections: [
                    {
                        id: 'model-access',
                        classicFiles: [
                            'classic.handlebars'
                        ],
                        octaneFiles: [
                            'octane.handlebars'
                        ]
                    }
                ]
            }
        ];
    }
}
