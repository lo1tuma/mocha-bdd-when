[![NPM Version](https://img.shields.io/npm/v/mocha-bdd-when.svg?style=flat)](https://www.npmjs.org/package/mocha-bdd-when) [![Build Status](https://img.shields.io/travis/lo1tuma/mocha-bdd-when/master.svg?style=flat)](https://travis-ci.org/lo1tuma/mocha-bdd-when) [![devDependencies](https://img.shields.io/david/dev/lo1tuma/mocha-bdd-when.svg?style=flat)](https://david-dm.org/lo1tuma/mocha-bdd-when)

# mocha-bdd-when

> Allows to execute tests conditionally

## How to use

```js
var when = require('mocha-bdd-when');

when(true).describe('Test Suite', function () {
    when(false).it('should do something', function () {
        // ...
    });
});
```


## Advanced example

Consider you are writing a test for an isomorphic module that runs on the server and the client.
It would be a good idea to run the unit tests of such an isomorphic module in every environment it is supposed to be executed in.

In an isomorphic module there might exist some code that gets triggered only on the client and is ignored on the server.
This could be an event handler which gets triggered in the browser after a click event was triggered.
It would be hard and not very useful to trigger a click event in the node environment. So you want to run this specific test case only in the browser.

```js
var when = require('mocha-bdd-when'),
    runInBrowser = typeof window !== 'undefined';

describe('isomorphic module', function () {

    when(runInBrowser).it('should do something when a button is clicked' function () {
        // trigger a click event
        // assert that something happened after the click
    });

    it('should work in every environment', function () {
        // assert some environment agnostic logic
    });

});
```
