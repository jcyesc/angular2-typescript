import { Component } from '@angular/core';
import { ProductService, Product } from "../../services/product-service";

@Component({
    selector: 'product',
    template: `<div style="border: 1px solid green;">
        <h1>Product Details</h1>
        <h2>Title: {{product.title}}</h2>
        <h2>Description: {{product.description}}</h2>
        <h2>Price: \${{product.price}}</h2>
      </div>`,
    providers: [{provide: ProductService, useClass: ProductService}]
    /* providers: [ProductService] */
})
export class ProductComponent {
    product: Product;

    constructor(productService: ProductService) {
        this.product = productService.getProduct();
    }
}
