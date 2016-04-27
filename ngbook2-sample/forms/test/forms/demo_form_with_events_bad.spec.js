System.register(['angular2/testing', 'angular2/testing_internal', 'angular2/platform/browser', 'angular2/common', '../../app/ts/forms/demo_form_with_events'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_internal_1, browser_1, common_1, demo_form_with_events_1;
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
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (demo_form_with_events_1_1) {
                demo_form_with_events_1 = demo_form_with_events_1_1;
            }],
        execute: function() {
            testing_1.describe('DemoFormWithEvents (bad)', function () {
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
                testing_1.beforeEachProviders(function () {
                    return [common_1.FormBuilder];
                });
                testing_1.it('validates and trigger events', testing_1.inject([testing_1.TestComponentBuilder], testing_1.fakeAsync(function (tcb) {
                    tcb.createAsync(demo_form_with_events_1.DemoFormWithEvents).then(function (fixture) {
                        var el = fixture.debugElement.nativeElement;
                        var input = fixture.debugElement.query(browser_1.By.css("input")).nativeElement;
                        var form = fixture.debugElement.query(browser_1.By.css("form")).nativeElement;
                        fixture.detectChanges();
                        input.value = '';
                        testing_internal_1.dispatchEvent(input, 'input');
                        fixture.detectChanges();
                        testing_1.tick();
                        // no value on sku field, all error messages are displayed
                        var msgs = el.querySelectorAll('.ui.error.message');
                        testing_1.expect(msgs[0]).toHaveText('SKU is invalid');
                        testing_1.expect(msgs[1]).toHaveText('SKU is required');
                        // displays no errors when sku has a value
                        input.value = 'XYZ';
                        testing_internal_1.dispatchEvent(input, 'input');
                        fixture.detectChanges();
                        testing_1.tick();
                        msgs = el.querySelectorAll('.ui.error.message');
                        testing_1.expect(msgs.length).toEqual(0);
                        fixture.detectChanges();
                        testing_internal_1.dispatchEvent(form, 'submit');
                        testing_1.tick();
                        // checks for the form submitted message
                        testing_1.expect(fakeConsole._logs).toContain('you submitted value: XYZ');
                    });
                })));
            });
        }
    }
});
//# sourceMappingURL=demo_form_with_events_bad.spec.js.map