import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product';
import { Product2Component } from './components/product2/product2';
import { Product3Component } from './components/product3/product3';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ProductComponent, Product2Component, Product3Component],
    bootstrap: [AppComponent]
})
export class AppModule {
}