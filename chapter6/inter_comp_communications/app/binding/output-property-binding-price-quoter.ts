import { Component, EventEmitter, Output } from '@angular/core';

export interface IPriceQuote {
    stockSymbol: string;
    lastPrice: number;
}
/**
 * Output properties and custom events
 * 
 * Angular components can dispatch custom events using the EventEmitter object. These
 * events can be handled either in the component or by its parents. EventEmitter is a
 * subclass of Subject (implemented in RxJS) that can serve as both observable and
 * observer. In other words, EventEmitter can dispatch custom events using its emit()
 * method as well as consume observables using its subscribe() method.
 */
@Component({
    selector: 'price-quoter',
    template: `<strong>Inside PriceQuoterComponent:
               {{stockSymbol}} {{price | currency:'USD':true:'1.2-2'}}</strong>`,
    styles: [`:host {background: pink;}`]
})
export class PriceQuoterComponent {
    @Output() lastPrice: EventEmitter<IPriceQuote> = new EventEmitter();
    stockSymbol: string = "IBM";
    price: number;

    constructor() {
        setInterval(() => {
            let priceQuote: IPriceQuote = {
                stockSymbol: this.stockSymbol,
                //lastPrice: (100*Math.random()).toFixed(2)
                lastPrice: 100 * Math.random()
            };

            this.price = priceQuote.lastPrice;
            this.lastPrice.emit(priceQuote);
        }, 1000);
    }
}
