"use strict";
var utils_1 = require('../../utils');
function Component(component) {
    return function (target) {
        utils_1.annotate(target, 'component', component);
    };
}
exports.Component = Component;
