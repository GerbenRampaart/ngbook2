import { Component } from "angular2/core";

import { Product } from "./product";

@Component({
    selector: 'product-department',
    inputs: [ 'product' ],
    template: `
        <div class="product-department">
            <span *ngFor="#name of product.department; #i = index">
                <a href="#">{{ name }}</a>
                <span>{{ i < (product.department.length - 1) ? '>' : '' }}</span>
            </span>
        </div>
    `
})
export class ProductDepartmentComponent {
    product: Product;
}