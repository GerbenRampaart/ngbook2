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
    var OnInitCmp, LifecycleSampleApp1;
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
            LifecycleSampleApp1 = (function () {
                function LifecycleSampleApp1() {
                    this.display = true;
                }
                LifecycleSampleApp1.prototype.toggle = function () {
                    this.display = !this.display;
                };
                LifecycleSampleApp1 = __decorate([
                    core_1.Component({
                        selector: 'lifecycle-sample-app',
                        directives: [OnInitCmp],
                        template: "\n  <h4 class=\"ui horizontal divider header\">\n    OnInit and OnDestroy\n  </h4>\n\n  <button class=\"ui primary button\" (click)=\"toggle()\">\n    Toggle\n  </button>\n  <on-init *ngIf=\"display\"></on-init>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LifecycleSampleApp1);
                return LifecycleSampleApp1;
            }());
            exports_1("LifecycleSampleApp1", LifecycleSampleApp1);
        }
    }
});
//# sourceMappingURL=lifecycle_01.js.map