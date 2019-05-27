import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { NgModule } from '@angular/core';

import { AmountDetailComponent } from './components/child-routes/amount-detail/amount-detail';
import { ApplicationComponent } from './components/application/application';
import { ChatComponent } from './components/chat/chat';
import { DeliveryDetailComponent } from './components/delivery-detail/delivery-detail';
import { HomeComponent } from './components/home/home';
import { Http404Component } from './components/http-404/http-404';
import { LoginGuard } from './guards/login-guard';
import { OrderDetailComponent } from './components/child-routes/order-detail/order-detail';
import { OrderResolve } from './resolves/order-resolve';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { SupplierDetailComponent } from './components/child-routes/supplier-detail/supplier-detail';
import { UnsavedChangesGuard } from './guards/unsaved-changes-guard';
import { ROUTING_CONFIG } from './app.routing';

/*
Note that the root module doesn't know about the internals of LuxuryModule, and it doesn't
even mention LuxuryComponent.
*/
import { LuxuryModule } from './modules/luxury/luxury.module';

@NgModule({
    imports: [BrowserModule, LuxuryModule, ROUTING_CONFIG],
    declarations: [
        AmountDetailComponent,
        ApplicationComponent,
        ChatComponent,
        DeliveryDetailComponent,
        HomeComponent,
        Http404Component,
        OrderDetailComponent,
        ProductDetailComponent,
        SupplierDetailComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        LoginGuard,
        OrderResolve,
        UnsavedChangesGuard
    ],
    bootstrap: [ApplicationComponent]
})
export class AppModule {
}
