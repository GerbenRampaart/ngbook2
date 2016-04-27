System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var DemoFormNgModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DemoFormNgModel = (function () {
                function DemoFormNgModel(fb) {
                    this.myForm = fb.group({
                        'productName': ['', common_1.Validators.required]
                    });
                }
                DemoFormNgModel.prototype.onSubmit = function (value) {
                    console.log('you submitted value: ', value);
                };
                DemoFormNgModel = __decorate([
                    core_1.Component({
                        selector: 'demo-form-ng-model',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: with ng-model</h2>\n\n    <div class=\"ui info message\">\n      The product name is: {{productName}}\n    </div>\n\n    <form [ngFormModel]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\">\n        <label for=\"productNameInput\">Product Name</label>\n        <input type=\"text\"\n               id=\"productNameInput\"\n               placeholder=\"Product Name\"\n               [ngFormControl]=\"myForm.find('productName')\"\n               [(ngModel)]=\"productName\">\n      </div>\n\n      <div *ngIf=\"!myForm.valid\"\n        class=\"ui error message\">Form is invalid</div>\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DemoFormNgModel);
                return DemoFormNgModel;
            }());
            exports_1("DemoFormNgModel", DemoFormNgModel);
        }
    }
});
//# sourceMappingURL=demo_form_ng_model.js.map