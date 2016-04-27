System.register(['angular2/testing', 'angular2/common', '../../app/ts/forms/demo_form_ng_model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, common_1, demo_form_ng_model_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (demo_form_ng_model_1_1) {
                demo_form_ng_model_1 = demo_form_ng_model_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [common_1.FormBuilder]; });
            testing_1.describe('DemoFormNgModel', function () {
                testing_1.it('requires product name', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(demo_form_ng_model_1.DemoFormNgModel).then(function (fixture) {
                        var comp = fixture.debugElement.componentInstance;
                        var el = fixture.debugElement.nativeElement;
                        // error message is displayed when product name is empty
                        comp.productName = '';
                        fixture.detectChanges();
                        testing_1.expect(el.querySelector('.ui.error.message')).toHaveText('Form is invalid');
                        // error message is not present when product name has a value
                        comp.productName = 'something';
                        fixture.detectChanges();
                        testing_1.expect(el.querySelector('.ui.error.message')).toBeNull();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=demo_form_ng_model.spec.js.map