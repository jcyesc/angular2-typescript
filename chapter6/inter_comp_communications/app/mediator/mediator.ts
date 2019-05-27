
import { Component } from '@angular/core';

import { StockMe } from './stock-me';

/**
 * Mediator Pattern
 * 
 * Emitting events works like broadcasting. PriceQuoteComponent emits events
 * via the @Output property without knowing who will receive the events. OrderComponent
 * waits for the value of the @Input property to change as a signal for placing an order.
 * 
 */

@Component({
    selector: 'mediator',
    template: `
        <div style="border: 1px solid blue">
            <price-quoter-me (buyStocks)="priceQuoteHandler($event)"></price-quoter-me>
            <order-me [stock]="stockMe"></order-me>
            <br>
            <br/>
        </div>
        `
})
export class MediatorComponent {
    stockMe: StockMe;

    priceQuoteHandler(event: StockMe) {
        console.info("MediatorComponent.priceQuoteHandler(), " + event);
        this.stockMe = event;
    }
}
