System.register(['angular2/testing', 'angular2/common', '../../app/ts/forms/demo_form_sku_with_builder'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, common_1, demo_form_sku_with_builder_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (demo_form_sku_with_builder_1_1) {
                demo_form_sku_with_builder_1 = demo_form_sku_with_builder_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () {
                return [common_1.FormBuilder];
            });
            testing_1.describe('DemoFormSkuBuilder', function () {
                testing_1.it('initializes sku', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(demo_form_sku_with_builder_1.DemoFormSkuBuilder).then(function (fixture) {
                        var comp = fixture.debugElement.componentInstance;
                        var el = fixture.debugElement.nativeElement;
                        fixture.detectChanges();
                        // checks SKU on myForm
                        testing_1.expect(comp.myForm.controls.sku.value).toEqual('ABC123');
                        // checks SKU on the input element
                        testing_1.expect(el.querySelector('form input').value).toEqual('ABC123');
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=demo_form_sku_with_builder.spec.js.map