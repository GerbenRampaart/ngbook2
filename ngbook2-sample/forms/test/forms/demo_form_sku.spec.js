System.register(['angular2/testing', 'angular2/testing_internal', 'angular2/platform/browser', '../../app/ts/forms/demo_form_sku'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_internal_1, browser_1, demo_form_sku_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_internal_1_1) {
                testing_internal_1 = testing_internal_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demo_form_sku_1_1) {
                demo_form_sku_1 = demo_form_sku_1_1;
            }],
        execute: function() {
            testing_1.describe('DemoFormSku', function () {
                var _console;
                var fakeConsole;
                var el, input, form;
                beforeEach(function () {
                    // declare a fake console to track all the logs
                    fakeConsole = {};
                    fakeConsole._logs = [];
                    fakeConsole.log = function () {
                        var theArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            theArgs[_i - 0] = arguments[_i];
                        }
                        return fakeConsole._logs.push(theArgs.join(' '));
                    };
                    // replace the real console with our fake version
                    _console = window.console;
                    window.console = fakeConsole;
                });
                // restores the real console
                afterAll(function () { return window.console = _console; });
                function createComponent(tcb) {
                    return tcb.createAsync(demo_form_sku_1.DemoFormSku).then(function (fixture) {
                        el = fixture.debugElement.nativeElement;
                        input = fixture.debugElement.query(browser_1.By.css("input")).nativeElement;
                        form = fixture.debugElement.query(browser_1.By.css("form")).nativeElement;
                        fixture.detectChanges();
                        return fixture;
                    });
                }
                testing_1.it('logs the submitted value', testing_1.inject([testing_1.TestComponentBuilder], testing_1.fakeAsync(function (tcb) {
                    createComponent(tcb).then(function (fixture) {
                        input.value = 'MY-SKU';
                        testing_internal_1.dispatchEvent(input, 'input');
                        fixture.detectChanges();
                        testing_1.tick();
                        fixture.detectChanges();
                        testing_internal_1.dispatchEvent(form, 'submit');
                        testing_1.tick();
                        testing_1.expect(fakeConsole._logs).toContain('you submitted value: [object Object]');
                    });
                })));
            });
        }
    }
});
//# sourceMappingURL=demo_form_sku.spec.js.map