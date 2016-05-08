import { Component } from "@angular/core";

import { Product } from "./product";

@Component({
    selector: 'product-image',
    host: { class: 'ui small image' },
    inputs: [ 'product' ],
    template: `
        <img class="product-image" [src]="product.imageUrl"/>
    `
})
export class ProductImageComponent {
    product: Product;
}