import { Routes, RouterModule } from '@angular/router';

import { AmountDetailComponent } from './components/child-routes/amount-detail/amount-detail';
import { DeliveryDetailComponent } from './components/delivery-detail/delivery-detail';
import { HomeComponent } from "./components/home/home";
import { Http404Component } from './components/http-404/http-404';
import { LoginGuard } from './guards/login-guard';
import { ProductDetailComponent } from "./components/product-detail/product-detail";
import { OrderDetailComponent } from './components/child-routes/order-detail/order-detail';
import { OrderResolve } from './resolves/order-resolve';
import { SupplierDetailComponent } from './components/child-routes/supplier-detail/supplier-detail';
import { UnsavedChangesGuard } from './guards/unsaved-changes-guard';
import { ChatComponent } from './components/chat/chat';

const ROUTES_APP: Routes = [
    { path: '', component: HomeComponent },
    { path: 'delivery/:id', component: DeliveryDetailComponent },
    { path: 'product', component: ProductDetailComponent, data: [{ isProd: true }] },
    {
        // Configuring children routes
        path: 'order', component: OrderDetailComponent, resolve: { order: OrderResolve },
        children: [
            {
                path: 'amount',
                component: AmountDetailComponent,
                canActivate: [LoginGuard]
            },
            {
                path: 'supplier/:supplierId',
                component: SupplierDetailComponent,
                canDeactivate: [UnsavedChangesGuard]
            }
        ]
    },
    { path: 'chat', component: ChatComponent, outlet: "aux" },
    // Lazy loading a module and its components
    { path: 'lazyload', loadChildren: 'app/modules/lazy-load/lazy.load.module'},
    { path: '**', component: Http404Component }
];

/*
Note: Whenever the router can't match the URL to any component, it'll render the
content of Http404Component instead. Example: http://127.0.0.1:8080/#/wrong

Note: 'data' is used to pass static data to the components
*/

export const ROUTING_CONFIG = RouterModule.forRoot(ROUTES_APP);

