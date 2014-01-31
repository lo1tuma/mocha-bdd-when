module.exports = function (condition) {
    'use strict';
    return {
        it: function (testName, testFunction) {
            if (condition) {
                return it(testName, testFunction);
            }
            return it.skip(testName);
        },
        describe: function (testName, testFunction) {
            if (condition) {
                 return describe(testName, testFunction);
            }
            return describe.skip(testName);
        }
    };
};
