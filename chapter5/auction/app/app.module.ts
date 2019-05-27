import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent } from './components/application/application';
import { CarouselComponent } from './components/carousel/carousel';
import { FilterPipe } from "./components/pipes/filter-pipe";
import { FooterComponent } from './components/footer/footer';
import { HomeComponent } from './components/home/home';
import { NavbarComponent } from './components/navbar/navbar';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { ProductItemComponent } from './components/product-item/product-item';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search';
import { StarsComponent } from './components/stars/stars';

import { ProductService } from "./services/product-service";


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'products/:productId', component: ProductDetailComponent }
        ])],
    declarations: [
        ApplicationComponent,
        CarouselComponent,
        FilterPipe,
        FooterComponent,
        HomeComponent,
        NavbarComponent,
        ProductDetailComponent,
        ProductItemComponent,
        SearchComponent,
        StarsComponent],
    providers: [
        ProductService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [ApplicationComponent]
})
export class AppModule {
}
