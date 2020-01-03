# How to Contribute

Contributions are welcome!

**You can easily make changes** because we follow a naming convention.

Advanced strategies should be PR'ed directly to the [Ember.js Guides](https://github.com/ember-learn/guides-source/pulls), since a goal of this project is to be short and sweet.


## Running Locally

This is an Ember app, so the usual steps follow:

1. Clone this repo.
    ```bash
    git clone git@github.com:ember-learn/ember-octane-vs-classic-cheat-sheet.git
    ```
1. Change directory.
    ```bash
    cd ember-octane-vs-classic-cheat-sheet
    ```
1. Install packages.
    ```bash
    npm install
    ```
1. Run the app.
    ```bash
    ember serve
    ```
1. Visit your app at [http://localhost:4200](http://localhost:4200).


## Deploying

This site is deployed to [GitHub Pages](https://pages.github.com/) automatically from the `master` branch.


## How It's Made

### 1. Model hook

First, Have a look at `app/routes/application.js`.

The `model` hook returns an array of `section` objects. Each section can further define an array of `subsection` objects.

**We use sections and subsections to organize this guide.**

### 2. Ember Intl

Next, We want to explain to the reader what a section or subsection is about.

We store titles and descriptions in `translations/en-us.yaml`. A description can contain HTML elements like hyperlinks.

**The translation keys match the section and subsection IDs.**

### 3. Ember Code Snippet

Finally, we want to show code examples to the reader.

We store code snippets in `snippets` folder. Afterwards, we update the `model` hook by listing the files.

**Subfolder names match the subsection IDs.**


## How It's Made (Recap)

You can find the text in `translations/en-us.yaml`, the code in `snippets`, and the app structure in `app/routes/application.js`! 💖