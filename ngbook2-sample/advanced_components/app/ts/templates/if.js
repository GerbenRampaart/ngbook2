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
    var NgBookIf, IfTemplateSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgBookIf = (function () {
                function NgBookIf(viewContainer, template) {
                    this.viewContainer = viewContainer;
                    this.template = template;
                }
                Object.defineProperty(NgBookIf.prototype, "ngBookIf", {
                    set: function (condition) {
                        if (condition) {
                            this.viewContainer.createEmbeddedView(this.template);
                        }
                        else {
                            this.viewContainer.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                NgBookIf = __decorate([
                    core_1.Directive({
                        selector: '[ngBookIf]',
                        inputs: ['ngBookIf']
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
                ], NgBookIf);
                return NgBookIf;
            }());
            IfTemplateSampleApp = (function () {
                function IfTemplateSampleApp() {
                    this.display = true;
                }
                IfTemplateSampleApp.prototype.toggle = function () {
                    this.display = !this.display;
                };
                IfTemplateSampleApp = __decorate([
                    core_1.Component({
                        selector: 'template-sample-app',
                        directives: [NgBookIf],
                        template: "\n  <button class=\"ui primary button\" (click)=\"toggle()\">\n    Toggle\n  </button>\n\n  <div *ngBookIf=\"display\">\n    The message is displayed\n  </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], IfTemplateSampleApp);
                return IfTemplateSampleApp;
            }());
            exports_1("IfTemplateSampleApp", IfTemplateSampleApp);
        }
    }
});
//# sourceMappingURL=if.js.map