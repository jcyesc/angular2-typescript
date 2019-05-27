import { Component, Output, Directive, EventEmitter } from '@angular/core';
import { StockMe } from './stock-me';

@Component({
    selector: 'price-quoter-me',
    template: `<strong><input type="button" value="Buy" (click)="buyStocksNow($event)">
               {{stockSymbol}} {{lastPrice | currency:'USD':true:'1.2-2'}}</strong>
              `,
    styles: [`:host {background: pink; padding: 5px 15px 15px 15px;}`]
})
export class PriceQuoterMeComponent {
    @Output() buyStocks: EventEmitter<StockMe> = new EventEmitter();

    stockSymbol: string = "Google";
    lastPrice: number;

    constructor() {
        setInterval(() => {
            this.lastPrice = (100 * Math.random());
        }, 2000);
    }

    buyStocksNow(): void {
        let stockToBuy: StockMe = {
            stockSymbol: this.stockSymbol,
            bidPrice: this.lastPrice
        };
        
        this.buyStocks.emit(stockToBuy);
    }
}
