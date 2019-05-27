import { Component } from '@angular/core';

/*
Two-way data binding
Two-way data binding is a simple way to keep the view and the model in sync. Whether
the view or the model change first, both are immediately synchronized.
*/
@Component({
    selector: 'two-way-binding',
    template: `
        <div style="border: 1px solid green">
        <input type='text' placeholder= "Enter stock symbol" [(ngModel)] = "lastStockSymbol" />
        <br>The value of lastStockSymbol is {{lastStockSymbol}}
        </div>
        `
})
export class TwoWayBindingComponent {

    lastStockSymbol: string;

    constructor() {
        setTimeout(() => {
            // Code to get the last entered stock from
            // local history goes here (not implemented)

            this.lastStockSymbol = "AAPL";
        }, 2000);
    }
}
