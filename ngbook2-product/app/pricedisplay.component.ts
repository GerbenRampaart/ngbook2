import { Component } from "@angular/core";

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