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
