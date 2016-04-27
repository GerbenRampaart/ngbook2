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
    var Message, TransclusionSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Message = (function () {
                function Message() {
                }
                Message.prototype.ngOnInit = function () {
                    console.log('header', this.header);
                };
                Message = __decorate([
                    core_1.Component({
                        selector: '[message]',
                        inputs: ['header'],
                        host: {
                            'class': 'ui message'
                        },
                        template: "\n  <div>\n    <div class=\"header\">\n      {{ header }}\n    </div>\n    <p>\n      <ng-content></ng-content>\n    </p>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Message);
                return Message;
            }());
            TransclusionSampleApp = (function () {
                function TransclusionSampleApp() {
                }
                TransclusionSampleApp = __decorate([
                    core_1.Component({
                        selector: 'transclusion-sample-app',
                        directives: [Message],
                        template: "\n  <div message header=\"My Message\">\n    This is the content of the message\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TransclusionSampleApp);
                return TransclusionSampleApp;
            }());
            exports_1("TransclusionSampleApp", TransclusionSampleApp);
        }
    }
});
//# sourceMappingURL=transclusion.js.map