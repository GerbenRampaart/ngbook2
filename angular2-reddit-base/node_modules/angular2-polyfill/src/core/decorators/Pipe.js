"use strict";
var utils_1 = require('../../utils');
function Pipe(pipe) {
    return function (target) {
        utils_1.annotate(target, 'pipe', pipe);
    };
}
exports.Pipe = Pipe;
