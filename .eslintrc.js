module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    plugins: [
        'ember'
    ],
    extends: [
        'eslint:recommended',
        'plugin:ember/recommended'
    ],
    env: {
        browser: true
    },
    rules: {
        'ember/no-jquery': 'error',

        // AirBnB style
        'array-bracket-spacing': [
            'error',
            'never',
            {
                'arraysInArrays': false,
                'objectsInArrays': false
            }
        ],
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true
            }
        ],
        'comma-spacing': [
            'error', {
                'before': false,
                'after': true
            }
        ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'max-len': [
            'error',
            {
                code: 160,
                comments: 160,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        'no-mixed-spaces-and-tabs': ['error'],
        'no-multi-spaces': [
            'error', {
                'exceptions': {
                    'Property': true
                }
            }
        ],
        'no-tabs': ['error'],
        'no-trailing-spaces': ['error'],
        'no-var': ['error'],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'one-var': [
            'error',
            'never'
        ],
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        'require-yield': 0,
        'semi': [
            'error',
            'always'
        ],
        'space-before-blocks': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'space-infix-ops': ['error']
    },
    overrides: [
        // node files
        {
            files: [
                '.eslintrc.js',
                '.template-lintrc.js',
                'ember-cli-build.js',
                'testem.js',
                'blueprints/*/index.js',
                'config/**/*.js',
                'lib/*/index.js',
                'server/**/*.js'
            ],
            parserOptions: {
                sourceType: 'script'
            },
            env: {
                browser: false,
                node: true
            },
            plugins: ['node'],
            rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
                // add your custom rules and overrides for node files here

                // this can be removed once the following is fixed
                // https://github.com/mysticatea/eslint-plugin-node/issues/77
                'node/no-unpublished-require': 'off'
            })
        }
    ]
};
