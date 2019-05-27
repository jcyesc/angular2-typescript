import { Component, ElementRef } from '@angular/core';

/**
 * Event bubbling
 * 
 * As we write this (2019), Angular doesn't offer a syntax to support event bubbling. This
 * means that if we try to listen for an event not on this component but on its parent, the
 * event won't bubble up there.
 * 
 * If event bubbling is important for the application, don't use EventEmitter; use
 * native DOM events, instead.
 */

interface EventBubblingPriceQuote {
    stockSymbol: string,
    lastPrice: number
}

@Component({
    selector: 'event-bubbling-price-quoter',
    template: `
        Bubble Event PriceQuoter: {{stockSymbol}} \${{price}}
    `,
    styles: [`:host {background: pink;}`]
})
export class EventBubblingPriceQuoterComponent {
    stockSymbol: string = "Bubble Stock";
    price: number;

    constructor(element: ElementRef) {
        setInterval(() => {
            let priceQuote: EventBubblingPriceQuote = {
                stockSymbol: this.stockSymbol,
                lastPrice: 100 * Math.random()
            };
            this.price = priceQuote.lastPrice;

            element.nativeElement
                .dispatchEvent(new CustomEvent('bubble-last-price', {
                    detail: priceQuote,
                    bubbles: true
                }));
        }, 1000)
    }
}