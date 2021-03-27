'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Theme options are coy, dark, funky, okaidia, solarizedlight, tomorrow,
    // and twilight. Remove the `theme` attribute to use the default theme.
    'ember-prism': {
      theme: 'tomorrow',
      components: [
        'handlebars',
        'markup-templating', // handlebars
        'bash', // shell
      ],
      plugins: ['line-numbers'],
    },

    prember: {
      urls: ['/'],
    },
  });

  return app.toTree();
};
