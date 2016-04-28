import { Component } from "angular2/core";

@Component({
    selector: 'price-display',
    inputs: [ 'price' ],
    template: `
        <div class="price-display">\${{ price }}</div>
    `
})
export class PriceDisplayComponent {
    price: number;
}