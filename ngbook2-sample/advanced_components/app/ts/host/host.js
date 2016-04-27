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
    var Sample, Popup, HostSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Sample = (function () {
                function Sample() {
                }
                Sample = __decorate([
                    core_1.Component({
                        selector: 'sample',
                        template: "\n  <div class=\"ui card\">\n    <div class=\"content\">\n      <a class=\"header\">Dr. Peter Venkman</a>\n      <div class=\"meta\">\n        <span class=\"date\">Joined in 1984</span>\n      </div>\n      <div class=\"description\">\n        Three former parapsychology professors\n        set up shop as a unique ghost removal\n        service.\n      </div>\n    </div>\n    <div class=\"extra content\">\n      <a>\n        <i class=\"user icon\"></i>\n        22 Friends\n      </a>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Sample);
                return Sample;
            }());
            Popup = (function () {
                function Popup() {
                }
                Popup.prototype.ngOnInit = function () {
                    console.log('message', this.message);
                };
                Popup.prototype.onClick = function () {
                    alert(this.message);
                };
                Popup = __decorate([
                    core_1.Directive({
                        selector: '[popup]',
                        inputs: ['message'],
                        exportAs: 'popup',
                        host: {
                            '(click)': 'onClick()'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Popup);
                return Popup;
            }());
            HostSampleApp = (function () {
                function HostSampleApp() {
                }
                HostSampleApp = __decorate([
                    core_1.Component({
                        selector: 'host-sample-app',
                        directives: [Sample, Popup],
                        template: "\n  <div class=\"ui grid\">\n    <div class=\"two column row\">\n      <div class=\"column\">\n        <sample popup message=\"Clicked me!\" #p1=\"popup\"></sample>\n        <button (click)=\"p1.onClick()\" class=\"ui fluid button\">Trigger popup</button>\n      </div>\n\n      <div class=\"column\">\n        <sample popup message=\"Another click!\" #p2=\"popup\"></sample>\n        <button (click)=\"p2.onClick()\" class=\"ui fluid button\">Trigger popup</button>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HostSampleApp);
                return HostSampleApp;
            }());
            exports_1("HostSampleApp", HostSampleApp);
        }
    }
});
//# sourceMappingURL=host.js.map