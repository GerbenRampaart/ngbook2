System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var OnInitCmp, OnChangeCmp, LifecycleSampleApp2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OnInitCmp = (function () {
                function OnInitCmp() {
                }
                OnInitCmp.prototype.ngOnInit = function () {
                    console.log('On init');
                };
                OnInitCmp.prototype.ngOnDestroy = function () {
                    console.log('On destroy');
                };
                OnInitCmp = __decorate([
                    core_1.Component({
                        selector: 'on-init',
                        template: "\n  <div class=\"ui label\">\n    <i class=\"cubes icon\"></i> Init/Destroy\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnInitCmp);
                return OnInitCmp;
            }());
            OnChangeCmp = (function () {
                function OnChangeCmp() {
                }
                OnChangeCmp.prototype.ngOnChanges = function (changes) {
                    console.log('Changes', changes);
                };
                __decorate([
                    core_1.Input('name'), 
                    __metadata('design:type', String)
                ], OnChangeCmp.prototype, "name", void 0);
                __decorate([
                    core_1.Input('comment'), 
                    __metadata('design:type', String)
                ], OnChangeCmp.prototype, "comment", void 0);
                OnChangeCmp = __decorate([
                    core_1.Component({
                        selector: 'on-change',
                        inputs: ['name', 'comment'],
                        template: "\n  <div class=\"ui comments\">\n    <div class=\"comment\">\n      <a class=\"avatar\">\n        <img src=\"app/images/avatars/matt.jpg\">\n      </a>\n      <div class=\"content\">\n        <a class=\"author\">{{name}}</a>\n        <div class=\"text\">\n          {{comment}}\n        </div>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnChangeCmp);
                return OnChangeCmp;
            }());
            LifecycleSampleApp2 = (function () {
                function LifecycleSampleApp2() {
                    this.display = true;
                    this.name = 'Felipe Coury';
                    this.comment = 'I am learning so much!';
                }
                LifecycleSampleApp2.prototype.setValues = function (namefld, commentfld) {
                    this.name = namefld.value;
                    this.comment = commentfld.value;
                };
                LifecycleSampleApp2.prototype.toggle = function () {
                    this.display = !this.display;
                };
                LifecycleSampleApp2 = __decorate([
                    core_1.Component({
                        selector: 'lifecycle-sample-app',
                        directives: [OnInitCmp, OnChangeCmp],
                        template: "\n  <h4 class=\"ui horizontal divider header\">\n    OnInit and OnDestroy\n  </h4>\n\n  <button class=\"ui primary button\" (click)=\"toggle()\">\n    Toggle\n  </button>\n  <on-init *ngIf=\"display\"></on-init>\n\n  <h4 class=\"ui horizontal divider header\">\n    OnChange\n  </h4>\n\n  <div class=\"ui form\">\n    <div class=\"field\">\n      <label>Name</label>\n      <input type=\"text\" #namefld value=\"{{name}}\"\n             (keyup)=\"setValues(namefld, commentfld)\">\n    </div>\n\n    <div class=\"field\">\n      <label>Comment</label>\n      <textarea (keyup)=\"setValues(namefld, commentfld)\"\n                rows=\"2\" #commentfld>{{comment}}</textarea>\n    </div>\n  </div>\n\n  <on-change [name]=\"name\" [comment]=\"comment\"></on-change>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LifecycleSampleApp2);
                return LifecycleSampleApp2;
            }());
            exports_1("LifecycleSampleApp2", LifecycleSampleApp2);
        }
    }
});
//# sourceMappingURL=lifecycle_02.js.map