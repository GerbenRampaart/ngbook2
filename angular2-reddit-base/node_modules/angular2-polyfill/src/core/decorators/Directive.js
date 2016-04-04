"use strict";
var utils_1 = require('../../utils');
function Directive(options) {
    return function (target) {
        utils_1.annotate(target, 'directive', options);
    };
}
exports.Directive = Directive;
