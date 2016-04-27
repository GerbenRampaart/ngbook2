System.register(['angular2/core', 'angular2/platform/browser', 'services/ApiService'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, browser_1, ApiService_1;
    var DiSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ApiService_1_1) {
                ApiService_1 = ApiService_1_1;
            }],
        execute: function() {
            /*
             * Webpack
             */
            require('css/styles.scss');
            require('images/ng-book-2-minibook.png');
            DiSampleApp = (function () {
                function DiSampleApp(apiService) {
                    this.apiService = apiService;
                }
                DiSampleApp.prototype.invokeApi = function () {
                    this.apiService.get();
                };
                DiSampleApp = __decorate([
                    core_1.Component({
                        selector: 'di-sample-app',
                        template: "\n  <button (click)=\"invokeApi()\">Invoke API</button>\n  "
                    }),
                    __param(0, core_1.Inject(ApiService_1.ApiService)), 
                    __metadata('design:paramtypes', [Object])
                ], DiSampleApp);
                return DiSampleApp;
            }());
            browser_1.bootstrap(DiSampleApp, [
                core_1.provide(ApiService_1.ApiService, { useClass: ApiService_1.ApiService })
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=app.long.js.map