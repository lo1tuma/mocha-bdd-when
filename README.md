[![Build Status](https://travis-ci.org/lo1tuma/mocha-bdd-when.png?branch=master)](https://travis-ci.org/lo1tuma/mocha-bdd-when)
[![Dependencies](https://david-dm.org/lo1tuma/mocha-bdd-when.png)](https://david-dm.org/lo1tuma/mocha-bdd-when)
[![devDependencies](https://david-dm.org/lo1tuma/mocha-bdd-when/dev-status.png)](https://david-dm.org/lo1tuma/mocha-bdd-when#info=devDependencies)
[![NPM version](https://badge.fury.io/js/mocha-bdd-when.png)](http://badge.fury.io/js/mocha-bdd-when)

mocha-bdd-when
=============
Allows to execute tests conditionally

How to use
------------
```js
var when = require('mocha-bdd-when');

when(true).describe('Test Suite', function () {
    when(false).it('should do something', function () {
        // ...
    });
});
```
