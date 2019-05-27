import { Component, Input } from '@angular/core';
// import { Product } from 'app/services/product-service'; It is the same that above.
import { Product } from '../../services/product-service';

@Component({
    selector: 'auction-product-item',
    templateUrl: 'app/components/product-item/product-item.html'
})
export class ProductItemComponent {
    @Input() product: Product;
}

