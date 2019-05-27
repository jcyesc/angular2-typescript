import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

/*
This component shows how to get static data configured in the Routes using ActivatedRoute.
*/
@Component({
    selector: 'product-detail',
    template: '<h1 class="product">Product Details Component</h1>',
    styles: ['.product {background: cyan}']
})
export class ProductDetailComponent {
    isProdEnvironment: string;

    constructor(activatedRoute: ActivatedRoute) {
        // Get the static data configure in the Routes object.
        this.isProdEnvironment = activatedRoute.snapshot.data[0]['isProd'];
        console.log("this.isProdEnvironment = " + this.isProdEnvironment);
    }
}
