# Ember Octane vs Classic Cheat Sheet

See side-by-side examples of Classic Ember vs [Octane Edition](https://emberjs.com/editions).

This uses [Prism](https://prismjs.com/) code hightlighting with the [file highlight](https://prismjs.com/plugins/file-highlight/) plugin.

Inspired by [YouMightNotNeedJQuery](http://youmightnotneedjquery.com/).

## Running locally

This is a vanilla JavaScript application. You must serve the files locally in order for the JavaScript and CSS to load in the browser. For example:

```
npm install http-server -g
http-server .
```

Visit http://localhost:8080 to see the results.
If you make changes, restart the server.
You might have to clear the cache to see your changes. (In Chrome, open the dev tools, then right click on the browser's main refresh arrow and choose Empty Cache and Hard Reload, or configure your dev tools to not keep a cache in the first place.)

## Contributing

Contributions are welcome!
Simple examples can be added to this cheat sheet.
Copy and paste a `<section>` block in `index.html`.
Create the code sample files in the `code` directory, change the `data` tag of the `<pre>`, and you're done!
Try to follow the same file naming scheme as is used elsewhere, and make sure to name any `.hbs` files `.handlebars` instead or the formatting won't get applied.

Advanced strategies should be PR'd directly to the [Ember.js Guides](https://github.com/ember-learn/guides-source/pulls), since the goal of this project is to keep it as short and sweet as possible.

## Deploying

This site is deployed to [GitHub Pages](https://pages.github.com/) automatically from the `master` branch.

