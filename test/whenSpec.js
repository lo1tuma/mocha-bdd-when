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

when(false).describe('conditional describe', function () {
    it('should be skipped', function () {
        assert.ok(false);
    });

    it('should be skipped too', function () {
        assert.ok(false);
    });
});

when(true).describe('another conditional describe', function () {
    it('should not be skipped', function () {
        assert.ok(true);
    });
});
