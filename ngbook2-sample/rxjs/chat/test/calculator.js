System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Calculator;
    return {
        setters:[],
        execute: function() {
            Calculator = (function () {
                function Calculator() {
                }
                Calculator.prototype.add = function (op1, op2) {
                    return op1 + op2;
                };
                Calculator.prototype.subtract = function (op1, op2) {
                    return op1 - op2;
                };
                return Calculator;
            }());
            exports_1("Calculator", Calculator);
        }
    }
});
//# sourceMappingURL=calculator.js.map