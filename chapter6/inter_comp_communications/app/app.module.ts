import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildApiComponent } from './child-api/exposing-child-api';
import { ChildBasicLifecycleComponent } from './component-lifecycle1/child-basic-lifecycle';
import { ChildMultipleNgContentsComponent } from './projection/child-multiple-ng-contents';
import { ChildNgOnChangesLifecycleComponent } from './component-lifecycle2/child-ngonchanges-lifecycle';
import { ChildSimpleNgContentComponent } from './projection/child-simple-ng-content';
import { EventBubblingPriceQuoterComponent } from './binding/event-bubbling-price-quoter';
import { OrderComponent } from './binding/input-property-binding';
import { MediatorComponent } from './mediator/mediator';
import { OrderMeComponent } from './mediator/order-me';
import { ParentApiComponent } from './child-api/exposing-child-api';
import { ParentBasicLifecycleComponent } from './component-lifecycle1/parent-basic-lifecycle';
import { ParentNgOnChangesLifecycleComponent } from './component-lifecycle2/parent-ngonchanges-lifecycle';
import { PriceQuoterMeComponent } from './mediator/price-quoter-me';
import { PriceQuoterComponent } from './binding/output-property-binding-price-quoter';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule        
    ],
    declarations: [
        AppComponent,
        ChildApiComponent,
        ChildBasicLifecycleComponent,
        ChildMultipleNgContentsComponent,
        ChildNgOnChangesLifecycleComponent,
        ChildSimpleNgContentComponent,
        EventBubblingPriceQuoterComponent,
        MediatorComponent,
        OrderComponent,
        OrderMeComponent,
        ParentApiComponent,
        ParentBasicLifecycleComponent,
        ParentNgOnChangesLifecycleComponent,
        PriceQuoterComponent,
        PriceQuoterMeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
