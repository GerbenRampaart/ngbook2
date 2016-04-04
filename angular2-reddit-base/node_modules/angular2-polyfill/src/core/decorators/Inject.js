"use strict";
function Inject(token) {
    return function (target, propertyKey, parameterIndex) {
        if (!target.__annotations__) {
            target.__annotations__ = {};
        }
        if (!target.__annotations__.inject) {
            target.__annotations__.inject = [];
        }
        target.__annotations__.inject[parameterIndex] = token;
    };
}
exports.Inject = Inject;
