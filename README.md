[![NPM Version](https://img.shields.io/npm/v/mocha-bdd-when.svg?style=flat)](https://www.npmjs.org/package/mocha-bdd-when) [![Build Status](https://img.shields.io/travis/lo1tuma/mocha-bdd-when/master.svg?style=flat)](https://travis-ci.org/lo1tuma/mocha-bdd-when) [![devDependencies](https://img.shields.io/david/dev/lo1tuma/mocha-bdd-when.svg?style=flat)](https://david-dm.org/lo1tuma/mocha-bdd-when)

-----

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
