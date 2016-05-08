import { Component, EventEmitter } from "@angular/core";

import { ProductRowComponent } from "./productrow.component";
import { Product } from "./product";

@Component({
    selector: 'products-list',
    directives: [ ProductRowComponent ],
    inputs: [ 'productList' ],
    outputs: [ 'onProductSelected' ],
    template: `
        <div class="ui items">
            <product-row
                *ngFor="let myProduct of productList"
                [product]="myProduct"
                (click)="clicked(myProduct)"
                [class.selected]="isSelected(myProduct)">
            </product-row>
        </div>
    `
})
export class ProductsListComponent {
    
    productList: Product[];
    
    onProductSelected: EventEmitter<Product>;
    
    currentProduct: Product;
    
    constructor() {
        this.onProductSelected = new EventEmitter();
    }
    
    clicked(product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }
    
    isSelected(product: Product) : boolean {
        if(!product || !this.currentProduct) {
            return false;
        }
        
        return product.sku === this.currentProduct.sku;
    }
}