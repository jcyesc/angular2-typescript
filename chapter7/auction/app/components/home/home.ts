import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { Product, ProductService } from '../../services/product-service';

@Component({
    selector: 'auction-home-page',
    templateUrl: 'app/components/home/home.html'
})

export class HomeComponent {
    products: Product[] = [];
    titleFilter: FormControl = new FormControl();
    filterCriteria: string;

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
        this.titleFilter.valueChanges
            .debounceTime(100)
            .subscribe(
                value => { this.filterCriteria = value },
                error => { console.error(error); });
    }
}
