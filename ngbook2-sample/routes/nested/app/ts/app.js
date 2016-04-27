System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', 'components/HomeComponent', 'components/ProductsComponent'], function(exports_1, context_1) {
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
    var core_1, browser_1, router_1, HomeComponent_1, ProductsComponent_1;
    var RoutesDemoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (ProductsComponent_1_1) {
                ProductsComponent_1 = ProductsComponent_1_1;
            }],
        execute: function() {
            /*
             * Webpack
             */
            require('css/styles.scss');
            RoutesDemoApp = (function () {
                function RoutesDemoApp(router) {
                    this.router = router;
                }
                RoutesDemoApp = __decorate([
                    core_1.Component({
                        selector: 'router-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <h1>Router Sample</h1>\n      <div class=\"navLinks\">\n        <a [routerLink]=\"['Home']\">Home</a>\n        <a [routerLink]=\"['Products']\">Products</a>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"content\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent, useAsDefault: true },
                        { path: '/products/...', name: 'Products', component: ProductsComponent_1.ProductsComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RoutesDemoApp);
                return RoutesDemoApp;
            }());
            browser_1.bootstrap(RoutesDemoApp, [
                router_1.ROUTER_BINDINGS,
                core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map