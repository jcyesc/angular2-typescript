import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttributeVsPropertyComponent } from './components/attribute-vs-property/attribute-vs-property';
import { ObservableEventsComponent } from './components/observable-events/observable-events';
import { ObservableEventsHttpComponent } from './components/observable-events-http/observable-events-http';
import { TemperaturePipe } from './components/pipes/temperature-pipe';
import { TemperaturePipeTesterComponent } from './components/pipes/temperature-pipe-tester';
import { TemplateBindingComponent } from './components/template-binding/template-binding';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        AttributeVsPropertyComponent,
        ObservableEventsComponent,
        ObservableEventsHttpComponent,
        TemperaturePipe,
        TemperaturePipeTesterComponent,
        TemplateBindingComponent,
        TwoWayBindingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}