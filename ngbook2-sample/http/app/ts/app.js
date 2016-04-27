System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', 'components/SimpleHTTPComponent', 'components/MoreHTTPRequests', 'components/YouTubeSearchComponent'], function(exports_1, context_1) {
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
    var core_1, browser_1, http_1, SimpleHTTPComponent_1, MoreHTTPRequests_1, YouTubeSearchComponent_1, YouTubeSearchComponent_2;
    var HttpApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (SimpleHTTPComponent_1_1) {
                SimpleHTTPComponent_1 = SimpleHTTPComponent_1_1;
            },
            function (MoreHTTPRequests_1_1) {
                MoreHTTPRequests_1 = MoreHTTPRequests_1_1;
            },
            function (YouTubeSearchComponent_1_1) {
                YouTubeSearchComponent_1 = YouTubeSearchComponent_1_1;
                YouTubeSearchComponent_2 = YouTubeSearchComponent_1_1;
            }],
        execute: function() {
            /*
             * Webpack
             */
            require('css/styles.scss');
            HttpApp = (function () {
                function HttpApp() {
                }
                HttpApp = __decorate([
                    core_1.Component({
                        selector: 'http-app',
                        directives: [
                            SimpleHTTPComponent_1.SimpleHTTPComponent,
                            MoreHTTPRequests_1.MoreHTTPRequests,
                            YouTubeSearchComponent_1.YouTubeSearchComponent
                        ],
                        template: "\n  <div class=\"container\">\n    <simple-http></simple-http>\n    <hr/>\n    <more-http></more-http>\n    <hr/>\n    <youtube-search></youtube-search>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HttpApp);
                return HttpApp;
            }());
            browser_1.bootstrap(HttpApp, [
                http_1.HTTP_PROVIDERS,
                YouTubeSearchComponent_2.youTubeServiceInjectables
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map