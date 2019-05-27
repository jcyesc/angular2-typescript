import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'supplier-detail',
    template: '<h1 class="supplier">Supplier Details for {{ supplierId }}</h1>',
    styles: ['.supplier {background: pink}']
})
export class SupplierDetailComponent {
    supplierId: string;

    constructor(activatedRoute: ActivatedRoute) {
        this.supplierId = activatedRoute.snapshot.params['supplierId'];
    }
}