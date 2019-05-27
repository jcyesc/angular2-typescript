import { Component, OpaqueToken, Inject } from '@angular/core';
import { ProductService, Product } from "../../services/product-service";

/*
OpaqueToken

Injecting into a hard-coded string (such as IS_DEV_ENVIRONMENT) may cause problems
if your application has more than one provider that uses a string with the same value
for a different purpose. Angular offers an OpaqueToken class that's prefereable to using
strings as tokens.
*/

const BE_URL = new OpaqueToken('BackendUrl');

@Component({
    selector: 'product3',
    template: `<div style="border: 1px solid orange;">
        <h1>Product Details</h1>
        <h2>URL: {{ url }}</h2>
        <h2>Title: {{product.title}}</h2>
        <h2>Description: {{product.description}}</h2>
        <h2>Price: \${{product.price}}</h2>
      </div>`,
    providers: [
        { provide: ProductService, useClass: ProductService },
        { provide: BE_URL, useValue: 'test-server.com' }
    ]

})
export class Product3Component {
    product: Product;

    constructor(productService: ProductService, @Inject(BE_URL) public url: string) {
        this.product = productService.getProduct();
    }
}
