import { Component, ViewEncapsulation } from '@angular/core';
import { IPriceQuote } from './binding/output-property-binding-price-quoter';

@Component({
    selector: 'app',
    styles: ['.wrapper {background: cyan;}'],
    templateUrl: 'app/app.component.html',
    // encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
    stock: string;
    stockSymbol: string;
    price: number;

    bubbleStockSymbol: string;
    bubblePrice: number;

    todaysDate: string = new Date().toLocaleDateString();
     // Using destructuring
    onInputEvent({ target }): void {
        console.info("AppComponent.onInputeEvent() -> " + target.value);
        this.stock = target.value;
    }

    priceQuoteHandler(event: IPriceQuote) {
        console.info("Output event handler");
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
    }

    bubblePriceQuoteHander(event: CustomEvent) {
        this.bubbleStockSymbol = event.detail.stockSymbol;
        this.bubblePrice = event.detail.lastPrice;
    }
}

