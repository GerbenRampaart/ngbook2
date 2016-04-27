System.register(['angular2/core', 'angular2/platform/browser', './forms/demo_form_sku', './forms/demo_form_sku_with_builder', './forms/demo_form_with_validations_shorthand', './forms/demo_form_with_validations_explicit', './forms/demo_form_with_custom_validations', './forms/demo_form_with_events', './forms/demo_form_ng_model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, demo_form_sku_1, demo_form_sku_with_builder_1, demo_form_with_validations_shorthand_1, demo_form_with_validations_explicit_1, demo_form_with_custom_validations_1, demo_form_with_events_1, demo_form_ng_model_1;
    var FormsDemoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demo_form_sku_1_1) {
                demo_form_sku_1 = demo_form_sku_1_1;
            },
            function (demo_form_sku_with_builder_1_1) {
                demo_form_sku_with_builder_1 = demo_form_sku_with_builder_1_1;
            },
            function (demo_form_with_validations_shorthand_1_1) {
                demo_form_with_validations_shorthand_1 = demo_form_with_validations_shorthand_1_1;
            },
            function (demo_form_with_validations_explicit_1_1) {
                demo_form_with_validations_explicit_1 = demo_form_with_validations_explicit_1_1;
            },
            function (demo_form_with_custom_validations_1_1) {
                demo_form_with_custom_validations_1 = demo_form_with_custom_validations_1_1;
            },
            function (demo_form_with_events_1_1) {
                demo_form_with_events_1 = demo_form_with_events_1_1;
            },
            function (demo_form_ng_model_1_1) {
                demo_form_ng_model_1 = demo_form_ng_model_1_1;
            }],
        execute: function() {
            /*
             * We're using Webpack to load our CSS which is why we use `require` instead of
             * `import` here
             */
            require('../css/styles.css');
            require('../css/semantic.min.css');
            require('../images/ng-book-2-minibook.png');
            require('../images/favicon-32x32.png');
            require('../images/favicon.ico');
            /*
             * Webpack
             */
            FormsDemoApp = (function () {
                function FormsDemoApp() {
                }
                FormsDemoApp = __decorate([
                    core_1.Component({
                        selector: 'forms-demo-app',
                        directives: [demo_form_sku_1.DemoFormSku,
                            demo_form_sku_with_builder_1.DemoFormSkuBuilder,
                            demo_form_with_validations_shorthand_1.DemoFormWithValidationsShorthand,
                            demo_form_with_validations_explicit_1.DemoFormWithValidationsExplicit,
                            demo_form_with_custom_validations_1.DemoFormWithCustomValidations,
                            demo_form_with_events_1.DemoFormWithEvents,
                            demo_form_ng_model_1.DemoFormNgModel],
                        template: "\n<div>\n  <demo-form-ng-model></demo-form-ng-model>\n  <demo-form-with-events></demo-form-with-events>\n  <demo-form-with-custom-validations></demo-form-with-custom-validations>\n  <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>\n  <demo-form-with-validations-explicit></demo-form-with-validations-explicit>\n  <demo-form-sku-builder></demo-form-sku-builder>\n  <demo-form-sku></demo-form-sku>\n</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormsDemoApp);
                return FormsDemoApp;
            }());
            browser_1.bootstrap(FormsDemoApp);
        }
    }
});
//# sourceMappingURL=app.js.map