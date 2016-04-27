System.register(['angular2/testing', 'angular2/testing_internal', 'angular2/platform/browser', 'angular2/common', '../../app/ts/forms/demo_form_with_validations_explicit'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_internal_1, browser_1, common_1, demo_form_with_validations_explicit_1;
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
            function (demo_form_with_validations_explicit_1_1) {
                demo_form_with_validations_explicit_1 = demo_form_with_validations_explicit_1_1;
            }],
        execute: function() {
            testing_1.describe('DemoFormWithValidationsExplicit', function () {
                var el, input, form;
                testing_1.beforeEachProviders(function () { return [common_1.FormBuilder]; });
                function createComponent(tcb) {
                    return tcb.createAsync(demo_form_with_validations_explicit_1.DemoFormWithValidationsExplicit).then(function (fixture) {
                        el = fixture.debugElement.nativeElement;
                        input = fixture.debugElement.query(browser_1.By.css("input")).nativeElement;
                        form = fixture.debugElement.query(browser_1.By.css("form")).nativeElement;
                        fixture.detectChanges();
                        return fixture;
                    });
                }
                testing_1.it('displays errors with no sku', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return createComponent(tcb).then(function (fixture) {
                        input.value = '';
                        testing_internal_1.dispatchEvent(input, 'input');
                        fixture.detectChanges();
                        var msgs = el.querySelectorAll('.ui.error.message');
                        testing_1.expect(msgs[0]).toHaveText('SKU is invalid');
                        testing_1.expect(msgs[1]).toHaveText('SKU is required');
                    });
                }));
                testing_1.it('displays no errors when sku has a value', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return createComponent(tcb).then(function (fixture) {
                        input.value = 'ABC';
                        testing_internal_1.dispatchEvent(input, 'input');
                        fixture.detectChanges();
                        var msgs = el.querySelectorAll('.ui.error.message');
                        testing_1.expect(msgs.length).toEqual(0);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=demo_form_with_validations_explicit.spec.js.map