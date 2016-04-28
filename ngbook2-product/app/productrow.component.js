System.register(["angular2/core", "./productimage.component", "./pricedisplay.component", "./productdepartment.component"], function(exports_1, context_1) {
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
    var core_1, productimage_component_1, pricedisplay_component_1, productdepartment_component_1;
    var ProductRowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (productimage_component_1_1) {
                productimage_component_1 = productimage_component_1_1;
            },
            function (pricedisplay_component_1_1) {
                pricedisplay_component_1 = pricedisplay_component_1_1;
            },
            function (productdepartment_component_1_1) {
                productdepartment_component_1 = productdepartment_component_1_1;
            }],
        execute: function() {
            ProductRowComponent = (function () {
                function ProductRowComponent() {
                }
                ProductRowComponent = __decorate([
                    core_1.Component({
                        selector: 'product-row',
                        inputs: ['product'],
                        host: { 'class': 'item' },
                        directives: [productimage_component_1.ProductImageComponent, pricedisplay_component_1.PriceDisplayComponent, productdepartment_component_1.ProductDepartmentComponent],
                        template: "\n        <product-image [product]=\"product\"><product-image>\n        <div class=\"content\">\n            <div class=\"header\">{{ product.name }}</div>\n            <div class=\"meta\">\n                <div class=\"product-sku\">SKU #{{ product.sku }}</div>\n            </div>\n            <div class=\"description\">\n                <product-department [product]=\"product\"></product-department>\n            </div>\n        </div>\n        <price-display [price]=\"product.price\"></price-display>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductRowComponent);
                return ProductRowComponent;
            }());
            exports_1("ProductRowComponent", ProductRowComponent);
        }
    }
});
//# sourceMappingURL=productrow.component.js.map