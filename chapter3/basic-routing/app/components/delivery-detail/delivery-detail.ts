import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/*
 * This component shows how to process the params passed to it.
 */
@Component({
    selector: 'delivery-detail',
    template: '<h1 class="delivery"># {{ deliveryId }} Delivery detail</h1>',
    styles: ['.delivery {background: green}']
})
export class DeliveryDetailComponent {
    deliveryId: string;

    constructor(activatedRoute: ActivatedRoute) {
        this.deliveryId = activatedRoute.snapshot.params['id'];
    }
}