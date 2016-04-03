"use strict";
var utils_1 = require('../../utils');
function Injectable() {
    return function (target) {
        utils_1.annotate(target, 'injectable', true);
    };
}
exports.Injectable = Injectable;
