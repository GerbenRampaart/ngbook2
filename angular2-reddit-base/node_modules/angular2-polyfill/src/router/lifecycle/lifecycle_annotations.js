"use strict";
var utils_1 = require('../../utils');
function CanActivate(hook) {
    return function (target) {
        utils_1.annotate(target, 'router.canActivate', hook);
    };
}
exports.CanActivate = CanActivate;
