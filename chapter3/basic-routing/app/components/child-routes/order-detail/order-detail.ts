import { Component, OnInit } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { Order, OrderResolve } from '../../../resolves/order-resolve';

/*
This component uses "child routes" which are configure in "/app/app.routing.ts".
There are two components that display the content in the outlet define in OrderDetail:
SupplierDetail and AmountDetail.
*/
@Component({
    selector: 'order-detail',
    templateUrl: 'app/components/child-routes/order-detail/order-detail.html'
})
export class OrderDetailComponent implements OnInit {
    order: Order;

    constructor(private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        // "order" is configured in app.routing.ts and order-resolve.ts
        this.activateRoute.data.subscribe(({ order }) => {
            console.info("The order is: " + order.description);
            this.order = order;
        });
    }
}



