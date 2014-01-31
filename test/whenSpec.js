var assert = require('assert'),
  when = require('../');

describe('when', function () {
    when(true).it('should be executed', function () {
        assert.ok(true);
    });

    when(false).it('should not be executed', function () {
      assert.ok(false);
    });
});
