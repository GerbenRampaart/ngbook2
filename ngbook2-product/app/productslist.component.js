System.register(["angular2/core", "./productrow.component"], function(exports_1, context_1) {
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
    var core_1, productrow_component_1;
    var ProductsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (productrow_component_1_1) {
                productrow_component_1 = productrow_component_1_1;
            }],
        execute: function() {
            ProductsListComponent = (function () {
                function ProductsListComponent() {
                    this.onProductSelected = new core_1.EventEmitter();
                }
                ProductsListComponent.prototype.clicked = function (product) {
                    this.currentProduct = product;
                    this.onProductSelected.emit(product);
                };
                ProductsListComponent.prototype.isSelected = function (product) {
                    if (!product || !this.currentProduct) {
                        return false;
                    }
                    return product.sku === this.currentProduct.sku;
                };
                ProductsListComponent = __decorate([
                    core_1.Component({
                        selector: 'products-list',
                        directives: [productrow_component_1.ProductRowComponent],
                        inputs: ['productList'],
                        outputs: ['onProductSelected'],
                        template: "\n        <div class=\"ui items\">\n            <product-row\n                *ngFor=\"#myProduct of productList\"\n                [product]=\"myProduct\"\n                (click)=\"clicked(myProduct)\"\n                [class.selected]=\"isSelected(myProduct)\">\n            </product-row>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductsListComponent);
                return ProductsListComponent;
            }());
            exports_1("ProductsListComponent", ProductsListComponent);
        }
    }
});
//# sourceMappingURL=productslist.component.js.map