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
    var DemoFormWithEvents;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DemoFormWithEvents = (function () {
                function DemoFormWithEvents(fb) {
                    this.myForm = fb.group({
                        'sku': ['', common_1.Validators.required]
                    });
                    this.sku = this.myForm.controls['sku'];
                    this.sku.valueChanges.subscribe(function (value) {
                        console.log('sku changed to:', value);
                    });
                    this.myForm.valueChanges.subscribe(function (form) {
                        console.log('form changed to:', form);
                    });
                }
                DemoFormWithEvents.prototype.onSubmit = function (form) {
                    console.log('you submitted value:', form.sku);
                };
                DemoFormWithEvents = __decorate([
                    core_1.Component({
                        selector: 'demo-form-with-events',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: with events</h2>\n    <form [ngFormModel]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\"\n          [class.error]=\"!sku.valid && sku.touched\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\"\n               class=\"form-control\"\n               id=\"skuInput\"\n               placeholder=\"SKU\"\n               [ngFormControl]=\"sku\">\n         <div *ngIf=\"!sku.valid\"\n           class=\"ui error message\">SKU is invalid</div>\n         <div *ngIf=\"sku.hasError('required')\"\n           class=\"ui error message\">SKU is required</div>\n      </div>\n\n      <div *ngIf=\"!myForm.valid\"\n        class=\"ui error message\">Form is invalid</div>\n\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DemoFormWithEvents);
                return DemoFormWithEvents;
            }());
            exports_1("DemoFormWithEvents", DemoFormWithEvents);
        }
    }
});
//# sourceMappingURL=demo_form_with_events.js.map