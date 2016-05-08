System.register(["@angular/core", "./productslist.component", "./product"], function(exports_1, context_1) {
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
    var core_1, productslist_component_1, product_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (productslist_component_1_1) {
                productslist_component_1 = productslist_component_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.products = [
                        new product_1.Product('MYSHOES', 'Black Running Shoes', 'resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
                        new product_1.Product('NEATOJACKET', 'Blue Jacket', 'resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
                        new product_1.Product('NICEHAT', 'A Nice Black Hat', 'resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
                    ];
                }
                AppComponent.prototype.productWasSelected = function (product) {
                    console.log('Product clicked: ' + product);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [productslist_component_1.ProductsListComponent],
                        template: "\n        <div class=\"inventory-app\">\n            <products-list\n                data-bind-productList=\"products\"\n                data-on-onProductSelected=\"productWasSelected($event)\">\n            </products-list>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map