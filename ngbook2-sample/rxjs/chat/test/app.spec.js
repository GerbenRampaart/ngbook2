System.register(['angular2/testing', 'calculator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, calculator_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (calculator_1_1) {
                calculator_1 = calculator_1_1;
            }],
        execute: function() {
            testing_1.describe('Hello', function () {
                testing_1.it('should test', function () {
                    // let m = MessagesService;
                });
                testing_1.it('should add', function () {
                    var c = new calculator_1.Calculator();
                    testing_1.expect(true).toBe(true);
                    testing_1.expect(c.add(1, 2)).toBe(3);
                });
            });
        }
    }
});
//# sourceMappingURL=app.spec.js.map