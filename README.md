[![Dependencies](https://david-dm.org/lo1tuma/mocha-bdd-when.png)](https://david-dm.org/lo1tuma/mocha-bdd-when)
[![devDependencies](https://david-dm.org/lo1tuma/mocha-bdd-when/dev-status.png)](https://david-dm.org/lo1tuma/mocha-bdd-when#info=devDependencies)

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
