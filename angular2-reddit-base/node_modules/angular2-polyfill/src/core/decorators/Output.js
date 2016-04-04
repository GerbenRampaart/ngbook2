"use strict";
var utils_1 = require('../../utils');
function Output(bindingPropertyName) {
    return function (target, propertyKey) {
        utils_1.annotate(target.constructor, "outputs." + propertyKey, bindingPropertyName || propertyKey);
    };
}
exports.Output = Output;
