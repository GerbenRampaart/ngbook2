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
    var Popup, HostSampleApp4;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Popup = (function () {
                function Popup(_elementRef) {
                    console.log(_elementRef);
                }
                Popup.prototype.displayMessage = function () {
                    alert(this.message);
                };
                Popup = __decorate([
                    core_1.Directive({
                        selector: '[popup]',
                        inputs: ['message'],
                        exportAs: 'popup',
                        host: {
                            '(click)': 'displayMessage()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Popup);
                return Popup;
            }());
            HostSampleApp4 = (function () {
                function HostSampleApp4() {
                }
                HostSampleApp4 = __decorate([
                    core_1.Component({
                        selector: 'host-sample-app',
                        directives: [Popup],
                        template: "\n  <div class=\"ui message\" popup #p1=\"popup\"\n       message=\"Clicked the message\">\n    <div class=\"header\">\n      Learning Directives\n    </div>\n\n    <p>\n      This should use our Popup diretive\n    </p>\n  </div>\n\n  <i class=\"alarm icon\" popup #p2=\"popup\"\n     message=\"Clicked the alarm icon\"></i>\n\n  <div style=\"margin-top: 20px;\">\n    <button (click)=\"p1.displayMessage()\" class=\"ui button\">\n      Display popup for message element\n    </button>\n\n    <button (click)=\"p2.displayMessage()\" class=\"ui button\">\n      Display popup for alarm icon\n    </button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HostSampleApp4);
                return HostSampleApp4;
            }());
            exports_1("HostSampleApp4", HostSampleApp4);
        }
    }
});
//# sourceMappingURL=host_04.js.map