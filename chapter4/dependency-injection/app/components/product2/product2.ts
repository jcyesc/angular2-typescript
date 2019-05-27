import { Component } from '@angular/core';
import { ProductService, Product } from "../../services/product-service";

/*
Note: Both useFactory and useValue come from Angular Core, useValue is a special case
of useFactory, for when the factory is represented by a single expression and doesn't
need any other dependencies.
*/

@Component({
    selector: 'product2',
    template: `<div style="border: 1px solid green;">
        <h1>Product Details 2</h1>
        <h2>Title: {{product.title}}</h2>
        <h2>Description: {{product.description}}</h2>
        <h2>Price: \${{product.price}}</h2>
      </div>`,
    providers: [
        {
            provide: ProductService,
            useFactory: (isDev : string) => {
                if (isDev) {
                    return new ProductService();
                }
                return undefined;
            },
            deps: ["IS_DEV_ENVIRONMENT"]
        },
        { provide: "IS_DEV_ENVIRONMENT", useValue: true }
    ]
})
export class Product2Component {
    product: Product;

    constructor(productService: ProductService) {
        this.product = productService.getProduct();
    }
}
