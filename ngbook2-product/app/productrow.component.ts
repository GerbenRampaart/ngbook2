import { Component } from "angular2/core";

import { ProductImageComponent } from "./productimage.component";
import { PriceDisplayComponent } from "./pricedisplay.component";
import { ProductDepartmentComponent } from "./productdepartment.component";

import { Product } from "./product";

@Component({
    selector: 'product-row',
    inputs: [ 'product' ],
    host: { 'class': 'item' },
    directives: [ ProductImageComponent, PriceDisplayComponent, ProductDepartmentComponent ],
    template: `
        <product-image [product]="product"><product-image>
        <div class="content">
            <div class="header">{{ product.name }}</div>
            <div class="meta">
                <div class="product-sku">SKU #{{ product.sku }}</div>
            </div>
            <div class="description">
                <product-department [product]="product"></product-department>
            </div>
        </div>
        <price-display [price]="product.price"></price-display>
    `
})
export class ProductRowComponent {
    product: Product;
}