import { Component } from "@angular/core";

import { ProductsListComponent } from "./productslist.component";
import { Product } from "./product";

@Component({
    selector: 'my-app',
    directives: [ ProductsListComponent ],
    template: `
        <div class="inventory-app">
            <products-list
                data-bind-productList="products"
                data-on-onProductSelected="productWasSelected($event)">
            </products-list>
        </div>
    `
})
export class AppComponent {
    products: Product[];

    productWasSelected(product: Product) : void {
        console.log('Product clicked: ' + product);
    }

    constructor() {
        this.products = [
            new Product(
                'MYSHOES', 'Black Running Shoes',
                'resources/images/products/black-shoes.jpg',
                ['Men', 'Shoes', 'Running Shoes'],
                109.99),
            new Product(
                'NEATOJACKET', 'Blue Jacket',
                'resources/images/products/blue-jacket.jpg',
                ['Women', 'Apparel', 'Jackets & Vests'],
                238.99),
            new Product(
                'NICEHAT', 'A Nice Black Hat',
                'resources/images/products/black-hat.jpg',
                ['Men', 'Accessories', 'Hats'],
                29.99)
        ];
    }
}