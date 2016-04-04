"use strict";
var utils_1 = require('../../utils');
function RouteConfig(routes) {
    return function (target) {
        utils_1.annotate(target, 'routes', routes);
    };
}
exports.RouteConfig = RouteConfig;
