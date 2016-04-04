"use strict";
var utils_1 = require('../../utils');
function Input(bindingPropertyName) {
    return function (target, propertyKey) {
        utils_1.annotate(target.constructor, "inputs." + propertyKey, bindingPropertyName || propertyKey);
    };
}
exports.Input = Input;
