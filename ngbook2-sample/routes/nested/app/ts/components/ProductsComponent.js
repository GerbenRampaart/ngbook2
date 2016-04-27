System.register(['angular2/core', 'angular2/router', 'components/products/MainComponent', 'components/products/InterestComponent', 'components/products/SportifyComponent', 'components/products/ByIdComponent'], function(exports_1, context_1) {
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
    var core_1, router_1, MainComponent_1, InterestComponent_1, SportifyComponent_1, ByIdComponent_1;
    var ProductsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (MainComponent_1_1) {
                MainComponent_1 = MainComponent_1_1;
            },
            function (InterestComponent_1_1) {
                InterestComponent_1 = InterestComponent_1_1;
            },
            function (SportifyComponent_1_1) {
                SportifyComponent_1 = SportifyComponent_1_1;
            },
            function (ByIdComponent_1_1) {
                ByIdComponent_1 = ByIdComponent_1_1;
            }],
        execute: function() {
            ProductsComponent = (function () {
                function ProductsComponent(router) {
                    this.router = router;
                }
                ProductsComponent.prototype.goToProduct = function (id) {
                    this.router.navigate(['./ById', { id: id }]);
                };
                ProductsComponent = __decorate([
                    core_1.Component({
                        selector: 'products',
                        directives: [router_1.RouterOutlet, router_1.RouterLink],
                        template: "\n  <h2>Products</h2>\n\n  <div class=\"navLinks\">\n    <a [routerLink]=\"['./Main']\">Main</a> |\n    <a [routerLink]=\"['./Interest']\">Interest</a> |\n    <a [routerLink]=\"['./Sportify']\">Sportify</a> |\n    Enter id: <input #id size=\"6\">\n    <button (click)=\"goToProduct(id.value)\">Go</button>\n  </div>\n\n  <div class=\"products-area\">\n    <router-outlet></router-outlet>\n  </div>\n  "
                    }),
                    router_1.RouteConfig([
                        { path: '/main', name: 'Main', component: MainComponent_1.MainComponent, useAsDefault: true },
                        { path: '/:id', name: 'ById', component: ByIdComponent_1.ByIdComponent },
                        { path: '/interest', name: 'Interest', component: InterestComponent_1.InterestComponent },
                        { path: '/sportify', name: 'Sportify', component: SportifyComponent_1.SportifyComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ProductsComponent);
                return ProductsComponent;
            }());
            exports_1("ProductsComponent", ProductsComponent);
        }
    }
});
//# sourceMappingURL=ProductsComponent.js.map