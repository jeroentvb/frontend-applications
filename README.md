# Risico taxatie

This project calculates the risk a child has to be put out of their home to live somewhere else. It uses [ember.js](https://www.emberjs.com/).  
My process can be found [here](process.md)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/) 
* A browser 🌍

## Installation

* `git clone <repository-url>` this repository
* `cd risico-taxatie`
* `npm install`  
If you are running into errors while installing on windows, you may need to run the following commands
```
npm config set user 0
npm config set unsafe-perm true
```
You may also need to run `chmod 777` in the .nvm folder in your root directory. This gives npm rights to read and write there.

## Running / Development

* `ember serve` or `ember s` if you are lazy
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
